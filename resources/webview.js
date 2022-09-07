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

document.getElementById("picField").addEventListener("click", (evt) => {
    console.log("Select picture button clicked");
    let imagePath = openFinder();
    if (imagePath !== undefined && imagePath !== "") {
        document.getElementById("img").src = imagePath;
        imageSelected = true;
    }
    // var tgt = evt.target || window.event.srcElement,
    //     files = tgt.files;
    // if (FileReader && files && files.length) {
    //     var fr = new FileReader();
    //     fr.onload = function () {
    //         document.getElementById("img").src = fr.result;
    //     };
    //     fr.readAsDataURL(files[0]);
    // }
    // // Not supported
    // else {
    //     console.log("Not available");
    //     // fallback -- perhaps submit the input to an iframe and temporarily store
    //     // them on the server until the user's session ends.
    // }
});

document.getElementById("parametersSubmit").addEventListener("click", () => {
    console.log("Confirm button clicked");
    // const img = document.querySelector("img");
    // let color = "";
    // let palette = [];
    // if (imageSelected) {
    //     if (img.complete) {
    //         color = getColor(img);
    //         palette = getPalette(img, 4);
    //     } else {
    //         image.addEventListener("load", function () {
    //             getColor(img);
    //         });
    //     }

    //     var parameters = {
    //         mainColor: color,
    //         palette: palette,
    //     };
    //     window.postMessage("nativeLog", parameters);
    // } else {
    window.postMessage("nativeLog", "ciao");
    // }
});

// function getPath(initialPath = "~/Documents") {
//     console.log("inside");
//     const panel = NSOpenPanel.openPanel();
//     panel.setCanChooseFiles(true);
//     panel.setCanChooseDirectories(true);
//     panel.setCanCreateDirectories(true);
//     panel.setAllowsMultipleSelection(false);
//     panel.setTitle("Select a file or folder");
//     panel.setPrompt("Select");
//     panel.setDirectoryURL(NSURL.fileURLWithPath(initialPath));
//     const result = panel.runModal();
//     if (result === NSFileHandlingPanelOKButton) {
//         return panel.URL().path();
//     } else {
//         return null;
//     }
// }

// document.getElementById("my-element").remove()
// document.getElementById("tag-id").innerHTML = "<ol><li>html data</li></ol>";

// Function Dialog
function openFinder() {
    let filepath = "";
    dialog
        .showOpenDialog({
            filters: [
                {
                    name: "Images",
                    extensions: ["png", "jpg", "jpeg", "gif", "svg", "webp"],
                },
            ],
            properties: ["openFile"],
        })
        .then((result) => {
            filepath = result.filePaths[0];
            let rawdata = readFileSync(filepath);
            if (!rawdata) {
                UI.message("⚠️ File could not be read");
            }
        });
    return filepath;
}
