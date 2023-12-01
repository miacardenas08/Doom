//buscar elemento h1 y guardar en variable 
let titulo = document.querySelector('h1')
//modificar texto de el elemento h1


let imagen = document.querySelector ('.imagen')

let boton = document.querySelector('#cambiarImagen')

let verificar = false;

//le indico al evento que haga algo
boton.onclick = function(){
    if (verificar == false){
    imagen.src = 'pizza_casera_31391_orig.jpg'
    verificar = true
}else{
    titulo.innerText = 'DOM'
    imagen.src = 'pepperoni-pizza-abob-t.jpg.webp'
    verificar = false
}


/*
}
let botonRojo = document.querySelector('#rojo')
let botonAzul = document.querySelector('#azul')
let botonVerde = document.querySelector('#verde')


botonRojo.onclick = function(){
    titulo.style.color = 'red'
}
botonAzul.onclick = function(){
    titulo.style.color = 'blue'
}
botonVerde.onclick = function(){
    titulo.style.color = 'green'
}

//agregar elementos de danza con imagenes y funciones,variables y condiciones,
// creando y utilizando la web anterior 
//entregar esto para el 24/11
//grid boostrap



let titulo = document.querySelector("h1")
let parrafo = document.querySelector("p")


<button id = "aumentar">Aumentar tamaño</button>
<button id = "disminuir">Aumentar tamaño</button>
<button id = "cambiarImagen">cambiar imagen</button>
*/


