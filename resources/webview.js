import ColorThief from "color-extr-thief";

// disable the context menu (eg. the right click menu) to have a more native feel
document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
});

// call the plugin from the webview
// document.getElementById('button').addEventListener('click', () => {
//     window.postMessage('nativeLog', 'Called from the webview')
// })

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

const colorThief = new ColorThief();
var imageID = document.getElementById("picField");

imageID.onchange = function (evt) {
    var tgt = evt.target || window.event.target,
        files = tgt.files;

    // FileReader support
    if (FileReader && files && files.length) {
        var fr = new FileReader();
        fr.onload = function () {
            document.getElementById("img").src = fr.result;
        };
        fr.readAsDataURL(files[0]);
    }

    // Not supported
    else {
        // fallback -- perhaps submit the input to an iframe and temporarily store
        // them on the server until the user's session ends.
    }
};

document.getElementById("parametersSubmit").addEventListener("click", () => {
    const img = document.querySelector("img");
    let color = "";
    let palette = [];
    if (img.complete) {
        color = colorThief.getColor(img);
        palette = colorThief.getPalette(img, 4);
    } else {
        image.addEventListener("load", function () {
            colorThief.getColor(img);
        });
    }

    var parameters = {
        mainColor: color,
        palette: palette,
    };

    window.postMessage("nativeLog", parameters);
});

// document.getElementById("my-element").remove()
// document.getElementById("tag-id").innerHTML = "<ol><li>html data</li></ol>";
