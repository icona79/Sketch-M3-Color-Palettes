Mocha.sharedRuntime().loadFrameworkWithName("CoreFoundation");

import BrowserWindow from "sketch-module-web-view";
import { getWebview } from "sketch-module-web-view/remote";

const webviewIdentifier = "dynamicPalette.webview";

const fs = require("@skpm/fs");
const os = require("os");
const path = require("path");
// var sortObj = require("sort-object");
var sort = require("smart-deep-sort");

// #region Sketch Items
const sketch = require("sketch");
const Swatch = sketch.Swatch;
const Style = require("sketch/dom").Style;
import { Page } from "sketch/dom";
var Text = require("sketch/dom").Text;
var Settings = require("sketch/settings");
var identifier = __command.identifier();

// Document variables
var document = sketch.getSelectedDocument();
var doc = context.document;
// #endregion

// #region Styles Variables
var layerStyles = document.sharedLayerStyles;
var textStyles = document.sharedTextStyles;
var arrayLayerStyleIDs = layerStyles.map((sharedstyle) => sharedstyle["id"]);
var arrayLayerStyleNames = layerStyles.map(
    (sharedstyle) => sharedstyle["name"]
);
var arrayLayerStyleStyles = layerStyles.map(
    (sharedstyle) => sharedstyle["style"]
);
var layerStylesOrdered = [...document.sharedLayerStyles].sort(
    (left, right) => left.name > right.name
);

var arrayTextStyleIDs = textStyles.map((sharedstyle) => sharedstyle["id"]);
var arrayTextStyleNames = textStyles.map((sharedstyle) => sharedstyle["name"]);
var arrayTextStyleStyles = textStyles.map(
    (sharedstyle) => sharedstyle["style"]
);
var textStylesOrdered = [...document.sharedTextStyles].sort(
    (left, right) => left.name > right.name
);
var stylesString = JSON.stringify(layerStylesOrdered);
var textString = JSON.stringify(textStylesOrdered);
var insertedTextStyles = [];

var colorVariables = document.swatches;
// This array contains:
// 0 = color variable name
// 1 = color variable folder
// 2 = color variable color (HEX)
// 3 = color variable referencing color
var colorVariablesArray = [];

var MDPalettes = [];
const MDPaletteChromaOptions = [
    "0",
    "10",
    "20",
    "30",
    "40",
    "50",
    "60",
    "70",
    "80",
    "90",
    "95",
    "99",
    "100",
];
// #endregion

// #region Visual variables
const pageName = "Material Design Palettes";
// #endregion Visual variables

