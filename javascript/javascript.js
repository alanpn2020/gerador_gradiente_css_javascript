var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var color4 = document.querySelector(".color4");
var body = document.getElementById("gradient");

function setGradiente(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ", " + color3.value + ", " + color4.value + ")";
    document.getElementById("codcor1").innerHTML = "Cor 1: " + color1.value;
    document.getElementById("codcor2").innerHTML = "Cor 2: " + color2.value;
    document.getElementById("codcor3").innerHTML = "Cor 3: " + color3.value;
    document.getElementById("codcor4").innerHTML = "Cor 4: " + color4.value;
}

color1.addEventListener("input", setGradiente);

color2.addEventListener("input", setGradiente);

color3.addEventListener("input", setGradiente);

color4.addEventListener("input", setGradiente);