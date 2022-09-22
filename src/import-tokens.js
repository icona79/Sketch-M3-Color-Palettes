import colorcolor from "colorcolor";
var cd = require("color-difference");

import { resolve } from "path";
const fs = require("@skpm/fs");
const os = require("os");
const path = require("path");
const desktopDir = path.join(os.homedir(), "Desktop");

// #region Sketch Items
const sketch = require("sketch");
const Swatch = sketch.Swatch;
const Style = require("sketch/dom").Style;
import { Page } from "sketch/dom";
var Group = require("sketch/dom").Group;
var Text = require("sketch/dom").Text;
var SharedStyle = require("sketch/dom").SharedStyle;

// Document variables
var document = sketch.getSelectedDocument();
var firstSelectedLayer = document.selectedLayers.layers[0];
var artboard = sketch.Artboard;
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

// This array contains:
// 0 = color variable name
// 1 = color variable folder
// 2 = color variable color (HEX)
// 3 = color variable referencing color
var colorVariablesArray = [];
// #endregion

export default function () {
    let directoryFiles = getPath();
    let folder =
        directoryFiles.substring(0, directoryFiles.lastIndexOf("/")) + "/data/";
    let fileName = path.basename(directoryFiles);
    if (fileName === "dsp.json") {
        let fontTokens = JSON.parse(fs.readFileSync(folder + "fonts.json"));
        // let docsTokens = JSON.parse(fs.readFileSync(folder + "docs.json"));
        let tokensTokens = JSON.parse(fs.readFileSync(folder + "tokens.json"));

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
                        // console.log("Name: " + name);
                        let palette = name.replace(/[0-9]/g, "");
                        // console.log("Palette: " + palette);
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
        // themes_light.forEach((style) => {
        //     generatedLayerStyles.push(
        //         createNewLayerStyle(style[0], style[1], style[2], style[3])
        //     );
        //     if (availableTextStyles(style[1])) {
        //         textMDStyles.forEach((textStyle) => {
        //             generatedTextStyles.push(
        //                 createNewTextStyle(
        //                     style[0],
        //                     style[1],
        //                     style[2],
        //                     style[3],
        //                     textStyle
        //                 )
        //             );
        //         });
        //     }
        // });
        // themes_dark.forEach((style) => {
        //     generatedLayerStyles.push(
        //         createNewLayerStyle(style[0], style[1], style[2], style[3])
        //     );
        //     if (availableTextStyles(style[1])) {
        //         textMDStyles.forEach((textStyle) => {
        //             generatedTextStyles.push(
        //                 createNewTextStyle(
        //                     style[0],
        //                     style[1],
        //                     style[2],
        //                     style[3],
        //                     textStyle
        //                 )
        //             );
        //         });
        //     }
        // });
        // #endregion Connect Color Variables

        // #region Generates elements
        let newPage = findOrCreatePage(document, "Material Design Palettes");
        // #region Tonal Palettes
        let paletteArtboard = createArtboard(
            newPage,
            0,
            0,
            1000,
            100,
            "Tonal Palettes"
        );
        let paletteTitle = createTextWithStyleName(
            paletteArtboard,
            32,
            16,
            "light/headline/on-background/headline-large",
            "Tonal Palette",
            "Tonal Palette title"
        );
        console.log(paletteTitle);
        // #endregion Tonal Palettes
        // #endregion Generates elements
    } else {
        sketch.UI.alert(
            "Select the correct file",
            "Please select the dsp.json file from your downloaded Material Design 3 token folder"
        );
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
                if (arrayColorVarNames.indexOf(colorName) === -1) {
                    document.swatches.push(newSwatch);
                } else {
                    var existingSwatch =
                        document.swatches[
                            arrayColorVarNames.indexOf(colorName)
                        ];
                    document.swatches[
                        arrayColorVarNames.indexOf(colorName)
                    ].sketchObject.updateWithColor(
                        MSColor.colorWithHex_alpha(color[1].slice(0, 7), 1)
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

// ******************************************************************* //
// General Styles management functions                                 //
// ******************************************************************* //
function getLayerStyleNameFromID(id) {
    let styleName = "";
    for (let i = 0; i < arrayLayerStyleNames.length; i++) {
        if (arrayLayerStyleIDs[i] === id) {
            styleName = arrayLayerStyleNames[i];
        }
    }
    return styleName;
}

function getTextStyleNameFromID(id) {
    try {
        let textStyle = "";
        for (let i = 0; i < arrayTextStyleStyles.length; i++) {
            if (arrayTextStyleIDs[i] === id) {
                textStyle = arrayTextStyleStyles[i];
            }
        }
        return textStyle;
    } catch (getTextStylesStyleFromIDErr) {
        console.log(getTextStylesStyleFromIDErr);
    }
}

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
        let styleNameFill = theme + "/Fills/" + name;
        let styleNameBorder = theme + "/Borders/" + name;
        let styleColor = color + "ff".toUpperCase();
        let checkName = name.replace(/[0-9]/g, "").split("-");

        let colorVariables = document.swatches;
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
                existingStyle.style.fills[0].color = fills[0].color;
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

        let colorVariables = document.swatches;
        let shouldSkip = false;

        // #region assign color variable
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

function backgroundWithStyle(
    parentLayer,
    x,
    y,
    width,
    height,
    styleID,
    cornerRadius
) {
    let xPosition = x;
    let yPosition = y;
    let backgroundWidth = width;
    let backgroundHeight = height;
    let backgroundColor = "#ffffff";
    let backgroundBorder = "";
    let backgroundStyleID = styleID;
    let backgroundCornerRadius = cornerRadius;

    let index = arrayLayerStyleIDs.indexOf(backgroundStyleID);

    buttonBackground = createShapePath(
        parentLayer,
        xPosition,
        yPosition,
        backgroundWidth,
        backgroundHeight,
        backgroundColor,
        backgroundBorder,
        buttonBackgroundName
    );

    buttonBackground.sharedStyleId = backgroundStyleID;
    buttonBackground.style = layerStyles[index].style;
    buttonBackground.points.forEach(
        (point) => (point.cornerRadius = backgroundCornerRadius)
    );
    buttonBackground.sketchObject.setFixedRadius(backgroundCornerRadius);

    buttonBackground.moveToBack();
}

/* Manage the text */
function createTextWithStyleID(parentLayer, padding, styleID) {
    let textX = padding;
    let textY = 10;
    let textParent = parentLayer;
    let textStyleID = styleID;
    let textValue = buttonTextName;
    let textName = buttonTextName;

    let index = arrayTextStyleIDs.indexOf(textStyleID);

    let newText = new Text({
        parent: textParent,
        text: textValue,
    });

    newText.frame.x = textX;
    newText.frame.y = textY;
    newText.sharedStyleId = textStyleID;
    newText.style = textStyles[index].style;
    newText.name = textName;

    return newText;
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

    return artboard;
}

function createShapePath(
    parentLayer,
    x,
    y,
    width,
    height,
    background,
    border,
    name
) {
    let borders = [];
    if (border !== "") {
        borders = border;
    }
    let ShapePath = sketch.ShapePath;
    let newShape = new ShapePath({
        parent: parentLayer,
        frame: {
            x: x,
            y: y,
            width: width,
            height: height,
        },
        style: { fills: [background], borders: borders },
        name: name,
    });

    return newShape;
}

function createGroup(parentLayer, children, name) {
    try {
        let Group = sketch.Group;
        let newGroup = new Group({
            parent: parentLayer,
            layers: children,
            name: name,
        });

        return newGroup;
    } catch (errGroup) {
        console.log(errGroup);
    }
}