export default function () {
    // Check if this is the first time the user launches the plugin
    var isFirstLaunch = true;
    if (Settings.settingForKey("launched") === true) {
        isFirstLaunch = false;
    }

    // If the user ask for the guide or it is the first launch, show the WebView
    if (identifier.includes("tour") || isFirstLaunch) {
        /* Create the webview with the sizes */
        const options = {
            identifier: webviewIdentifier,
            width: 1024,
            height: 620,
            show: false,
            resizable: false,
            minimizable: false,
            maximizable: false,
            fullscreenable: false,
            title: "👀 Plugin Guide",
        };

        if (options["title"] && isFirstLaunch) {
            options["title"] = "🪄 Import theme";
        }

        const browserWindow = new BrowserWindow(options);

        browserWindow.once("ready-to-show", () => {
            try {
                // browserWindow.show();
                browserWindow.webContents
                    .executeJavaScript(`firstLaunch(${isFirstLaunch})`)
                    .then((result) => {
                        // Once we're processing the styles on the webview, we can show it
                        browserWindow.show();
                    });
            } catch (createWebViewErr) {
                console.log(createWebViewErr);
            }
        });

        const webContents = browserWindow.webContents;

        // add a handler for a call from web content's javascript
        webContents.on("nativeLog", (parameters) => {
            try {
                let fromWebContents = parameters;
                // If it is the first launch, load the Material Design webtool and run the plugin
                // If it is the guide, load the Material Design webtool only
                setTimeout(function () {
                    if (isFirstLaunch || fromWebContents.submit === "webtool")
                        loadWebTool();
                    if (isFirstLaunch) {
                        runPlugin();
                    }
                }, 180);

                browserWindow.close();
            } catch (pluginErr) {
                console.log(pluginErr);
            }
        });

        browserWindow.loadURL(require("../resources/webview.html"));
        Settings.setSettingForKey("launched", true);
    } else if (identifier.includes("webtool")) {
        loadWebTool();
    } else {
        runPlugin();
    }

    function runPlugin() {
        let directoryFiles = getPath();
        console.log(directoryFiles);
        if (directoryFiles !== undefined && directoryFiles !== null) {
            // #region JSON files chacek
            let isMDTokens = true;
            let fileName = path.basename(directoryFiles);
            let folder = "";
            if (fileName === "dsp.json") {
                folder =
                    directoryFiles.substring(
                        0,
                        directoryFiles.lastIndexOf("/")
                    ) + "/data/";
            } else if (
                fileName === "components.json" ||
                fileName === "docs.json" ||
                fileName === "fonts.json" ||
                fileName === "tokens.json"
            ) {
                folder =
                    directoryFiles.substring(
                        0,
                        directoryFiles.lastIndexOf("/")
                    ) + "/";
            } else {
                isMDTokens = false;
            }
            // #endregion JSON files chacek

            // *********************************************************
            // If the JSON selected file is correct, import MD3 Palettes
            // *********************************************************
            if (isMDTokens) {
                let fontTokens = JSON.parse(
                    fs.readFileSync(folder + "fonts.json")
                );
                // let docsTokens = JSON.parse(fs.readFileSync(folder + "docs.json"));
                let tokensTokens = JSON.parse(
                    fs.readFileSync(folder + "tokens.json")
                );

                // #region Color Tokens import
                let palettes = [];
                let themes_light = [];
                let themes_dark = [];
                const fillStyles = [];
                const borderStyles = [];
                tokensTokens.entities.forEach((entity) => {
                    let alias = false;
                    if (entity.type === "Alias") {
                        alias = true;
                    }
                    if (!alias) {
                        if (entity.category_id === "ref.palette") {
                            if (!entity.name.includes("NaN")) {
                                let name = entity.name.substring(
                                    entity.name.lastIndexOf(".") + 1
                                );
                                let palette = name.replace(/[0-9]/g, "");
                                let color = entity.value;
                                let description = entity.description;
                                palettes.push([palette, name, color]);
                            }
                        } else if (entity.category_id === "sys.color.light") {
                            let theme = entity.tags[4];
                            let name = entity.tags[3];
                            let palette = entity.tags[3];
                            let color = entity.value;
                            themes_light.push([theme, name, palette, color]);
                        } else if (entity.category_id === "sys.color.dark") {
                            let theme = entity.tags[4];
                            let name = entity.tags[3];
                            let palette = entity.tags[3];
                            let color = entity.value;
                            themes_dark.push([theme, name, palette, color]);
                        }
                    }
                });

                let groupByCategory = palettes.reduce((group, palette) => {
                    const [category] = palette;
                    group[category] = group[category] ?? [];
                    group[category].push(palette);
                    return group;
                }, {});
                // #endregion Color Tokens import

                // #region Text Tokens import
                const textMDStyles = [];
                let styleName = "";
                let fontFamily = "";
                let fontSize = 0;
                let fontLineHeight = 0;
                let fontWeight = "Regular";
                let fontKerning = 0;
                fontTokens.entities.forEach((entity) => {
                    let alias = false;
                    if (entity.type === "Alias") {
                        alias = true;
                    }
                    if (!alias) {
                        styleName = entity.tags[0];
                        fontFamily = entity.tokens[0].value;
                        fontLineHeight = parseFloat(entity.tokens[1].value);
                        fontWeight = entity.tokens[2].value;
                        fontKerning = parseFloat(entity.tokens[3].value);
                        fontSize = parseFloat(entity.tokens[4].value);
                        textMDStyles.push([
                            styleName,
                            fontFamily,
                            fontLineHeight,
                            fontWeight,
                            fontKerning,
                            fontSize,
                        ]);
                    }
                });
                // #endregion Text Tokens import

                let generatedLayerStyles = [];
                let generatedTextStyles = [];
                // Create color variables for each palette
                let colorVariables = paletteToColorVariables(palettes);

                // #region Connect Color Variables
                themes_light.forEach((style) => {
                    generatedLayerStyles.push(
                        createNewLayerStyle(
                            style[0],
                            style[1],
                            style[2],
                            style[3]
                        )
                    );
                    if (availableTextStyles(style[1])) {
                        textMDStyles.forEach((textStyle) => {
                            generatedTextStyles.push(
                                createNewTextStyle(
                                    style[0],
                                    style[1],
                                    style[2],
                                    style[3],
                                    textStyle
                                )
                            );
                        });
                    }
                });
                themes_dark.forEach((style) => {
                    generatedLayerStyles.push(
                        createNewLayerStyle(
                            style[0],
                            style[1],
                            style[2],
                            style[3]
                        )
                    );
                    if (availableTextStyles(style[1])) {
                        textMDStyles.forEach((textStyle) => {
                            generatedTextStyles.push(
                                createNewTextStyle(
                                    style[0],
                                    style[1],
                                    style[2],
                                    style[3],
                                    textStyle
                                )
                            );
                        });
                    }
                });
                // #endregion Connect Color Variables

                // #region Generates elements
                // 1. Remove the page if it exists
                removeObjectsFromPage(document, pageName);
                // 2. Create a new page for the Color explaination
                let newPage = findOrCreatePage(document, pageName);
                // #region Tonal Palettes
                // 3. Insert the Palette artboard
                let paletteArtboard = createArtboard(
                    newPage,
                    0,
                    0,
                    1636,
                    816,
                    "Tonal Palettes"
                );
                let paletteTitle = createTextWithStyleName(
                    paletteArtboard,
                    32,
                    16,
                    "light/display/on-background/display-large",
                    "Tonal Palette",
                    "Tonal Palette title"
                );
                let palettesList = createPaletteInArboard(
                    paletteArtboard,
                    groupByCategory
                );
                // #endregion Tonal Palettes
                // #region Light theme
                // 4. insert the light theme artboard
                let lightThemeArtboard = createArtboard(
                    newPage,
                    1736,
                    0,
                    736,
                    816,
                    "Light theme"
                );
                let lightThemeTitle = createTextWithStyleName(
                    lightThemeArtboard,
                    32,
                    16,
                    "light/display/on-background/display-large",
                    "Light Theme",
                    "Light Theme title"
                );
                let lightThemeList = createThemeInArboard(
                    lightThemeArtboard,
                    "light",
                    generatedLayerStyles,
                    generatedTextStyles
                );
                // #endregion Light theme
                // #region Dark theme
                // 5. insert the dark theme artboard
                let darkThemeArtboard = createArtboard(
                    newPage,
                    2572,
                    0,
                    736,
                    816,
                    "Dark theme"
                );
                let darkThemeTitle = createTextWithStyleName(
                    darkThemeArtboard,
                    32,
                    16,
                    "dark/display/on-background/display-large",
                    "Dark Theme",
                    "Dark Theme title"
                );
                let darkThemeList = createThemeInArboard(
                    darkThemeArtboard,
                    "dark",
                    generatedLayerStyles,
                    generatedTextStyles
                );
                // #endregion Dark theme
                // #endregion Generates elements
                newPage.selected = true;
                document.sketchObject.contentDrawView().centerLayersInCanvas();

                // wait for animation to complete
                setTimeout(function () {
                    newPage.selected = true;
                }, 100);

                sketch.UI.alert(
                    "Material Design palette imported!",
                    "💎 Your Color Variables and Layer and Text styles are waiting for you! 💎"
                );
            } else {
                sketch.UI.alert(
                    "Select the correct file",
                    "Please select one of the JSON files from your downloaded Material Design 3 token folder"
                );
            }
        }
    }

    function loadWebTool() {
        openUrl("https://links.gratton.design/material-design-webtool");
    }

    function paletteToColorVariables(palettes) {
        let arrayColorVarNames = document.swatches.map(
            (Swatch) => Swatch["name"]
        );
        palettes.forEach((palette) => {
            let paletteName = palette[0];
            let colorName = palette[1];
            let name = paletteName + "/" + colorName;

            let color = palette[2];
            let newSwatch = Swatch.from({
                name: name,
                color: color,
            });

            // add the color variable to the local color variables Array
            colorVariablesArray.push([
                name,
                name.split("/")[0],
                color,
                newSwatch.referencingColor,
            ]);
            // Generate the new Color Variable if it doesn't exist
            if (arrayColorVarNames.length > 0) {
                let varIndex = arrayColorVarNames.indexOf(name);
                if (varIndex === -1) {
                    document.swatches.push(newSwatch);
                } else {
                    var existingSwatch = document.swatches[varIndex];

                    let newMSColor = MSColor.colorWithHex_alpha(color, 1);

                    // document.swatches[varIndex].sketchObject.updateWithColor(
                    //     MSColor.colorWithHex_alpha(color[1].slice(0, 7), 1)
                    // );

                    document.swatches[varIndex].sketchObject.updateWithColor(
                        newMSColor
                    );

                    let swatchContainer = document.sketchObject
                        .documentData()
                        .sharedSwatches();

                    // REFRESHES THE UI
                    swatchContainer.updateReferencesToSwatch(
                        existingSwatch.sketchObject
                    );
                }
            } else {
                document.swatches.push(newSwatch);
            }
        });
    }
}

