//player 1
var randomNumber1=Math.floor(Math.random()*6)+1;
var randonDice="dice"+randomNumber1+".png";
var randomImagesource="images/"+randonDice;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImagesource);

//palyer 2
var randomNumber2=Math.floor(Math.random()*6)+1;
var randonDice2="dice"+randomNumber2+".png";
var randomImagesource1="images/"+randonDice2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImagesource1);

// who won the game ...
if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="🚩Player 1 Won";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").textContent="🚩Player 2 Won";

}
else{
    document.querySelector("h1").textContent="😶Draw";
}