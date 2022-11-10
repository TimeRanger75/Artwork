import { Artwork } from "./Artwork";

export class Statue implements Artwork{
    title: string;
    price:number;
    year:number;
    height:number

    constructor(title:string,price:number,year:number, height:number){
        this.title=title;
        this.year=year;
        this.price=price;
        this.height=height;
    }

    getTitle(): string {
        return this.title;
    }
    getPrice(): number {
        return this.year;
    }
    getYear(): number {
        return this.year;
    }
    getHeight():number{
        return this.height;
    }

    setTitle(title: string): void {
        this.title=title;
    }
    setPrice(price: number): void {
        this.price=price;
    }
    setYear(year: number): void {
        this.year=year;
    }
    setHeight(height:number):void{
        this.height=height;
    }
    
    toString(): string {
        return this.title+" "+this.getYear+" "+this.height+"cm: "+this.price+"Ft";
    }

}