function createPaletteInArboard(artboard, groupByCategory) {
    let n = groupByCategory.length;
    let xPos = 32;
    let yPos = 132;
    let width = 80;
    let height = 80;

    let ordered = sort(groupByCategory);

    for (const [key, value] of Object.entries(ordered)) {
        let paletteName = key;
        let paletteTitle = createTextWithStyleName(
            artboard,
            xPos,
            yPos,
            "light/headline/on-background/headline-large",
            paletteName,
            "title-" + paletteName
        );
        xPos = 276;
        yPos -= 20;

        if (typeof value === "object") {
            value.forEach((color) => {
                let paletteFolder = color[1];
                let paletteColorName = color[2];
                let paletteColor = color[0];
                createShapePathWithColorVariable(
                    artboard,
                    xPos,
                    yPos,
                    width,
                    height,
                    "Oval",
                    paletteFolder + "/" + paletteColorName,
                    paletteColorName
                );
                xPos += 104;
            });
        }

        xPos = 32;
        yPos += 132;
    }
}

function createThemeInArboard(artboard, theme) {
    let xPos = 32;
    let yPos = 112;
    let width = 168;
    let height = 104;

    const stylesTable = [
        "primary",
        "on-primary",
        "primary-container",
        "on-primary-container",
        "secondary",
        "on-secondary",
        "secondary-container",
        "on-secondary-container",
        "tertiary",
        "on-tertiary",
        "tertiary-container",
        "on-tertiary-container",
        "error",
        "on-error",
        "error-container",
        "on-error-container",
        "background",
        "on-background",
        "surface",
        "on-surface",
        "surface-variant",
        "on-surface-variant",
        "outline",
    ];

    const styleTableLength = stylesTable.length;
    let shapeStyle = "";
    let shapeStyleID = "";
    let textStyle = "";
    let textStyleID = "";
    for (let i = 0; i < styleTableLength; i++) {
        let styleName = stylesTable[i];
        shapeStyle = theme + "/fills/" + styleName;
        let isContainer = false;
        if (styleName.includes("-container")) {
            isContainer = true;
        }
        let isOn = false;
        if (styleName.includes("on-")) {
            isOn = true;
        }

        if (isContainer && isOn) {
            textStyle = theme + "/body/inverse-on-surface/body-large";
        } else if (isContainer) {
            textStyle =
                theme +
                "/body/" +
                styleName.replace("on-", "").replace("-container", "") +
                "/body-large";
        } else if (
            styleName.includes("on-background") ||
            styleName.includes("on-surface")
        ) {
            textStyle = theme + "/body/inverse-on-surface/body-large";
        } else if (styleName.includes("outline")) {
            textStyle = theme + "/body/on-background/body-large";
        } else if (isOn) {
            textStyle =
                theme + "/body/" + styleName.replace("on-", "") + "/body-large";
        } else {
            textStyle = theme + "/body/on-" + styleName + "/body-large";
        }

        let styleShape = createShapePathWithStyleName(
            artboard,
            xPos,
            yPos,
            width,
            height,
            "Rectangle",
            shapeStyle,
            styleName
        );

        let styleText = createTextWithStyleName(
            artboard,
            xPos,
            yPos + 4,
            textStyle,
            styleName,
            styleName
        );
        styleText.frame.x = xPos + width - styleText.frame.width - 4;
        if (i % 4 !== 3 || i === 0) {
            xPos += width;
        } else {
            xPos = 32;
            yPos += height;
        }
    }
}

