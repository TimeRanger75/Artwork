"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Statue_1 = require("./Statue");
let statueArray = [];
let errors = document.getElementById('errors');
function Art() {
    errors.textContent = "";
    let title = document.getElementById("szobor").value;
    let year = parseInt(document.getElementById('ev').value);
    let price = parseInt(document.getElementById('ar').value);
    let height = parseInt(document.getElementById('magassag').value);
    //console.log(/[a-zA-Z-]/gm.test(title));
    // let st_price=""+price;
    // console.log(/^[1-9]/gm.test(st_price))
    if (Validate(title, year, price, height) == true) {
        let statue = new Statue_1.Statue(title, price, year, height);
        statueArray.push(statue);
        document.getElementById("szobor").value = "";
        document.getElementById('magassag').value = "";
        document.getElementById('ev').value = "";
        document.getElementById('ar').value = "";
        document.getElementById('count').textContent = statueArray.length + " db";
        let price_sum = 0;
        for (let i = 0; i < statueArray.length; i++) {
            price_sum += statueArray[i].getPrice();
        }
        document.getElementById('price_sum').textContent = price_sum + " Ft";
    }
}
function Validate(title, year, price, height) {
    // let st_price=""+price;
    // let st_year=""+year;
    let st_t = true;
    let st_p = true;
    let st_y = true;
    let st_h = true;
    if (/[\S\s]/gm.test(title) == false) {
        st_h = false;
        let li = document.createElement('li');
        li.textContent = "Hibás név";
        errors.appendChild(li);
    }
    if (price < 1) {
        st_p = false;
        let li = document.createElement('li');
        li.textContent = "Hibás ár";
        errors.appendChild(li);
    }
    if (year > 2022) {
        st_y = false;
        let li = document.createElement('li');
        li.textContent = "Hibás év";
        errors.appendChild(li);
    }
    if (height < 20) {
        st_h = false;
        let li = document.createElement('li');
        li.textContent = "Hibás magasság";
        errors.appendChild(li);
    }
    if (st_t == true && st_p == true && st_h == true && st_y == true) {
        return true;
    }
    else {
        false;
    }
}
function init() {
    document.getElementById('btnFelvesz').addEventListener('click', Art);
}
document.addEventListener('DOMContentLoaded', init);
