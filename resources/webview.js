// Disable the context menu (eg. the right click menu) to have a more native feel
document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
});

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

document.getElementById("parametersSubmit").addEventListener("click", () => {
    console.log("Confirm button clicked");
    var parameters = {
        submit: "submit",
    };
    window.postMessage("nativeLog", parameters);
});

document.getElementById("webtool").addEventListener("click", () => {
    console.log("Confirm button clicked");
    var parameters = {
        submit: "webtool",
    };
    window.postMessage("nativeLog", parameters);
});

document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("webtool").blur;
    document.getElementById("webtool").style.cursor = "pointer";
});

window.firstLaunch = function (isFirstLaunch) {
    if (isFirstLaunch === true) {
        document.getElementById("parametersSubmit").innerHTML =
            "Launch webtool and proceed";
    } else {
        document.getElementById("parametersSubmit").innerHTML = "Close";
        document.getElementById("webtool").removeAttribute("hidden");
    }
};