// ******************************************************************* //
// General Styles management functions                                 //
// ******************************************************************* //
function getLayerStyleIDFromName(name) {
    let styleID = "";
    for (let i = 0; i < arrayLayerStyleIDs.length; i++) {
        if (arrayLayerStyleNames[i] === name) {
            styleID = arrayLayerStyleIDs[i];
        }
    }
    return styleID;
}

function getTextStyleIDFromName(name) {
    let styleID = "";
    for (let i = 0; i < arrayTextStyleIDs.length; i++) {
        if (arrayTextStyleNames[i] === name) {
            styleID = arrayTextStyleIDs[i];
        }
    }
    return styleID;
}

function createNewLayerStyle(theme = "", name = "", palette = "", color = "") {
    try {
        let generatedStyles = [];
        let styleNameFill = theme + "/fills/" + name;
        let styleNameBorder = theme + "/borders/" + name;
        let styleColor = color + "ff".toUpperCase();
        let checkName = name.replace(/[0-9]/g, "").split("-");

        // #region assign color variable
        let shouldSkip = false;
        colorVariables.forEach((variable) => {
            let variableColor = variable.color.toUpperCase();
            let variableName = variable.name;
            let variableFolder = variableName.split("/")[0];

            if (shouldSkip) {
                return styleColor;
            }
            if (checkName.includes(variableFolder)) {
                if (variableColor === styleColor) {
                    styleColor = variable.referencingColor;
                    shouldSkip = true;
                    return styleColor;
                }
            } else if (variableFolder === "neutral") {
                if (variableColor === styleColor) {
                    styleColor = variable.referencingColor;
                    shouldSkip = true;
                    return styleColor;
                }
            } else if (variableFolder === "neutral-variant") {
                if (variableColor === styleColor) {
                    styleColor = variable.referencingColor;
                    shouldSkip = true;
                    return styleColor;
                }
            }
        });
        // #endregion assign color variable

        let fills = [
            {
                color: styleColor,
                fillType: Style.FillType.Color,
            },
        ];
        let borders = [
            {
                color: styleColor,
                fillType: Style.FillType.Color,
                position: Style.BorderPosition.Inside,
            },
        ];

        // 1. If the style is new
        if (arrayLayerStyleNames.indexOf(styleNameFill) === -1) {
            let sharedStyle = layerStyles.push({
                name: styleNameFill,
                style: {
                    fills: fills,
                    borders: [],
                },
                document: document,
            });
            generatedStyles.push([styleNameFill, palette]);
        }
        if (arrayLayerStyleNames.indexOf(styleNameBorder) === -1) {
            let sharedStyle = layerStyles.push({
                name: styleNameBorder,
                style: {
                    fills: [],
                    borders: borders,
                },
                document: document,
            });
            generatedStyles.push([styleNameBorder, palette]);
        }
        // 2. If the style exists
        if (arrayLayerStyleNames.indexOf(styleNameFill) !== -1) {
            let existingStyleID = getLayerStyleIDFromName(styleNameFill);
            if (existingStyleID !== "") {
                let localIndex = arrayLayerStyleIDs.indexOf(existingStyleID);
                let existingStyle = layerStyles[localIndex];
                existingStyle.style.fills[0].color = fills[0].color;
                generatedStyles.push([styleNameFill, palette]);
            }
        }
        if (arrayLayerStyleNames.indexOf(styleNameBorder) !== -1) {
            let existingStyleID = getLayerStyleIDFromName(styleNameBorder);
            if (existingStyleID !== "") {
                let localIndex = arrayLayerStyleIDs.indexOf(existingStyleID);
                let existingStyle = layerStyles[localIndex];
                existingStyle.style.border[0].color = border[0].color;
                generatedStyles.push([styleNameBorder, palette]);
            }
        }
        updateLayerStyles();
        return generatedStyles;
    } catch (createLayerStyleErr) {
        console.log(createLayerStyleErr);
    }
}

