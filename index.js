// finding value for dice 1
var randomNumber1 =Math.floor(( (Math.random()*6) + 1));
var image1="images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",image1);

// finding value for dice 2
var randomNumber2 =Math.floor(( (Math.random()*6) + 1));
var image2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",image2);

// changing text of h1
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="✨Player1 WINS✨";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="✨Player2 WINS✨";
}
else{
    document.querySelector("h1").innerHTML="🙃 DRAW 🙂";
}