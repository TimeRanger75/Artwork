export interface Artwork{
    title:string;
    year:number;
    price:number;
    getTitle():string;
    setTitle(title:string):void;
    getYear():number;
    setYear(title:number):void;
    getPrice():number;
    setPrice(price:number):void;
    toString():string;
}