function createNewTextStyle(
    theme = "",
    name = "",
    palette = "",
    color = "",
    styleDetails = []
) {
    try {
        // styleDetails:
        // 0 = styleName (containes group + - + variant),
        // 1 = fontFamily,
        // 2 = fontLineHeight,
        // 3 = fontWeight,
        // 4 = fontKerning,
        // 5 = fontSize

        let generatedStyles = [];
        let textName = styleDetails[0];
        let styleName =
            theme +
            "/" +
            styleDetails[0].split("-")[0] +
            "/" +
            name +
            "/" +
            styleDetails[0];
        let fontFamily = styleDetails[1];
        let fontLineHeight = styleDetails[2];
        let fontWeight = 5;
        if (styleDetails[3] === "Medium") {
            fontWeight = 6;
        }
        let fontKerning = styleDetails[4];
        let fontSize = styleDetails[5];
        let styleColor = color + "ff".toUpperCase();
        let checkName = name.replace(/[0-9]/g, "").split("-");

        // #region assign color variable
        let shouldSkip = false;

        colorVariables.forEach((variable) => {
            let variableColor = variable.color.toUpperCase();
            let variableName = variable.name;
            let variableFolder = variableName.split("/")[0];

            if (shouldSkip) {
                return styleColor;
            }
            if (checkName.includes(variableFolder)) {
                if (variableColor === styleColor) {
                    styleColor = variable.referencingColor;
                    shouldSkip = true;
                    return styleColor;
                }
            } else if (variableFolder === "neutral") {
                if (variableColor === styleColor) {
                    styleColor = variable.referencingColor;
                    shouldSkip = true;
                    return styleColor;
                }
            } else if (variableFolder === "neutral-variant") {
                if (variableColor === styleColor) {
                    styleColor = variable.referencingColor;
                    shouldSkip = true;
                    return styleColor;
                }
            }
        });
        // #endregion assign color variable

        if (arrayTextStyleNames.indexOf(styleName) === -1) {
            let sharedStyle = textStyles.push({
                name: styleName,
                style: {
                    textColor: styleColor,
                    fontSize: fontSize,
                    fontFamily: fontFamily,
                    lineHeight: fontLineHeight,
                    kerning: fontKerning,
                    fontWeight: fontWeight,
                    fills: [],
                    borders: [],
                    alignment: "left",
                },
                document: document,
            });
            insertedTextStyles.push([sharedStyle.name, palette]);
            updateTextStyles();
            return sharedStyle;
        } else {
            // Update styles
            let existingStyleID = getTextStyleIDFromName(styleName);
            if (existingStyleID !== "") {
                let localIndex = arrayTextStyleIDs.indexOf(existingStyleID);
                let existingStyle = textStyles[localIndex];

                existingStyle.style.textColor = styleColor;
                existingStyle.style.fontSize = fontSize;
                existingStyle.style.fontFamily = fontFamily;
                existingStyle.style.lineHeight = fontLineHeight;
                existingStyle.style.kerning = fontKerning;
                generatedStyles.push([existingStyle.name, palette]);
                updateTextStyles();
                return existingStyle;
            }
            // Update titles
            styleName = folder + "H1/" + styleDetails[0];
            existingStyleID = getTextStyleIDFromName(styleName);
            if (existingStyleID !== "") {
                let localIndex = arrayTextStyleIDs.indexOf(existingStyleID);
                let existingStyle = textStyles[localIndex];

                existingStyle.style.textColor = styleColor;

                generatedStyles.push([existingStyle.name, palette]);
                updateTextStyles();
                return existingStyle;
            }
        }
    } catch (createTextStyleErr) {
        console.log(createTextStyleErr);
    }
}

