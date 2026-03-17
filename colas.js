//fifo el primero entrado es el primero en salir
let cola = [];
cola.push("juan");
cola.push("maria");
console.log(cola); // Imprime la cola actualizada

let elementoRemovido = cola.shift(); // Elimina el primer elemento de la cola
console.log(elementoRemovido);