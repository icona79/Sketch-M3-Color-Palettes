// Disable the context menu (eg. the right click menu) to have a more native feel
// document.addEventListener("contextmenu", (e) => {
//     e.preventDefault();
// });

// Enter Key = Click on Create Button button
document.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        document.getElementById("step_4_div").click();
    }
});

document.getElementById("step_4_div").addEventListener("click", () => {
    console.log("Confirm button clicked");
    var parameters = {
        submit: "submit",
    };
    window.postMessage("nativeLog", parameters);
});

// document.getElementById("step_1_div").addEventListener("click", (event) => {
//     console.log("Load webtool clicked");
//     event.preventDefault();
//     var parameters = {
//         submit: "webtool",
//     };
//     window.postMessage("nativeLog", parameters);
// });

function interceptClickEvent(event) {
    const target = event.target.closest("a");
    if (target && target.getAttribute("target") === "_blank") {
        event.preventDefault();
        window.postMessage("externalLinkClicked", target.href);
    }
    console.log("done");
}

// listen for link click events at the document level
document.addEventListener("click", interceptClickEvent);

var step_1 = document.getElementById("step_1");
var step_1_hover = document.getElementById("step_1_hover");

var step_4 = document.getElementById("step_4");
var step_4_hover = document.getElementById("step_4_hover");

step_1.addEventListener("mouseover", () => {
    hoverImg(step_1, step_1_hover);
});
step_1_hover.addEventListener("mouseout", () => {
    hoverImg(step_1_hover, step_1);
});

step_4.addEventListener("mouseover", () => {
    hoverImg(step_4, step_4_hover);
});
step_4_hover.addEventListener("mouseout", () => {
    hoverImg(step_4_hover, step_4);
});

function hoverImg(currentItem, hoverItem) {
    currentItem.setAttribute("hidden", "");
    hoverItem.removeAttribute("hidden");
}
