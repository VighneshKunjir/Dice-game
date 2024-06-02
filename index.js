var randomNum1=Math.floor(Math.random()*6)+1;//selecting no 1-6
var randomDiceImgSelector1="dice"+randomNum1+".png";//dice1-6.png
var img1Source="./images/"+randomDiceImgSelector1;
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",img1Source);


var randomNum2=Math.floor(Math.random()*6)+1;
var randomDiceImgSelector2="dice"+randomNum2+".png";
var img2Source="./images/"+randomDiceImgSelector2;
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",img2Source);

if (randomNum1>randomNum2){
    document.querySelector(".pgHeading").innerHTML="Player 1 Wins  ";
}
else if(randomNum2>randomNum1){
    document.querySelector(".pgHeading").innerHTML="Player 2 Wins " ;
}
else{
    document.querySelector(".pgHeading").innerHTML="DRAW";
}