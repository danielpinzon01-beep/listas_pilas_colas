
// pila funciona como bajo el prinicipopio de LIFO (Last In, First Out), es decir, el último elemento que se agrega a la pila es el primero en ser removido.
let pila = [];
pila.push(1); // Agrega un elemento a la pila
pila.push(2); // Agrega un elemento a la pila
pila.push(3); // Agrega un elemento a la pila
console.log(pila); // Imprime la pila actualizada

let elementoRemovido = pila.pop(); // Elimina el último elemento de la pila
console.log(elementoRemovido); // Imprime el elemento removido
console.log(pila[pila.length - 1]); // Imprime el último elemento de la pila sin removerlo

let pila1 =[];
if (pila1.length == 0) {
    console.log("La pila está vacía");
}else{
    console.log("La pila no está vacía");
}