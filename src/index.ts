import { Artwork } from "./Artwork";
import { Statue } from "./Statue";


let statueArray:Artwork[]=[];


function Art(){
    let title=(document.getElementById("szobor")as HTMLInputElement).value;
    let year=(document.getElementById('ev')as HTMLInputElement).value;
    let price=(document.getElementById('ar')as HTMLInputElement).value;
    let height=(document.getElementById('magassag')as HTMLInputElement).value;
    console.log(/[a-zA-Z-]/gm.test(title));
    // let st_price=""+price;
    // console.log(/^[1-9]/gm.test(st_price))
  
}



function Validate(title:string,year:number, price:number, height:number){

    let errors=(document.getElementById('errors')as HTMLElement);
    // let st_price=""+price;
    // let st_year=""+year;
    let title_g:boolean=true
    let title_p:boolean=true
    let title_y:boolean=true
    let title_h:boolean=true

    if(/[\S\s]/gm.test(title)==false){
        title_g=false;
    }
    
    if(price>0){
        title_p=false;
    }
    
    if(year>2022){
        title_y=false;
    }
 
    if(height<20){
        title_h=false;
    }

}

function init(){
    document.getElementById('btnFelvesz')!.addEventListener('click',Art);

}

document.addEventListener('DOMContentLoaded', init)