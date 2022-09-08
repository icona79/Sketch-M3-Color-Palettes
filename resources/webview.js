// Import the color from image management script
import { getColor, getPalette } from "color-extr-thief";
import dialog from "@skpm/dialog";
import { readFileSync } from "@skpm/fs";

// Disable the context menu (eg. the right click menu) to have a more native feel
// document.addEventListener("contextmenu", (e) => {
//     e.preventDefault();
// });

// Enter Key = Click on Create Button button
document.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        document.getElementById("parametersSubmit").click();
    }
});

// ************************************************** //
// Validate the input fields                          //
// ************************************************** //
const numbersOnly = "/^d+$/";
const decimalOnly = "/^s*-?[1-9]d*(.d{1,2})?s*$/";
const uppercaseOnly = "/^[A-Z]+$/";
const lowercaseOnly = "/^[a-z]+$/";
const stringOnly = "/^[A-Za-z0-9]+$/";

var imageSelected = false;
window.imagePath = function (sourceImagePath) {
    if (sourceImagePath !== empty) {
        console.log("here");
        // document.getElementById("img").src = sourceImagePath;
        imageSelected = true;
    }
};

document.getElementById("parametersSubmit").addEventListener("click", () => {
    console.log("Confirm button clicked");
    const img = document.querySelector("img");
    let color = "";
    let palette = [];
    if (imageSelected) {
        if (img.complete) {
            color = getColor(img);
            palette = getPalette(img, 4);
        } else {
            image.addEventListener("load", function () {
                getColor(img);
            });
        }

        var parameters = {
            mainColor: color,
            palette: palette,
        };
        window.postMessage("nativeLog", parameters);
    } else {
        console.log("Image Error");
    }
});

// document.getElementById("my-element").remove()
// document.getElementById("tag-id").innerHTML = "<ol><li>html data</li></ol>";
