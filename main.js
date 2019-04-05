'use strict';

// La app tiene un select con dos caras y un botón de actualizar. Por defecto es feliz y amarillo. Al pulsar el actualizar se muestra la cara seleccionada y cambia el fondo en base a un número aleatorio: amarillo si par, naranja si impar.

// Recoger el select
const selectEl = document.querySelector('.mood__selector');
// Recoger el boton
const buttonEl = document.querySelector('.mood__update');
// Recoger el título
const titleEl = document.querySelector('.mood__face');
// Recoger el body
const body = document.body;

// TODO: volver y intentar descifrar como funciona esto
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function isEven(num) {
  return num%2 === 0;
}

function changeColor() {
   // Generar un número aleatorio entre 1 y 100
   const randomNumber = getRandomIntInclusive(1, 100);

   // En este punto compruebo
   // console.log(randomNumber);
   
   if(isEven(randomNumber)) {
   // Si par
     // Quitar clase naranja de body
     body.classList.remove('chilly-orange');
   } else {
   // sino
     // Añadir clase naranja a body
     body.classList.add('chilly-orange');
   }
}

function changeMood() {
  // Recoger el valor del select y ponerlo en el título
  titleEl.innerHTML =  selectEl.value;
}

// En este punto compruebo
// console.log(selectEl, buttonEl, titleEl, body);

// Escuchar click en botón
buttonEl.addEventListener('click', handleButtonClick);


// Crear handler de click en botón
function handleButtonClick(event) {
  event.preventDefault();
  
  // En este punto compruebo
  //console.log('CLICK');
  
  // Cambio la cara
  changeMood();
  
  // Cambio el color
  changeColor();
}
