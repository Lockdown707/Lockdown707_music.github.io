/*
    Student Name: Colard J Meuter
    File Name: Script.js
    Date: 04/27/2024
*/

//Hamburger menu function
function hamburger() {
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}