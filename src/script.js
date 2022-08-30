import {
    argbFromHex,
    hexFromArgb,
    themeFromSourceColor,
    applyTheme,
    TonalPalette,
    HCT,
} from "@material/material-color-utilities";
import { isDeepStrictEqual } from "util";

import { resolve } from "path";
const fs = require("@skpm/fs");
const os = require("os");
const path = require("path");
const desktopDir = path.join(os.homedir(), "Desktop");

// #region Sketch Items
const sketch = require("sketch");
const Swatch = sketch.Swatch;
const Style = require("sketch/dom").Style;

// Document variables
var doc = context.document;
var document = sketch.getSelectedDocument();
var firstSelectedLayer = document.selectedLayers.layers[0];
var artboard = sketch.Artboard;
var data = document.sketchObject.documentData();
var image = sketch.Image;
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
// #endregion

export default function () {
    const defaultColor = "#f82506";

    // #region Theme
    const theme = themeFromSourceColor(argbFromHex(defaultColor), [
        // {
        //     name: "custom-1",
        //     value: argbFromHex("#ff0000"),
        //     blend: true,
        // },
        {},
    ]);
    // #endregion Theme

    // #region Colors and palettes creation
    const primary = ["Primary", defaultColor];
    const secondary = ["Secondary", hexFromArgb(theme.schemes.light.secondary)];
    const tertiary = ["Tertiary", hexFromArgb(theme.schemes.light.tertiary)];
    const error = ["Error", hexFromArgb(theme.schemes.light.error)];
    const neutral = ["Neutral", hexFromArgb(theme.schemes.light.neutral)];
    const neutralVariant = [
        "Neutral Variant",
        hexFromArgb(theme.schemes.light.neutralVariant),
    ];
    const shadow = ["Shadow", hexFromArgb(theme.schemes.light.shadow)];
    const scrim = ["Scrim", hexFromArgb(theme.schemes.light.scrim)];

    const primaryPalette = colorPalette(primary[1], primary[0]);
    paletteToColorVariables(primaryPalette, "Primary");
    const secondaryPalette = colorPalette(secondary[1], secondary[0]);
    paletteToColorVariables(secondaryPalette, "Secondary");
    const tertiaryPalette = colorPalette(tertiary[1], tertiary[0]);
    paletteToColorVariables(tertiaryPalette, "Tertiary");
    const errorPalette = colorPalette(error[1], error[0]);
    paletteToColorVariables(errorPalette, "Error");
    const neutralPalette = colorPalette(neutral[1], neutral[0]);
    paletteToColorVariables(neutralPalette, "Neutral");
    const neutralVariantPalette = colorPalette(
        neutralVariant[1],
        neutralVariant[0]
    );
    paletteToColorVariables(neutralVariantPalette, "Neutral Variant");
    const shadowPalette = colorPalette(shadow[1], shadow[0]);
    paletteToColorVariables(shadowPalette, "Shadow");
    const scrimPalette = colorPalette(scrim[1], scrim[0]);
    paletteToColorVariables(scrimPalette, "Scrim");
    // #endregion Colors and palettes creation

    // #region Light theme
    const lightTheme_primary = hexFromArgb(theme.schemes.light.primary);
    const lightTheme_onPrimary = hexFromArgb(theme.schemes.light.onPrimary);
    const lightTheme_primaryContainer = hexFromArgb(
        theme.schemes.light.primaryContainer
    );
    const lightTheme_onPrimaryContainer = hexFromArgb(
        theme.schemes.light.onPrimaryContainer
    );
    const lightTheme_secondary = hexFromArgb(theme.schemes.light.secondary);
    const lightTheme_onSecondary = hexFromArgb(theme.schemes.light.onSecondary);
    const lightTheme_secondaryContainer = hexFromArgb(
        theme.schemes.light.secondaryContainer
    );
    const lightTheme_onSecondaryContainer = hexFromArgb(
        theme.schemes.light.onSecondaryContainer
    );
    const lightTheme_tertiary = hexFromArgb(theme.schemes.light.tertiary);
    const lightTheme_onTertiary = hexFromArgb(theme.schemes.light.onTertiary);
    const lightTheme_tertiaryContainer = hexFromArgb(
        theme.schemes.light.tertiaryContainer
    );
    const lightTheme_onTertiaryContainer = hexFromArgb(
        theme.schemes.light.onTertiaryContainer
    );
    const lightTheme_error = hexFromArgb(theme.schemes.light.error);
    const lightTheme_onError = hexFromArgb(theme.schemes.light.onError);
    const lightTheme_errorContainer = hexFromArgb(
        theme.schemes.light.errorContainer
    );
    const lightTheme_onErrorContainer = hexFromArgb(
        theme.schemes.light.onErrorContainer
    );
    const lightTheme_background = hexFromArgb(theme.schemes.light.background);
    const lightTheme_onbackground = hexFromArgb(
        theme.schemes.light.onbackground
    );
    const lightTheme_surface = hexFromArgb(theme.schemes.light.surface);
    const lightTheme_onSurface = hexFromArgb(theme.schemes.light.onSurface);
    const lightTheme_outline = hexFromArgb(theme.schemes.light.onbackground);
    const lightTheme_surfacevariant = hexFromArgb(
        theme.schemes.light.surfaceVariant
    );
    const lightTheme_onSurfaceVariant = hexFromArgb(
        theme.schemes.light.onSurfaceVariant
    );
    const lightTheme_shadow = hexFromArgb(theme.schemes.light.shadow);
    const lightTheme_scrim = hexFromArgb(theme.schemes.light.scrim);
    const lightTheme_inverseSurface = hexFromArgb(
        theme.schemes.light.inverseSurface
    );
    const lightTheme_inverseOnSurface = hexFromArgb(
        theme.schemes.light.inverseOnSurface
    );
    const lightTheme_inversePrimary = hexFromArgb(
        theme.schemes.light.inversePrimary
    );

    const lightTheme = [
        ["Primary", lightTheme_primary, true, false, true, true, false],
        ["onPrimary", lightTheme_onPrimary, true, false, true, true, true],
        [
            "primaryContainer",
            lightTheme_primaryContainer,
            true,
            false,
            true,
            false,
            false,
        ],
        [
            "onPrimaryContainer",
            lightTheme_onPrimaryContainer,
            true,
            false,
            true,
            true,
            false,
        ],
        ["secondary", lightTheme_secondary, true, false, true, true, false],
        ["onSecondary", lightTheme_onSecondary, true, false, true, true, false],
        [
            "secondaryContainer",
            lightTheme_secondaryContainer,
            true,
            false,
            true,
            false,
            false,
        ],
        [
            "onSecondaryContainer",
            lightTheme_onSecondaryContainer,
            true,
            false,
            true,
            true,
            false,
        ],
        ["tertiary", lightTheme_tertiary, true, false, true, true, false],
        ["onTertiary", lightTheme_onTertiary, true, false, true, true, false],
        [
            "tertiaryContainer",
            lightTheme_tertiaryContainer,
            true,
            false,
            true,
            false,
            false,
        ],
        [
            "onTertiaryContainer",
            lightTheme_onTertiaryContainer,
            true,
            false,
            true,
            true,
            false,
        ],
        ["error", lightTheme_error, true, false, true, true, false],
        ["onError", lightTheme_onError, true, false, true, true, true],
        [
            "errorContainer",
            lightTheme_errorContainer,
            true,
            false,
            true,
            false,
            false,
        ],
        [
            "onErrorContainer",
            lightTheme_onErrorContainer,
            true,
            false,
            true,
            true,
            false,
        ],
        ["background", lightTheme_background, true, false, true, false, false],
        [
            "onbackground",
            lightTheme_onbackground,
            true,
            false,
            true,
            true,
            true,
        ],
        ["surface", lightTheme_surface, true, false, true, false, false],
        ["onSurface", lightTheme_onSurface, true, false, true, true, true],
        ["outline", lightTheme_outline, false, true, true, false, false],
        [
            "surfacevariant",
            lightTheme_surfacevariant,
            true,
            false,
            true,
            false,
            false,
        ],
        [
            "onSurfaceVariant",
            lightTheme_onSurfaceVariant,
            true,
            false,
            true,
            true,
            true,
        ],
        ["shadow", lightTheme_shadow, true, false, true, false, false],
        // ["scrim", lightTheme_scrim,false],
        [
            "inverseSurface",
            lightTheme_inverseSurface,
            true,
            false,
            true,
            false,
            false,
        ],
        [
            "inverseOnSurface",
            lightTheme_inverseOnSurface,
            true,
            false,
            true,
            true,
            true,
        ],
        [
            "inversePrimary",
            lightTheme_inversePrimary,
            true,
            false,
            true,
            true,
            false,
        ],
    ];
    // #endregion Light Theme

    // #region Dark theme
    const darkTheme_primary = hexFromArgb(theme.schemes.dark.primary);
    const darkTheme_onPrimary = hexFromArgb(theme.schemes.dark.onPrimary);
    const darkTheme_primaryContainer = hexFromArgb(
        theme.schemes.dark.primaryContainer
    );
    const darkTheme_onPrimaryContainer = hexFromArgb(
        theme.schemes.dark.onPrimaryContainer
    );
    const darkTheme_secondary = hexFromArgb(theme.schemes.dark.secondary);
    const darkTheme_onSecondary = hexFromArgb(theme.schemes.dark.onSecondary);
    const darkTheme_secondaryContainer = hexFromArgb(
        theme.schemes.dark.secondaryContainer
    );
    const darkTheme_onSecondaryContainer = hexFromArgb(
        theme.schemes.dark.onSecondaryContainer
    );
    const darkTheme_tertiary = hexFromArgb(theme.schemes.dark.tertiary);
    const darkTheme_onTertiary = hexFromArgb(theme.schemes.dark.onTertiary);
    const darkTheme_tertiaryContainer = hexFromArgb(
        theme.schemes.dark.tertiaryContainer
    );
    const darkTheme_onTertiaryContainer = hexFromArgb(
        theme.schemes.dark.onTertiaryContainer
    );
    const darkTheme_error = hexFromArgb(theme.schemes.dark.error);
    const darkTheme_onError = hexFromArgb(theme.schemes.dark.onError);
    const darkTheme_errorContainer = hexFromArgb(
        theme.schemes.dark.errorContainer
    );
    const darkTheme_onErrorContainer = hexFromArgb(
        theme.schemes.dark.onErrorContainer
    );
    const darkTheme_background = hexFromArgb(theme.schemes.dark.background);
    const darkTheme_onbackground = hexFromArgb(theme.schemes.dark.onbackground);
    const darkTheme_surface = hexFromArgb(theme.schemes.dark.surface);
    const darkTheme_onSurface = hexFromArgb(theme.schemes.dark.onSurface);
    const darkTheme_outline = hexFromArgb(theme.schemes.dark.onbackground);
    const darkTheme_surfacevariant = hexFromArgb(
        theme.schemes.dark.surfaceVariant
    );
    const darkTheme_onSurfaceVariant = hexFromArgb(
        theme.schemes.dark.onSurfaceVariant
    );
    const darkTheme_shadow = hexFromArgb(theme.schemes.dark.shadow);
    const darkTheme_scrim = hexFromArgb(theme.schemes.dark.scrim);
    const darkTheme_inverseSurface = hexFromArgb(
        theme.schemes.dark.inverseSurface
    );
    const darkTheme_inverseOnSurface = hexFromArgb(
        theme.schemes.dark.inverseOnSurface
    );
    const darkTheme_inversePrimary = hexFromArgb(
        theme.schemes.dark.inversePrimary
    );

    const darkTheme = [
        ["Primary", darkTheme_primary, true, false, true, true, false],
        ["onPrimary", darkTheme_onPrimary, true, false, true, true, true],
        [
            "primaryContainer",
            darkTheme_primaryContainer,
            true,
            false,
            true,
            false,
            false,
        ],
        [
            "onPrimaryContainer",
            darkTheme_onPrimaryContainer,
            true,
            false,
            true,
            true,
            true,
        ],
        ["secondary", darkTheme_secondary, true, false, true, true, false],
        ["onSecondary", darkTheme_onSecondary, true, false, true, true, false],
        [
            "secondaryContainer",
            darkTheme_secondaryContainer,
            true,
            false,
            true,
            false,
            false,
        ],
        [
            "onSecondaryContainer",
            darkTheme_onSecondaryContainer,
            true,
            false,
            true,
            true,
            false,
        ],
        ["tertiary", darkTheme_tertiary, true, false, true, true, false],
        ["onTertiary", darkTheme_onTertiary, true, false, true, true, false],
        [
            "tertiaryContainer",
            darkTheme_tertiaryContainer,
            true,
            false,
            true,
            false,
            false,
        ],
        [
            "onTertiaryContainer",
            darkTheme_onTertiaryContainer,
            true,
            false,
            true,
            true,
            false,
        ],
        ["error", darkTheme_error, true, false, true, true, false],
        ["onError", darkTheme_onError, true, false, true, true, true],
        [
            "errorContainer",
            darkTheme_errorContainer,
            true,
            false,
            true,
            false,
            false,
        ],
        [
            "onErrorContainer",
            darkTheme_onErrorContainer,
            true,
            false,
            true,
            true,
            false,
        ],
        ["background", darkTheme_background, true, false, true, false, false],
        ["onBackground", darkTheme_onbackground, true, false, true, true, true],
        ["surface", darkTheme_surface, true, false, true, false, false],
        ["onSurface", darkTheme_onSurface, true, false, true, true, true],
        ["outline", darkTheme_outline, false, true, true, false, false],
        [
            "surfacevariant",
            darkTheme_surfacevariant,
            true,
            false,
            true,
            false,
            false,
        ],
        [
            "onSurfaceVariant",
            darkTheme_onSurfaceVariant,
            true,
            false,
            true,
            true,
            true,
        ],
        ["shadow", darkTheme_shadow, true, false, true, false, false],
        // ["scrim", darkTheme_scrim,false,false,false],
        [
            "inverseSurface",
            darkTheme_inverseSurface,
            true,
            false,
            true,
            false,
            false,
        ],
        [
            "inverseOnSurface",
            darkTheme_inverseOnSurface,
            true,
            false,
            true,
            true,
            true,
        ],
        [
            "inversePrimary",
            darkTheme_inversePrimary,
            true,
            false,
            true,
            true,
            false,
        ],
    ];
    // #endregion Dark Theme

    // #region Create Styles
    // Light and Dark theme arrays presents:
    // 0 = styleName
    // 1 = color
    // 2 = fill
    // 3 = border
    // 4 = layer style
    // 5 = text style
    // 6 = titles
    lightTheme.forEach((style) => {
        //  If layer style
        if (style[4]) {
            // Fill style
            if (style[2]) {
                createNewLayerStyle(style, "Light Theme/Fills/", false);
            }
            //  Border Style
            if (style[3]) {
                createNewLayerStyle(style, "Light Theme/Borders/", true);
            }
        }
        //  If text style
        if (style[5]) {
            createNewTextStyle(style, "Light Theme/");
        }
    });
    darkTheme.forEach((style) => {
        //  If layer style
        if (style[4]) {
            // Fill style
            if (style[2]) {
                createNewLayerStyle(style, "Dark Theme/Fills/", false);
            }
            //  Border Style
            if (style[3]) {
                createNewLayerStyle(style, "Dark Theme/Borders/", true);
            }
        }
        //  If text style
        if (style[5]) {
            createNewTextStyle(style, "Dark Theme/");
        }
    });
    // #endregion Create Styles

    console.log(JSON.stringify(theme, null, 2));

    function paletteToColorVariables(palette, name) {
        let arrayColorVarNames = document.swatches.map(
            (Swatch) => Swatch["name"]
        );
        palette.forEach((color) => {
            let colorName = name + "/" + color[0];
            let newSwatch = Swatch.from({
                name: colorName,
                color: color[1],
            });

            // Generate the new Color Variable if it doesn't exist
            if (arrayColorVarNames.length > 0) {
                if (arrayColorVarNames.indexOf(colorName) === -1) {
                    document.swatches.push(newSwatch);
                }
            } else {
                document.swatches.push(newSwatch);
            }
        });
    }
}