function updateLayerStyles() {
    layerStyles = document.sharedLayerStyles;
    arrayLayerStyleIDs = layerStyles.map((sharedstyle) => sharedstyle["id"]);
    arrayLayerStyleNames = layerStyles.map(
        (sharedstyle) => sharedstyle["name"]
    );
    arrayLayerStyleStyles = layerStyles.map(
        (sharedstyle) => sharedstyle["style"]
    );
}

function updateTextStyles() {
    let textStyles = document.sharedTextStyles;
    arrayTextStyleIDs = textStyles.map((sharedstyle) => sharedstyle["id"]);
    arrayTextStyleNames = textStyles.map((sharedstyle) => sharedstyle["name"]);
    arrayTextStyleStyles = textStyles.map(
        (sharedstyle) => sharedstyle["style"]
    );
}

function availableTextStyles(style = "") {
    let toReturn = false;
    let availableTextStyles = [
        "primary",
        "on-primary",
        "on-primary-container",
        "secondary",
        "on-secondary",
        "on-secondary-container",
        "tertiary",
        "on-tertiary",
        "on-tertiary-container",
        "error",
        "on-error",
        "on-error-container",
        "on-background",
        "on-surface",
        "on-surface-variant",
        "inverse-primary",
        "inverse-on-surface",
    ];
    // availableTextStyles.forEach((availableStyle) => {
    // console.log(style);
    if (availableTextStyles.includes(style.toLowerCase())) {
        toReturn = true;
    }
    // });
    return toReturn;
}

