import { Artwork } from "./Artwork";
import { Statue } from "./Statue";


let statueArray:Artwork[]=[];
let errors=(document.getElementById('errors')as HTMLElement);

function Art(){
    errors.textContent="";
    let title=(document.getElementById("szobor")as HTMLInputElement).value;
    let year=parseInt((document.getElementById('ev')as HTMLInputElement).value);
    let price=parseInt((document.getElementById('ar')as HTMLInputElement).value);
    let height=parseInt((document.getElementById('magassag')as HTMLInputElement).value);
    //console.log(/[a-zA-Z-]/gm.test(title));
    // let st_price=""+price;
    // console.log(/^[1-9]/gm.test(st_price))
    if(Validate(title,year,price,height)==true){
        let statue:Statue=new Statue(title,price,year,height);
        statueArray.push(statue);
        (document.getElementById("szobor")as HTMLInputElement).value="";
        (document.getElementById('magassag')as HTMLInputElement).value="";
        (document.getElementById('ev')as HTMLInputElement).value="";
        (document.getElementById('ar')as HTMLInputElement).value="";
        (document.getElementById('count')as HTMLElement).textContent=statueArray.length+" db";

    let price_sum:number=0;
    for(let i=0;i<statueArray.length;i++){
        price_sum+=statueArray[i].getPrice();
    }
    (document.getElementById('price_sum')as HTMLElement).textContent=price_sum+" Ft";
    }
    
    
}



function Validate(title:string,year:number, price:number, height:number){

    
    // let st_price=""+price;
    // let st_year=""+year;
    let st_t:boolean=true
    let st_p:boolean=true
    let st_y:boolean=true
    let st_h:boolean=true

    if(/[\S\s]/gm.test(title)==false){
        st_h=false;
        let li=document.createElement('li');
        li.textContent="Hibás név";
        errors.appendChild(li);
    }
    
    if(price<1){
        st_p=false;
        let li=document.createElement('li');
        li.textContent="Hibás ár";
        errors.appendChild(li);
    }
    
    if(year>2022){
        st_y=false;
        let li=document.createElement('li');
        li.textContent="Hibás év";
        errors.appendChild(li);
    }
 
    if(height<20){
        st_h=false;
        let li=document.createElement('li');
        li.textContent="Hibás magasság";
        errors.appendChild(li);
    }

    if(st_t==true&& st_p==true&&st_h==true&& st_y==true){
        return true;
    }
    else{
        false;
    }

}

function init(){
    document.getElementById('btnFelvesz')!.addEventListener('click',Art);

}

document.addEventListener('DOMContentLoaded', init)