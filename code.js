let c = document.getElementById("c");
let  gomb1 =document.getElementById("gomb1");

c.innerHTML="<i>Matematikai müveletek<i>"
//let kék = document.getElementById("kék");
//let piros = document.getElementById("piros ");
let szürke = document.getElementById("szürke");
//let ered = document.getElementById("ered ");
let  gomb2 =document.getElementById("gomb2");



function handleClick(){
    let ered=document.getElementById("ered") ;
    ered.innerText="eredmény:555";
    let kek1 = document.querySelector(".kek1");
    kek1.src="img/kek-számmal.png";
    let kek2 = document.querySelector(".kek2");
    kek2.src="img/kek-számmal.png";
    let kek3 = document.querySelector(".kek3");
    kek3.src="img/kek-számmal.png";
    let piros2=document.querySelector(".piros2");
    piros2.src="img/piros-számmal.png"
    let piros1=document.querySelector(".piros1");
    piros1.src="img/piros-számmal.png"
    let piros3=document.querySelector(".piros3");
    piros3.src="img/piros-számmal.png"
    let szürke1=document.querySelector("#szürke1")
    szürke1.src="img/szurke-számmal.png"
    let szürke2=document.querySelector("#szürke2")
    szürke2.src="img/szurke-számmal.png"
    let szürke3=document.querySelector("#szürke3")
    szürke3.src="img/szurke-számmal.png"
}
gomb2.addEventListener("click",handleClick);







function handleClick1(){
   
    ered.innerText="eredmény:";
    let kek1 = document.querySelector(".kek1");
    kek1.src="img/kek.png";
    let kek2 = document.querySelector(".kek2");
    kek2.src="img/kek.png";
    let kek3 = document.querySelector(".kek3");
    kek3.src="img/kek.png";
    let piros2=document.querySelector(".piros2");
    piros2.src="img/piros.png"
    let piros1=document.querySelector(".piros1");
    piros1.src="img/piros.png"
    let piros3=document.querySelector(".piros3");
    piros3.src="img/piros.png"
    let szürke1=document.querySelector("#szürke1")
    szürke1.src="img/szurke.png"
    let szürke2=document.querySelector("#szürke2")
    szürke2.src="img/szurke.png"
    let szürke3=document.querySelector("#szürke3")
    szürke3.src="img/szurke.png"
}
gomb1.addEventListener("click",handleClick1);