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

// Document variables
var doc = context.document;
var document = sketch.getSelectedDocument();
var firstSelectedLayer = document.selectedLayers.layers[0];
var artboard = sketch.Artboard;
var data = document.sketchObject.documentData();
var image = sketch.Image;
// #endregion

export default function () {
    const defaultColor = "#f82506";
    const theme = themeFromSourceColor(argbFromHex(defaultColor), [
        {
            name: "custom-1",
            value: argbFromHex("#ff0000"),
            blend: true,
        },
    ]);

    const primary = ["Primary", defaultColor];
    const secondary = ["Secondary", hexFromArgb(theme.schemes.light.secondary)];
    console.log(secondary);

    const primaryPalette = colorPalette(primary[1], primary[0]);
    paletteToColorVariables(primaryPalette, "Primary");
    const secondaryPalette = colorPalette(secondary[1], secondary[0]);
    paletteToColorVariables(secondaryPalette, "Secondary");

    // Light theme
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
        lightTheme_primary,
        lightTheme_onPrimary,
        lightTheme_primaryContainer,
        lightTheme_onPrimaryContainer,
        lightTheme_secondary,
        lightTheme_onSecondary,
        lightTheme_secondaryContainer,
        lightTheme_onSecondaryContainer,
        lightTheme_tertiary,
        lightTheme_onTertiary,
        lightTheme_tertiaryContainer,
        lightTheme_onTertiaryContainer,
        lightTheme_error,
        lightTheme_onError,
        lightTheme_onErrorContainer,
        lightTheme_background,
        lightTheme_onbackground,
        lightTheme_surface,
        lightTheme_onSurface,
        lightTheme_outline,
        lightTheme_surfacevariant,
        lightTheme_onSurfaceVariant,
        lightTheme_shadow,
        lightTheme_scrim,
        lightTheme_inverseSurface,
        lightTheme_inverseOnSurface,
        lightTheme_inversePrimary,
    ];

    console.log(lightTheme);

    // console.log(JSON.stringify(theme, null, 2));

    // const primary = hexFromArgb(theme.schemes.light.primary);
    // console.log(primary);

    // const primary98 = TonalPalette.fromInt(primary).tone(98);
    // console.log(primary98);

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
    let palette = [[name, color]];
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
