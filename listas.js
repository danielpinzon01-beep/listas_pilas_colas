
console.log("Listas, pilas y colas");
console.log("Listas, pilas y colas");
console.log("Listas, pilas y colas");

// Listas
let lista = [1, 2, 3, 4, 5];

lista.push(6); // Agrega un elemento al final de la lista
lista.unshift(0); // Agrega un elemento al inicio de la lista
lista.pop(); // Elimina el último elemento de la lista
lista.shift(); // Elimina el primer elemento de la lista    

console.log(lista); // Imprime la lista actualizada

for (let elemento of lista) {
    console.log(elemento); // Imprime cada elemento de la lista
}

let productos = ["tomate", "arroz", "sal"];
productos.push("azúcar");
for (let producto of productos) {
    console.log(producto); // Imprime cada producto de la lista
}

productos.splice(1, 1);
console.log(productos); // Imprime la lista de productos actualizada

console.log(productos.length);
