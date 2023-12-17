let button = document.getElementById("opendialog");
let menu = document.getElementById("floater");

function floater() {
    menu.style.display = "block";
    button.style.display = "none";
}

function closeFloater() {
    menu.style.display = "none";
    button.style.display = "block";
}