//Crear variables en JS

//variables con var
// var aprendiendo = 'Javascript'

//variables con const
//la variables "const"siempre tiene que tener un valor

// const aprendiendo = "Javascript";
// aprendiendo = true;
// console.log(aprendiendo);

// let aprendiendo = 'JAVASCRIPT';
// aprendiendo = true

// console.log(aprendiendo)

//SCOPE

// var musica = "Rock"

// if (musica){
//   var musica = 'Grunge';
//   console.log('dentro del if: ', musica);
// }

// console.log('Fuera del if: ', musica);

//SCOPE CON LET

// let musica = "Rock"

// if (musica) {
//   let musica = 'Grunge';
//   console.log('dentro del if: ', musica);
// }
// console.log('Fuera del if: ', musica);

//TEMPLATE STRINGS

const nombre = 'Jhosep';
const trabajo = 'Desarrollador Web';
//concatenar en JS
// console.log('Nombre: ' + nombre + ', Trabajo de ' + trabajo);
//recomendado
console.log(`Nombre: ${nombre}, Trabajo de ${trabajo}`);

//concatenar con multiples lineas
const contenedorApp = document.querySelector('#app');
// let html = '<ul>' +
//   '<li> Nombre: ' + nombre + '</li>' +
//   '<li> Trabajo: ' + trabajo + '</li>' +
//   '</ul>';

//recomendado
let html = `
  <ul>
  <li>Nombre: ${nombre}</li>
  <li>Trabajo: ${trabajo}</li>
  </ul>
`;

contenedorApp.innerHTML = html;


//FUNCIONES
//function declaration
//Aqui no hay problema con usar la funcion antes de declararla
function saludar(nombre) {
  console.log('Bienvenido: ' + nombre);
}
saludar('Jhosep')

//function expression
//siempre declarar funciones antes de utilizarlas
const cliente = function (nombreCliente) {
  console.log('Mostrando datos del cliente: ' + nombreCliente);
}
cliente('Jhosep');

//PARAMETROS PRO DEFAULT EN LAS FUNCIONES
//function declaration
function actividad(nombre, actividad) {
  console.log(`La persona: ${nombre} esta realizando la actividad de: ${actividad} con function declaration.`)
}
actividad('Jhosep', 'Aprender ReactJS');

//function expression
const actividad2 = function (nombre, actividad) {
  console.log(`La persona: ${nombre} esta realizando la actividad de: ${actividad} con function expression.`)
}
actividad2('Jhosep', 'Aprender Angular 9+');

//Arrow Functions
let viajando = (destino, duracion) => {
  return `Viajando a la ciudad de ${destino} por ${duracion} dias.`;
}
let viaje = viajando('Paris', '9');
console.log(viaje);

//OBJETOS EN JS

function mostrarInformacionTarea(tarea, prioridad) {
  return `La tarea de: ${tarea} tiene una prioridad de: ${prioridad}`
}

//Oject Literal

const persona = {
  nombre: 'Jhosep',
  profesion: 'Desarrollado Web',
  edad: 21
}

const persona2 = {
  nombre: 'Juan',
  profesion: 'Desarrollado Web',
  edad: 22
}

let nombrePersona = 'Jhosep';
let profesion = 'Desarrollo Web';
//solo con declaracion de variable let
console.log(nombrePersona);
console.log(profesion);
//ejemplo de Objetos
console.log('Ejemplo de Objetos:')
console.log(persona);
console.log(persona.nombre);
console.log(persona.profesion);
console.log(persona.edad);
//otra forma de escribir un objeto
console.log(persona['edad']);

//function en objeto literal
// const mostrarCliente = mostrarInformacionTarea(persona.nombre,persona.profesion);
// console.log(mostrarCliente);

//OBJECT CONSTRUCTOR
console.log('Ejemplo de Object Constructor:')
function Tarea(nombre, urgencia) {
  this.nombre = nombre;
  this.urgencia = urgencia;
}
//agregar un prototype a tarea:
Tarea.prototype.mostrarInformacionTarea = function () {
  return `La tarea ${this.nombre} tiene prioridad de: ${this.urgencia}`;
}
//crear tarea
const tarea1 = new Tarea('Aprender Javascript y React', 'Urgente');
// const tarea2 = new Tarea('Pasear a Atenea', 'Media');
//funcion en un objeto constructor
const mostrarInfo = mostrarInformacionTarea(tarea1.nombre, tarea1.urgencia)
// tarea1
console.log(tarea1);
// console.log(tarea1.nombre);
// console.log(tarea1.urgencia);
// tarea2
// console.log(tarea2);
// console.log(tarea2.nombre);
// console.log(tarea2.urgencia);
// mostrar info
// console.log(mostrarInfo);
//prototype
console.log(tarea1.mostrarInformacionTarea());

