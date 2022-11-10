"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Statue = void 0;
class Statue {
    constructor(title, price, year, height) {
        this.title = title;
        this.year = year;
        this.price = price;
        this.height = height;
    }
    getTitle() {
        return this.title;
    }
    getPrice() {
        return this.price;
    }
    getYear() {
        return this.year;
    }
    getHeight() {
        return this.height;
    }
    setTitle(title) {
        this.title = title;
    }
    setPrice(price) {
        this.price = price;
    }
    setYear(year) {
        this.year = year;
    }
    setHeight(height) {
        this.height = height;
    }
    toString() {
        return this.title + " " + this.getYear + " " + this.height + "cm: " + this.price + "Ft";
    }
}
exports.Statue = Statue;