function colorPalette(color, name = "") {
    let tones = [100, 99, 95, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0];
    // let palette = [[name, color]];
    let palette = [];
    for (let n = 0; n < tones.length; n++) {
        let valueName = name + " " + tones[n].toString();
        palette.push([
            valueName,
            hexFromArgb(
                TonalPalette.fromInt(argbFromHex(color)).tone(tones[n])
            ),
        ]);
    }
    return palette;
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

function createNewLayerStyle(styleDetails = [], folder = "", border = false) {
    try {
        let styleName = folder + styleDetails[0];
        let styleColor = styleDetails[1];
        if (arrayLayerStyleNames.indexOf(styleName) === -1) {
            let borders = [];
            let fills = [];
            if (border) {
                borders = [
                    {
                        color: styleColor,
                        fillType: Style.FillType.Color,
                        position: Style.BorderPosition.Inside,
                    },
                ];
            } else {
                fills = [
                    {
                        color: styleColor,
                        fillType: Style.FillType.Color,
                    },
                ];
            }
            let sharedStyle = layerStyles.push({
                name: styleName,
                style: {
                    fills: fills,
                    borders: borders,
                },
                document: document,
            });
            updateLayerStyles();

            return sharedStyle;
        }
    } catch (createLayerStyleErr) {
        console.log(createLayerStyleErr);
    }
}

function createNewTextStyle(styleDetails = [], folder = "") {
    try {
        let styleName = folder + styleDetails[0];
        let styleColor = styleDetails[1];
        if (arrayTextStyleNames.indexOf(styleName) === -1) {
            let sharedStyle = textStyles.push({
                name: styleName,
                style: {
                    fills: {},
                    borders: {},
                    textColor: styleColor,
                    fontSize: 16,
                    fontFamily: "Roboto",
                    fontWeight: 5,
                },
                document: document,
            });
            updateTextStyles();
        }
        // Titles
        if (styleDetails[6]) {
            styleName = folder + "H1/" + styleDetails[0];
            if (arrayTextStyleNames.indexOf(styleName) === -1) {
                let sharedTitleStyle = textStyles.push({
                    name: styleName,
                    style: {
                        fills: {},
                        borders: {},
                        textColor: styleColor,
                        fontSize: 28,
                        fontFamily: "Roboto",
                        fontWeight: 7,
                    },
                    document: document,
                });
                updateTextStyles();
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
