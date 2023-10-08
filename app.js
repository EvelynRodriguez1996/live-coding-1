// Selecciona todos los elementos con la clase 'div' en el documento y los guarda en la variable 'list'
const list = document.getElementsByClassName('div');
// Un array de palabras
const myArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];
var array2 = [];
// Función que depura strings
function depuradorStrings(palabra, myArray) {

    myArray.forEach(element => {
        if (palabra.length < element.length) {
            console.log(element);
            array2.push(element);
            myFunction(element);
        }
    });
}
//depuradorStrings(palabra, myArray);

function myFunction(string) {

    var li = document.getElementById("li");
    li.innerHTML += `<li>` + string + ` </li>`;

}


var palabraa = document.querySelector(".palabra")
let btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
    depuradorStrings(palabraa.value, myArray);

});

/*Comentario de Kenia:realizó una breve descripción del ejercicio y explicaba con seguridad los pasos generales que realizaba, describía el por qué utilizaba tales constantes, parámetros y funciones. Hubieron algunos detalles con la utilización correcta de palabras reservadas pero su lógica de programación concluía muy bien, se necesita practicar un poco más con la resolución del problema, estuvo consciente del tiempo que se le fue proporcionado y está muy dispuesta a seguir aprendiendo. En general estuvo muy bien sus acciones tanto técnicas como blandas y manera de explicar y expresarse.
*/