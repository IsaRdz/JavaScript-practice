let arr = [1, 2, 3];
arr[10] = 'hello';
console.log(arr.length);

let universo = ['luna', 'sol', 'planeta', 'estrella'];
let nombres = ['Juan', 'Lucas', 'Laura'];
let animales = ['perro', 'gato', 'canario', 'tortuga', 'pez'];
let numbers = [9, 8, 5, 7, 2, 4];


//Método pop: destructive method que borra el último valor del array. 
universo.pop();
console.log(universo);

nombres.pop();
console.log(nombres);

animales.pop();
console.log(animales);

//Método shift: elimina el primer elemento de un arreglo

nombres.shift();
console.log(nombres);

numbers.shift();
console.log(numbers);

universo.shift();
console.log(universo);

//Método unshift: ermite agregar un elemento al principio de un arreglo

nombres.unshift('Carla');
console.log(nombres);

numbers.unshift(3);
console.log(numbers);

universo.unshift('estrella');
console.log(universo);

//Método find: no-destructivo devuelve el primer valor de un array que cumpla la condición que le indiquemos
const findAnimal = animales.find(n => n == 'gato');
console.log(findAnimal);

var findNombre = nombres.find(name => name == "Pedro");
console.log(findNombre);

var findUniverso = universo.find(satelite => satelite == "luna");
console.log(findUniverso);

//Método some:
const someAnimal = animales.some(n => n == 'gato');
console.log(someAnimal);

var someNombre = nombres.some(name => name == "Pedro");
console.log(someNombre);

var someUniverso = universo.some(satelite => satelite == "marte");
console.log(someUniverso);

//Método push: Añade un nuevo valor al final del array y devuelve el length del nuevo array generado. 

console.log(universo.push('jupiter'));
console.log(animales.push('hamster'));
console.log(nombres.push('carlos'));

//Método sort: sirve para ordenar información, ya sea alfabéticamente como de mayor a menor (o a la inversa).

console.log(universo.sort());
console.log(animales.sort());
console.log(numbers.sort());
console.log(numbers.sort((a,b) => b.numbers - a.numbers));

//Método includes:

console.log(universo.includes('jupiter'));
console.log(animales.includes('perro'));
console.log(numbers.includes(10));

//Método join: Devuelve un string separada por el parámetro que le pasemos.

console.log(numbers.join('+'));
console.log(nombres.join(' '));
console.log(animales.join(' - '));

//Método indexOf: Devuelve la posición (el index, un número) en el array del valor del array que le pasamos por parámetro.

console.log(numbers.indexOf(9));
console.log(animales.indexOf('gato'));
console.log(universo.indexOf('sol'));

//Método slice: devuelve la copia de un array con la posibilidad de especificar el inicio y el final de la copia. Sin que el array original se vea afectado.

let cloneAnimales = animales.slice(2,5);
console.log(cloneAnimales);

let cloneNumbers = numbers.slice(3);
console.log(cloneNumbers);

let cloneNombres = nombres.slice(1,3);
console.log(cloneNombres);

const user = {
    name : 'Isa',
    username : 'IsaRdz',
    address : {
        lat: 12345,
        lng: 456123    
    }
}