//DESTRCUTURING OF OBJECTS
const aprendiendoJS = {
  version: {
    nueva: 'ES6+',
    anterior: 'ES5'
  },
  frameworks: ['React', 'VueJS', 'AngularJS']
}

//'DESCTRUCTURING' ES EXTRAER VALORES DE UN OBJETO
console.log('\nAprendiendo a Destructuring og Objects');
console.log(aprendiendoJS);

//Version anterior (cultura general)
let version = aprendiendoJS.version.nueva;
let framework = aprendiendoJS.frameworks[2];
console.log('Destructurando antigua version de ES5')
console.log(version);
console.log(framework);

//Destructuring en nueva version ES6+
let { nueva } = aprendiendoJS.version;
console.log('Destructurando nueva version de ES6+')
console.log(nueva);

//OBJECT LITERAL ENHANCEMENT

const banda = 'Metallica';
const genero = 'Heavy Metal';
const canciones = ['Master of Puppets', 'Seek & Destroy', 'Enter Sandman']
//forma antigua
const metallica = {
  banda: banda,
  genero: genero,
  canciones: canciones
}
console.log(metallica);
//forma nueva
const metallicaNueva = {
  banda, genero, canciones
}
console.log(metallicaNueva);

//Metodos o funciones en un objeto
//forma antigua
// const people = {
//   nombre: 'Jhosep',
//   apellido: 'Guadalupe Culqui',
//   edad: 21,
//   profesion: 'Desarrollador Web Full-Stack',
//   estudios: 'Universidad en Curso',
//   trabajo: false,
//   mostrarInfoPersonal: function () {
//     console.log(`${this.nombre} es ${this.profesion} y su edad es ${this.edad}, actualmente tiene ${this.estudios} y en el trabajo ${this.trabajo}`)
//   }
// }
//forma nueva
const people = {
  nombre: 'Jhosep',
  apellido: 'Guadalupe Culqui',
  edad: 21,
  profesion: 'Desarrollador Web Full-Stack',
  estudios: 'Universidad en Curso',
  trabajo: false,
  mostrarInfoPersonal() {
    console.log(`${this.nombre} es ${this.profesion} y su edad es ${this.edad}, actualmente tiene ${this.estudios} y en el trabajo ${this.trabajo}`)
  }
}
people.mostrarInfoPersonal();

//ARREGLOS y .map

const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];
// console.log(carrito);
//primero forma
// let bodyHtml = '';
// const appContenedor=document.querySelector('#app');
// carrito.forEach(producto =>{
//   bodyHtml += `<li>${producto}</li>`
// });
// appContenedor.innerHTML=bodyHtml;

//segunda forma
carrito.map(producto => {
  return 'El Producto es: ' + producto;
});

//OBJECTS KEYS
const people2 = {
  nombre: 'Jhosep',
  apellido: 'Guadalupe Culqui',
  edad: 21,
  profesion: 'Desarrollador Web Full-Stack',
  estudios: 'Universidad en Curso',
  trabajo: false
}
console.log(Object.keys(people2));

//SPREAR OPERATOR...
console.log('Sprea Operator')
let lenguajes = ['Javascript', 'PHP', 'Python'];
let frameworks = ['ReactJS', 'Laravel', 'Django']
//unir los arreglos en 1 solo arreglo. 1era forma
let combinar = lenguajes.concat(frameworks);
console.log(combinar)

//unir los arreglos en 1 solo arreglo. 2da forma
let combinacion = [...lenguajes, ...frameworks];
console.log(combinacion)
//sin sprear
let [ultimo] = lenguajes.reverse();
lenguajes.reverse();
console.log(lenguajes)
console.log(ultimo)
//con sprear operator
let [ultimo2] = [...lenguajes].reverse();
console.log(lenguajes)
console.log(ultimo)

//sprear con funciones
function suma(a, b, c) {
  console.log(a + b + c);
}

const numeros = [1, 2, 3]
suma(...numeros)

//METODOS EN ARREGLOS 
const personas = [
  { nombre: 'Jhosep', edad: 21, aprendiendo: 'Javascript' },
  { nombre: 'Carlos', edad: 22, aprendiendo: 'PHP' },
  { nombre: 'Juan', edad: 33, aprendiendo: 'Python' },
  { nombre: 'Karen', edad: 44, aprendiendo: 'ReactJS' },
  { nombre: 'Jose', edad: 18, aprendiendo: 'Angular' },
]

console.log(personas);
//mayores de 28 años
const mayores=personas.filter(persona =>{
  console.log(persona);
  return persona.edad>28;
})
console.log(mayores)

//que aprende Jhosep
const jhosep = personas.find(persona=>{
  return persona.nombre == 'Jhosep';
})
console.log('Jhosep esta aprendiendo: '+jhosep.aprendiendo)

//reduce
let total = personas.reduce((edadTotal, persona)=>{
  return edadTotal + persona.edad;
}, 0);
console.log(total / personas.length)

