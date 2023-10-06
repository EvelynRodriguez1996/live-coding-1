function palabrasLargas(str, array) {
    return array.filter(word => word.length > str.length);
  }
  
  const miArray = ['insecto', 'bootcamp', 'mangos', 'reptil', 'mosca', 'escritorio'];
  console.log(palabrasLargas('bocina', miArrayArray)); 
  // Output - ['insecto', 'bootcamp', 'escritorio']


  function printArray(array) {
    const ul = document.createElement('ul');
    array.forEach(word => {
      const li = document.createElement('li');
      li.textContent = word;
      ul.appendChild(li);
    });
    document.body.appendChild(ul);
  }

  const myArray = ['insecto', 'bootcamp', 'escritorio'];
printArray(myArray);
// Output - <li>insecto</li> <li>bootcamp</li> <li>escritorio</li>
//Falta modificar aún no funciona el código

  



/*Comentario de Kenia:realizó una breve descripción del ejercicio y explicaba con seguridad los pasos generales que realizaba, describía el por qué utilizaba tales constantes, parámetros y funciones. Hubieron algunos detalles con la utilización correcta de palabras reservadas pero su lógica de programación concluía muy bien, se necesita practicar un poco más con la resolución del problema, estuvo consciente del tiempo que se le fue proporcionado y está muy dispuesta a seguir aprendiendo. En general estuvo muy bien sus acciones tanto técnicas como blandas y manera de explicar y expresarse.
*/