function getPath(initialPath = "~/Documents") {
    const panel = NSOpenPanel.openPanel();
    panel.setCanChooseFiles(true);
    panel.setCanChooseDirectories(false);
    panel.setCanCreateDirectories(false);
    panel.setAllowsMultipleSelection(false);
    panel.setTitle("Select a folder");
    panel.setPrompt("Select");
    panel.setDirectoryURL(NSURL.fileURLWithPath(initialPath));
    const result = panel.runModal();
    if (result === NSFileHandlingPanelOKButton) {
        return panel.URL().path();
    } else {
        return null;
    }
}

// ******************************************************************* //
// Pages management support functions                                  //
// ******************************************************************* //
function findOrCreatePage(document, name) {
    const [page] = document.pages.filter((page) => page.name === name);

    if (!page) {
        return new Page({
            name,
            parent: document,
        });
    } else {
        return page;
    }
}

function findAndRemovePage(document, name, remove = false) {
    const [page] = document.pages.filter((page) => page.name === name);

    let message = "";
    if (page && !remove) {
        return page;
    } else if (page && remove) {
        page.remove();
    } else {
        message = "Page do not exist";
        return;
    }
}

// ******************************************************************* //
// Handle function to manage Sketch items                              //
// ******************************************************************* //
function createArtboard(parentLayer, x, y, width, height, name) {
    let Artboard = sketch.Artboard;
    let artboard = new Artboard({
        name: name,
        parent: parentLayer,
        frame: {
            x: x,
            y: y,
            width: width,
            height: height,
        },
    });
    if (name.includes("Dark")) {
        artboard.background = {
            enabled: true,
            includedInExport: false,
            color: "#000000ff",
        };
    }

    return artboard;
}

