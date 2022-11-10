"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let statueArray = [];
function Art() {
    let title = document.getElementById("szobor").value;
    let year = document.getElementById('ev').value;
    let price = document.getElementById('ar').value;
    let height = document.getElementById('magassag').value;
    console.log(/[a-zA-Z-]/gm.test(title));
    // let st_price=""+price;
    // console.log(/^[1-9]/gm.test(st_price))
}
function Validate(title, year, price, height) {
    let errors = document.getElementById('errors');
    // let st_price=""+price;
    // let st_year=""+year;
    let title_g = true;
    let title_p = true;
    let title_y = true;
    let title_h = true;
    if (/[\S\s]/gm.test(title) == false) {
        title_g = false;
    }
    if (price > 0) {
        title_p = false;
    }
    if (year > 2022) {
        title_y = false;
    }
    if (height < 20) {
        title_h = false;
    }
}
function init() {
    document.getElementById('btnFelvesz').addEventListener('click', Art);
}
document.addEventListener('DOMContentLoaded', init);
