"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let statueArray = [];
function Art() {
    let title = document.getElementById("szobor").value;
    let year = document.getElementById('ev').value;
    let price = document.getElementById('ar').value;
    let height = document.getElementById('magassag').value;
    console.log(/[\S\s]/gm.test(title));
    let st_price = "" + price;
    console.log(/^[1-9]/gm.test(st_price));
}
function Validate(title, year, price, height) {
    let st_price = "" + price;
    if (/[\S\s]/gm.test(title) == false) {
    }
    else {
    }
    if (/^[1-9]/gm.test(st_price) == false) {
    }
}
function init() {
    document.getElementById('btnFelvesz').addEventListener('click', Art);
}
document.addEventListener('DOMContentLoaded', init);