function removeObjectsFromPage(document, pageName, id = "") {
    const [page] = document.pages.filter((page) => page.name === pageName);
    if (page) {
        let items = sketch.find("*", page);
        items.forEach((item) => {
            item.remove();
        });
    }
}

function createShapePathWithColorVariable(
    parentLayer,
    x,
    y,
    width,
    height,
    type,
    colorName,
    name
) {
    let ShapePath = sketch.ShapePath;
    let newShape = new ShapePath({
        parent: parentLayer,
        frame: {
            x: x,
            y: y,
            width: width,
            height: height,
        },
        shapeType: type,
        name: name,
    });
    newShape.style.fills = [
        {
            color: matchingSwatchForName(colorName).referencingColor,
            fillType: Style.FillType.Color,
        },
    ];
    newShape.style.borders = [
        {
            color: "#c7c7c7",
            fillType: Style.FillType.Color,
            position: Style.BorderPosition.Inside,
        },
    ];

    return newShape;
}

function createShapePathWithStyleName(
    parentLayer,
    x,
    y,
    width,
    height,
    type,
    styleName,
    name
) {
    let shapeStyleID = getLayerStyleIDFromName(styleName);
    let index = arrayLayerStyleIDs.indexOf(shapeStyleID);

    let ShapePath = sketch.ShapePath;
    let newShape = new ShapePath({
        parent: parentLayer,
        frame: {
            x: x,
            y: y,
            width: width,
            height: height,
        },
        shapeType: type,

        name: name,
    });

    newShape.sharedStyleId = shapeStyleID;
    newShape.style = layerStyles[index].style;

    return newShape;
}

function createTextWithStyleName(
    parentLayer,
    posX,
    posY,
    styleName,
    textValue = "",
    textName = ""
) {
    let textX = posX;
    let textY = posY;

    let textStyleID = getTextStyleIDFromName(styleName);
    // console.log("Text");
    // console.log(styleName);
    // console.log(textStyleID);
    let index = arrayTextStyleIDs.indexOf(textStyleID);

    let newText = new Text({
        parent: parentLayer,
        text: textValue,
        sharedStyleId: textStyleID,
        style: textStyles[index].style,
        name: textName,
    });

    newText.frame.x = posX;
    newText.frame.y = posY;

    return newText;
}

function matchingSwatchForName(name = "") {
    const swatches = sketch.getSelectedDocument().swatches;
    const matchingSwatches = swatches.filter((swatch) => swatch.name === name);
    if (matchingSwatches.length == 0) {
        return null;
    }
    if (matchingSwatches.length == 1) {
        return matchingSwatches[0];
    }
}

// ******************************************************************* //
// When the plugin is shutdown by Sketch (for example when the user    //
// disable the plugin) we need to close the webview if it's open       //
// ******************************************************************* //
export function onShutdown() {
    const existingWebview = getWebview(webviewIdentifier);
    if (existingWebview) {
        existingWebview.close();
    }
}

function openUrl(url) {
    NSWorkspace.sharedWorkspace().openURL(NSURL.URLWithString(url));
}
