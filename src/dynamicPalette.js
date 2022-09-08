Mocha.sharedRuntime().loadFrameworkWithName("CoreFoundation");

import BrowserWindow from "sketch-module-web-view";
import { getWebview } from "sketch-module-web-view/remote";

const webviewIdentifier = "dynamicPalette.webview";

// #region Node modules
import {
    argbFromHex,
    hexFromArgb,
    themeFromSourceColor,
    applyTheme,
    TonalPalette,
    HCT,
    themeFromImage,
} from "@material/material-color-utilities";
import hexRgb from "hex-rgb";
var cd = require("color-difference");
import colorcolor from "colorcolor";
import isHexcolor from "is-hexcolor";

import { resolve } from "path";
import rgbHex from "rgb-hex";
const fs = require("@skpm/fs");
const os = require("os");
const path = require("path");
const desktopDir = path.join(os.homedir(), "Desktop");
// #endregion Node modules

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
var insertedLayerStyles = [];

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
// #endregion

export default function () {
    // Select your picture
    function getPath(initialPath = "~/Documents") {
        const panel = NSOpenPanel.openPanel();
        panel.setCanChooseFiles(true);
        panel.setCanChooseDirectories(true);
        panel.setCanCreateDirectories(true);
        panel.setAllowsMultipleSelection(false);
        panel.setTitle("Select a file or folder");
        panel.setPrompt("Select");
        panel.setDirectoryURL(NSURL.fileURLWithPath(initialPath));
        const result = panel.runModal();
        if (result === NSFileHandlingPanelOKButton) {
            return panel.URL().path();
        } else {
            return null;
        }
    }

    let sourceImagePath = getPath();
    let fileExtension = sourceImagePath.split(".").pop();
    let availableExtensions = ["png", "jpg", "jpeg", "svg", "webp", "gif"];
    // close the
    if (availableExtensions.indexOf(fileExtension) === -1) {
        sketch.UI.alert(
            "File Extension not supported",
            "Please, select an image file"
        );
        return;
    }
    sourceImagePath = sourceImagePath.toString();
    console.log(sourceImagePath);

    /* Create the webview with the sizes */
    const options = {
        identifier: webviewIdentifier,
        width: 421,
        height: 570,
        show: false,
    };

    const browserWindow = new BrowserWindow(options);
    // only show the window when the page has loaded to avoid a white flash
    browserWindow.once("ready-to-show", () => {
        // Send the image path to the Webview
        try {
            // browserWindow.webContents
            //     .executeJavaScript(`imagePath(${sourceImagePath})`)
            //     .then(() => {
            //         // Once we're processing the styles on the webview, we can show it
            //         browserWindow.show();
            //     });
            browserWindow.show();
            // browserWindow.loadURL(require("./resources/webview.html"));
        } catch (createWebViewErr) {
            console.log(createWebViewErr);
        }
    });

    const webContents = browserWindow.webContents;

    // add a handler for a call from web content's javascript
    webContents.on("nativeLog", (parameters) => {
        try {
            // #region Theme
            var theme;
            let value = rgbHex(parameters.mainColor);

            // #region Theme
            theme = themeFromSourceColor(argbFromHex(value), [
                // {
                //     name: "custom-1",
                //     value: argbFromHex("#ff0000"),
                //     blend: true,
                // },
                {},
            ]);
            // #endregion Theme

            // #region Colors and palettes creation
            const primary = [
                "Primary",
                hexFromArgb(theme.schemes.light.primary),
            ];
            const secondary = [
                "Secondary",
                hexFromArgb(theme.schemes.light.secondary),
            ];
            const tertiary = [
                "Tertiary",
                hexFromArgb(theme.schemes.light.tertiary),
            ];
            const error = ["Error", hexFromArgb(theme.schemes.light.error)];
            const neutral = [
                "Neutral",
                hexFromArgb(theme.schemes.light.neutral),
            ];
            const neutralVariant = [
                "Neutral Variant",
                hexFromArgb(theme.schemes.light.neutralVariant),
            ];
            const shadow = ["Shadow", hexFromArgb(theme.schemes.light.shadow)];
            const scrim = ["Scrim", hexFromArgb(theme.schemes.light.scrim)];
            const surface = [
                "Surface",
                hexFromArgb(theme.schemes.light.surface),
            ];

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
            const surfacePalette = colorPalette(surface[1], surface[0]);
            paletteToColorVariables(surfacePalette, "Surface");
            // #endregion Colors and palettes creation

            // #region Light theme
            const lightTheme_primary = hexFromArgb(theme.schemes.light.primary);
            const lightTheme_onPrimary = hexFromArgb(
                theme.schemes.light.onPrimary
            );
            const lightTheme_primaryContainer = hexFromArgb(
                theme.schemes.light.primaryContainer
            );
            const lightTheme_onPrimaryContainer = hexFromArgb(
                theme.schemes.light.onPrimaryContainer
            );
            const lightTheme_secondary = hexFromArgb(
                theme.schemes.light.secondary
            );
            const lightTheme_onSecondary = hexFromArgb(
                theme.schemes.light.onSecondary
            );
            const lightTheme_secondaryContainer = hexFromArgb(
                theme.schemes.light.secondaryContainer
            );
            const lightTheme_onSecondaryContainer = hexFromArgb(
                theme.schemes.light.onSecondaryContainer
            );
            const lightTheme_tertiary = hexFromArgb(
                theme.schemes.light.tertiary
            );
            const lightTheme_onTertiary = hexFromArgb(
                theme.schemes.light.onTertiary
            );
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
            const lightTheme_background = hexFromArgb(
                theme.schemes.light.background
            );
            const lightTheme_onbackground = hexFromArgb(
                theme.schemes.light.onbackground
            );
            const lightTheme_surface = hexFromArgb(theme.schemes.light.surface);
            const lightTheme_onSurface = hexFromArgb(
                theme.schemes.light.onSurface
            );
            const lightTheme_outline = hexFromArgb(
                theme.schemes.light.onbackground
            );
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
                [
                    "Primary",
                    lightTheme_primary,
                    true,
                    false,
                    true,
                    true,
                    false,
                    "Primary",
                ],
                [
                    "onPrimary",
                    lightTheme_onPrimary,
                    true,
                    false,
                    true,
                    true,
                    true,
                    "Neutral",
                ],
                [
                    "primaryContainer",
                    lightTheme_primaryContainer,
                    true,
                    false,
                    true,
                    false,
                    false,
                    "Primary",
                ],
                [
                    "onPrimaryContainer",
                    lightTheme_onPrimaryContainer,
                    true,
                    false,
                    true,
                    true,
                    false,
                    "Neutral",
                ],
                [
                    "secondary",
                    lightTheme_secondary,
                    true,
                    false,
                    true,
                    true,
                    false,
                    "Secondary",
                ],
                [
                    "onSecondary",
                    lightTheme_onSecondary,
                    true,
                    false,
                    true,
                    true,
                    false,
                    "Neutral",
                ],
                [
                    "secondaryContainer",
                    lightTheme_secondaryContainer,
                    true,
                    false,
                    true,
                    false,
                    false,
                    "Secondary",
                ],
                [
                    "onSecondaryContainer",
                    lightTheme_onSecondaryContainer,
                    true,
                    false,
                    true,
                    true,
                    false,
                    "Neutral",
                ],
                [
                    "tertiary",
                    lightTheme_tertiary,
                    true,
                    false,
                    true,
                    true,
                    false,
                    "Tertiary",
                ],
                [
                    "onTertiary",
                    lightTheme_onTertiary,
                    true,
                    false,
                    true,
                    true,
                    false,
                    "Neutral",
                ],
                [
                    "tertiaryContainer",
                    lightTheme_tertiaryContainer,
                    true,
                    false,
                    true,
                    false,
                    false,
                    "Tertiary",
                ],
                [
                    "onTertiaryContainer",
                    lightTheme_onTertiaryContainer,
                    true,
                    false,
                    true,
                    true,
                    false,
                    "Neutral",
                ],
                [
                    "error",
                    lightTheme_error,
                    true,
                    false,
                    true,
                    true,
                    false,
                    "Error",
                ],
                [
                    "onError",
                    lightTheme_onError,
                    true,
                    false,
                    true,
                    true,
                    true,
                    "Neutral",
                ],
                [
                    "errorContainer",
                    lightTheme_errorContainer,
                    true,
                    false,
                    true,
                    false,
                    false,
                    "Error",
                ],
                [
                    "onErrorContainer",
                    lightTheme_onErrorContainer,
                    true,
                    false,
                    true,
                    true,
                    false,
                    "Neutral",
                ],
                [
                    "background",
                    lightTheme_background,
                    true,
                    false,
                    true,
                    false,
                    false,
                    "Neutral",
                ],
                [
                    "onbackground",
                    lightTheme_onbackground,
                    true,
                    false,
                    true,
                    true,
                    true,
                    "Neutral",
                ],
                [
                    "surface",
                    lightTheme_surface,
                    true,
                    false,
                    true,
                    false,
                    false,
                    "Surface",
                ],
                [
                    "onSurface",
                    lightTheme_onSurface,
                    true,
                    false,
                    true,
                    true,
                    true,
                    "Surface",
                ],
                [
                    "outline",
                    lightTheme_outline,
                    false,
                    true,
                    true,
                    false,
                    false,
                    "Neutral",
                ],
                [
                    "surfacevariant",
                    lightTheme_surfacevariant,
                    true,
                    false,
                    true,
                    false,
                    false,
                    "Surface",
                ],
                [
                    "onSurfaceVariant",
                    lightTheme_onSurfaceVariant,
                    true,
                    false,
                    true,
                    true,
                    true,
                    "Surface",
                ],
                [
                    "shadow",
                    lightTheme_shadow,
                    true,
                    false,
                    true,
                    false,
                    false,
                    "Shadow",
                ],
                // ["scrim", lightTheme_scrim,false],
                [
                    "inverseSurface",
                    lightTheme_inverseSurface,
                    true,
                    false,
                    true,
                    false,
                    false,
                    "Surface",
                ],
                [
                    "inverseOnSurface",
                    lightTheme_inverseOnSurface,
                    true,
                    false,
                    true,
                    true,
                    true,
                    "Surface",
                ],
                [
                    "inversePrimary",
                    lightTheme_inversePrimary,
                    true,
                    false,
                    true,
                    true,
                    false,
                    "Primary",
                ],
            ];
            // #endregion Light Theme

            // #region Dark theme
            const darkTheme_primary = hexFromArgb(theme.schemes.dark.primary);
            const darkTheme_onPrimary = hexFromArgb(
                theme.schemes.dark.onPrimary
            );
            const darkTheme_primaryContainer = hexFromArgb(
                theme.schemes.dark.primaryContainer
            );
            const darkTheme_onPrimaryContainer = hexFromArgb(
                theme.schemes.dark.onPrimaryContainer
            );
            const darkTheme_secondary = hexFromArgb(
                theme.schemes.dark.secondary
            );
            const darkTheme_onSecondary = hexFromArgb(
                theme.schemes.dark.onSecondary
            );
            const darkTheme_secondaryContainer = hexFromArgb(
                theme.schemes.dark.secondaryContainer
            );
            const darkTheme_onSecondaryContainer = hexFromArgb(
                theme.schemes.dark.onSecondaryContainer
            );
            const darkTheme_tertiary = hexFromArgb(theme.schemes.dark.tertiary);
            const darkTheme_onTertiary = hexFromArgb(
                theme.schemes.dark.onTertiary
            );
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
            const darkTheme_background = hexFromArgb(
                theme.schemes.dark.background
            );
            const darkTheme_onbackground = hexFromArgb(
                theme.schemes.dark.onbackground
            );
            const darkTheme_surface = hexFromArgb(theme.schemes.dark.surface);
            const darkTheme_onSurface = hexFromArgb(
                theme.schemes.dark.onSurface
            );
            const darkTheme_outline = hexFromArgb(
                theme.schemes.dark.onbackground
            );
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
                [
                    "Primary",
                    darkTheme_primary,
                    true,
                    false,
                    true,
                    true,
                    false,
                    "Primary",
                ],
                [
                    "onPrimary",
                    darkTheme_onPrimary,
                    true,
                    false,
                    true,
                    true,
                    true,
                    "Neutral",
                ],
                [
                    "primaryContainer",
                    darkTheme_primaryContainer,
                    true,
                    false,
                    true,
                    false,
                    false,
                    "Primary",
                ],
                [
                    "onPrimaryContainer",
                    darkTheme_onPrimaryContainer,
                    true,
                    false,
                    true,
                    true,
                    false,
                    "Neutral",
                ],
                [
                    "secondary",
                    darkTheme_secondary,
                    true,
                    false,
                    true,
                    true,
                    false,
                    "Secondary",
                ],
                [
                    "onSecondary",
                    darkTheme_onSecondary,
                    true,
                    false,
                    true,
                    true,
                    false,
                    "Neutral",
                ],
                [
                    "secondaryContainer",
                    darkTheme_secondaryContainer,
                    true,
                    false,
                    true,
                    false,
                    false,
                    "Secondary",
                ],
                [
                    "onSecondaryContainer",
                    darkTheme_onSecondaryContainer,
                    true,
                    false,
                    true,
                    true,
                    false,
                    "Neutral",
                ],
                [
                    "tertiary",
                    darkTheme_tertiary,
                    true,
                    false,
                    true,
                    true,
                    false,
                    "Tertiary",
                ],
                [
                    "onTertiary",
                    darkTheme_onTertiary,
                    true,
                    false,
                    true,
                    true,
                    false,
                    "Neutral",
                ],
                [
                    "tertiaryContainer",
                    darkTheme_tertiaryContainer,
                    true,
                    false,
                    true,
                    false,
                    false,
                    "Tertiary",
                ],
                [
                    "onTertiaryContainer",
                    darkTheme_onTertiaryContainer,
                    true,
                    false,
                    true,
                    true,
                    false,
                    "Neutral",
                ],
                [
                    "error",
                    darkTheme_error,
                    true,
                    false,
                    true,
                    true,
                    false,
                    "Error",
                ],
                [
                    "onError",
                    darkTheme_onError,
                    true,
                    false,
                    true,
                    true,
                    true,
                    "Neutral",
                ],
                [
                    "errorContainer",
                    darkTheme_errorContainer,
                    true,
                    false,
                    true,
                    false,
                    false,
                    "Error",
                ],
                [
                    "onErrorContainer",
                    darkTheme_onErrorContainer,
                    true,
                    false,
                    true,
                    true,
                    false,
                    "Neutral",
                ],
                [
                    "background",
                    darkTheme_background,
                    true,
                    false,
                    true,
                    false,
                    false,
                    "Neutral",
                ],
                [
                    "onbackground",
                    darkTheme_onbackground,
                    true,
                    false,
                    true,
                    true,
                    true,
                    "Neutral",
                ],
                [
                    "surface",
                    darkTheme_surface,
                    true,
                    false,
                    true,
                    false,
                    false,
                    "Surface",
                ],
                [
                    "onSurface",
                    darkTheme_onSurface,
                    true,
                    false,
                    true,
                    true,
                    true,
                    "Surface",
                ],
                [
                    "outline",
                    darkTheme_outline,
                    false,
                    true,
                    true,
                    false,
                    false,
                    "Neutral",
                ],
                [
                    "surfacevariant",
                    darkTheme_surfacevariant,
                    true,
                    false,
                    true,
                    false,
                    false,
                    "Surface",
                ],
                [
                    "onSurfaceVariant",
                    darkTheme_onSurfaceVariant,
                    true,
                    false,
                    true,
                    true,
                    true,
                    "Surface",
                ],
                [
                    "shadow",
                    darkTheme_shadow,
                    true,
                    false,
                    true,
                    false,
                    false,
                    "Shadow",
                ],
                // ["scrim", darkTheme_scrim,false],
                [
                    "inverseSurface",
                    darkTheme_inverseSurface,
                    true,
                    false,
                    true,
                    false,
                    false,
                    "Surface",
                ],
                [
                    "inverseOnSurface",
                    darkTheme_inverseOnSurface,
                    true,
                    false,
                    true,
                    true,
                    true,
                    "Surface",
                ],
                [
                    "inversePrimary",
                    darkTheme_inversePrimary,
                    true,
                    false,
                    true,
                    true,
                    false,
                    "Primary",
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
            // 7 = palette of reference
            lightTheme.forEach((style) => {
                //  If layer style
                if (style[4]) {
                    // Fill style
                    if (style[2]) {
                        createNewLayerStyle(
                            style,
                            "Light Theme/Fills/",
                            false,
                            style[7]
                        );
                    }
                    //  Border Style
                    if (style[3]) {
                        createNewLayerStyle(
                            style,
                            "Light Theme/Borders/",
                            true,
                            style[7]
                        );
                    }
                }
                //  If text style
                if (style[5]) {
                    createNewTextStyle(style, "Light Theme/", style[7]);
                }
            });

            darkTheme.forEach((style) => {
                //  If layer style
                if (style[4]) {
                    // Fill style
                    if (style[2]) {
                        createNewLayerStyle(
                            style,
                            "Dark Theme/Fills/",
                            false,
                            style[7]
                        );
                    }
                    //  Border Style
                    if (style[3]) {
                        createNewLayerStyle(
                            style,
                            "Dark Theme/Borders/",
                            true,
                            style[7]
                        );
                    }
                }
                //  If text style
                if (style[5]) {
                    createNewTextStyle(style, "Dark Theme/", style[7]);
                }
            });
            // #endregion Create Styles

            // #region Connect Color Variables
            layerStyles.forEach((layerStyle) => {
                let styleName = layerStyle.name;
                let stylePalette = "";
                for (let n = 0; n < insertedLayerStyles.length; n++) {
                    if (insertedLayerStyles[n][0] === styleName) {
                        stylePalette = insertedLayerStyles[n][1];
                        return;
                    }
                }

                let styleFillColor = "";
                if (
                    layerStyle.style.fills[0] !== "" &&
                    layerStyle.style.fills[0] !== undefined
                ) {
                    styleFillColor = layerStyle.style.fills[0].color;
                }

                let styleBorderColor = "";
                if (
                    layerStyle.style.borders[0] !== "" &&
                    layerStyle.style.borders[0] !== undefined
                ) {
                    styleBorderColor = layerStyle.style.borders[0].color;
                }

                let message = "Style Name: " + styleName;
                message = message + " - Fill Color: " + styleFillColor;
                message = message + " - Border Color: " + styleBorderColor;
                // console.log(message);

                if (styleFillColor !== undefined && styleFillColor !== "") {
                    let colorVariable = matchColorVariables(
                        styleFillColor,
                        stylePalette
                    );
                    if (colorVariable !== undefined) {
                        layerStyle.style.fills[0].color =
                            colorVariable.referencingColor;
                    }
                    // console.log(colorVariable);
                }
                if (styleBorderColor !== undefined && styleBorderColor !== "") {
                    let colorVariable = matchColorVariables(
                        styleBorderColor,
                        styleName
                    );
                    if (colorVariable !== undefined) {
                        layerStyle.style.borders[0].color =
                            colorVariable.referencingColor;
                    }
                    // console.log(colorVariable);
                    updateLayerStyles();
                }
            });

            textStyles.forEach((textStyle) => {
                let styleName = textStyle.name;
                let stylePalette = "";
                for (let n = 0; n < insertedTextStyles.length; n++) {
                    if (insertedTextStyles[n][0] === styleName) {
                        stylePalette = insertedTextStyles[n][1];
                        return;
                    }
                }

                let styleTextColor = textStyle.style.textColor;

                let colorVariable = matchColorVariables(
                    styleTextColor,
                    stylePalette
                );
                if (colorVariable !== undefined) {
                    textStyle.style.textColor = colorVariable.referencingColor;
                }
                updateTextStyles();
            });

            // #endregion Connect Color Variables

            browserWindow.close();
        } catch (pluginErr) {
            console.log(pluginErr);
        }
    });

    // console.log(JSON.stringify(theme, null, 2));

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

    browserWindow.loadURL(require("../resources/webview.html"));
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

function matchColorVariables(color, name) {
    let newColorVariable;
    name = name.toUpperCase();

    let colorVariables = document.swatches;
    let colorVariablesNames = [];
    colorVariables.forEach((variable) => {
        let variableName = variable.name.toString().toUpperCase();
        colorVariablesNames.push(variableName);
    });
    // console.log(colorVariablesNames);
    colorVariables.forEach((variable) => {
        let variableName = variable.name.toString().toUpperCase();
        let variableColor = variable.color.toString().toUpperCase();
        color = color.toString().toUpperCase();
        let variableColorHEX = colorcolor(variableColor, "hex");
        let colorHEX = colorcolor(color, "hex");

        let colorMatch = false;
        if (cd.compare(variableColorHEX, colorHEX) < 3) {
            colorMatch = true;
        }

        if (variableName.includes(name) && colorMatch) {
            newColorVariable = variable;
        }
    });
    return newColorVariable;
}

function checkSubString(str1, str2) {
    return str1.indexOf(str2);
}

function createNewLayerStyle(
    styleDetails = [],
    folder = "",
    border = false,
    palette = ""
) {
    try {
        let styleName = folder + styleDetails[0];
        let styleColor = styleDetails[1];
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

        if (arrayLayerStyleNames.indexOf(styleName) === -1) {
            // 1. If the style is new
            let sharedStyle = layerStyles.push({
                name: styleName,
                style: {
                    fills: fills,
                    borders: borders,
                },
                document: document,
            });
            insertedLayerStyles.push([sharedStyle.name, palette]);
            updateLayerStyles();

            return sharedStyle;
        } else {
            let existingStyleID = getLayerStyleIDFromName(styleName);
            if (existingStyleID !== "") {
                let localIndex = arrayLayerStyleIDs.indexOf(existingStyleID);
                let existingStyle = layerStyles[localIndex];

                if (fills.length > 0) {
                    existingStyle.style.fills[0].color = fills[0].color;
                }
                if (borders.lengh > 0) {
                    existingStyle.style.borders[0].color = borders[0].color;
                }
                insertedLayerStyles.push([existingStyle.name, palette]);
                updateLayerStyles();
            }
        }
    } catch (createLayerStyleErr) {
        console.log(createLayerStyleErr);
    }
}

function createNewTextStyle(styleDetails = [], folder = "", palette = "") {
    try {
        let styleName = folder + styleDetails[0];
        let styleColor = styleDetails[1];
        if (arrayTextStyleNames.indexOf(styleName) === -1) {
            let sharedStyle = textStyles.push({
                name: styleName,
                style: {
                    textColor: styleColor,
                    fontSize: 16,
                    fontFamily: "Roboto",
                },
                document: document,
            });
            insertedTextStyles.push([sharedStyle.name, palette]);
            updateTextStyles();
            // Titles
            if (styleDetails[6] === true) {
                console.log("Titles");
                styleName = folder + "H1/" + styleDetails[0];
                if (arrayTextStyleNames.indexOf(styleName) === -1) {
                    let sharedTitleStyle = textStyles.push({
                        name: styleName,
                        style: {
                            textColor: styleColor,
                            fontSize: 28,
                            fontFamily: "Roboto",
                        },
                        document: document,
                    });
                    insertedTextStyles.push([sharedTitleStyle.name, palette]);
                    updateTextStyles();
                }
            }
            return sharedStyle;
        } else {
            // Update styles
            let existingStyleID = getTextStyleIDFromName(styleName);
            if (existingStyleID !== "") {
                let localIndex = arrayTextStyleIDs.indexOf(existingStyleID);
                let existingStyle = textStyles[localIndex];

                existingStyle.style.textColor = styleColor;

                insertedLayerStyles.push([existingStyle.name, palette]);
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

                insertedLayerStyles.push([existingStyle.name, palette]);
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

function getPath(initialPath = "~/Documents") {
    const panel = NSOpenPanel.openPanel();
    panel.setCanChooseFiles(true);
    panel.setCanChooseDirectories(true);
    panel.setCanCreateDirectories(true);
    panel.setAllowsMultipleSelection(false);
    panel.setTitle("Select a file or folder");
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
// When the plugin is shutdown by Sketch (for example when the user    //
// disable the plugin) we need to close the webview if it's open       //
// ******************************************************************* //
export function onShutdown() {
    const existingWebview = getWebview(webviewIdentifier);
    if (existingWebview) {
        existingWebview.close();
    }
}
