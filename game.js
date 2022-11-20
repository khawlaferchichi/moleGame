const btn= document.getElementById("play-pause");
const trou = document.querySelectorAll('.hole');
let score =document.querySelector(".score")
let Trials=document.getElementById("Trials")
let Star
let Mole=document.querySelectorAll("mole")
//let score = 0;
//let timeUp = false;
const game=document.querySelector("#game")
//console.log(mole)
function randomHole(trou) {
    
    const index = Math.floor(Math.random() * trou.length);
    const hole = trou[index];
    positionY=hole;
   
    return hole }

function clickStart(){
    
 Star=randomHole(trou);
Star.classList.add('up');
setTimeout(function() {
    Star.classList.remove('up');
    console.log(Star)
     clickStart ();
     clearTimeout
    
},1000) 
 

/*let moles = setInterval(function () {
   Star.classList.remove('up');
    console.log(Star)
     clickStart ();
   clearInterval(moles)
},1000)*/
}
/*function play(){
document.addEventListener("click",function(event){
   if (event.target.classList.contains(btn)){
clickStart()
   }
})
}*/
let compteur =0;
let cont=4;
document.addEventListener("click", function (event) {
    if (event.target.classList.contains("mole")) {
        compteur++
        console.log(" Votre score est :", compteur)
        score.innerHTML=compteur;
    }
    else{
    
         cont--
Trials.innerHTML=cont;
if(cont==0){
    cont=4
    Trials.innerHTML="GAME OVER";
    game.style.display = "none";
   
  
}
}



})





btn.addEventListener("click",clickStart)