//EVENTOS//

//Ejercicio1//
const cuadro = document.getElementById("cuadro");
const colorCuadro = document.getElementById("colorCuadro");
const boton = document.getElementById("boton");

let color = "gray";
let text = "white";

boton.addEventListener("click", () => {
  if (color === "gray") {
    cuadro.style.backgroundColor = "lightblue";
    colorCuadro.textContent = "Celeste";
    color = "lightblue"
  } else if (color === "lightblue") {
    cuadro.style.backgroundColor = "red";
    colorCuadro.textContent = "Rojo";
    color = "red";
  } else {
    cuadro.style.backgroundColor = "gray";
    colorCuadro.textContent = "Gris";
    color = "gray";
  }
});
// Ejercicio 2//

function cuadradogris() {
  const inputText = document.getElementById("inputText").value;
  document.getElementById("cuadrado").innerText = inputText;
}

function borrador() {
  document.getElementById("inputText").value = "";
  document.getElementById("cuadrado").innerText = "";
}

document.getElementById("inputText").addEventListener("input", cuadradogris);

//Ejercicio 3//

function imc() {
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  
  if (isNaN(peso) || isNaN(altura)) {
    document.getElementById("resultado").value = "Por favor ingrese valores válidos";
    return;
  }
  
  const imc = peso / (altura * altura);
  document.getElementById("resultado").value = imc.toFixed(2);
}


