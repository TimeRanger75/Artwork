import { Artwork } from "./Artwork";
import { Statue } from "./Statue";


let statueArray:Artwork[]=[];


function Art(){
    let title=(document.getElementById("szobor")as HTMLInputElement).value;
    let year=(document.getElementById('ev')as HTMLInputElement).value;
    let price=(document.getElementById('ar')as HTMLInputElement).value;
    let height=(document.getElementById('magassag')as HTMLInputElement).value;
    console.log(/[\S\s]/gm.test(title));
    let st_price=""+price;
    console.log(/^[1-9]/gm.test(st_price))
  
}



function Validate(title:string,year:number, price:number, height:number){

    let st_price=""+price;
    if(/[\S\s]/gm.test(title)==false){

    }
    else{

    }
    if(/^[1-9]/gm.test(st_price)==false){

    }

}

function init(){
    document.getElementById('btnFelvesz')!.addEventListener('click',Art);

}

document.addEventListener('DOMContentLoaded', init)