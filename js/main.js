//Punto 2 
document.addEventListener("DOMContentLoaded", ()=>{
    console.log("Contenido del DOM cargado")


    //Punto 3
    const origen = document.getElementById("origen");
    origen.value = `<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>`;

    //Punto 4
    origen.addEventListener("input",habilitarBotones);

    //Punto 5
    const btnReemplazar = document.getElementById('btn-reemplazar')
    const btnAgregar = document.getElementsByClassName('btn-agregar')
    const btnVaciar = document.getElementsByClassName('btn-vaciar')
    const btnConvertirAMayuscula = document.getElementsByClassName('btn-convertir-a-mayusculas')
    const btnConvertirAMinusculas = document.getElementsByTagName('button')

    //Reemplazar
    btnReemplazar.addEventListener('click', reemplazarContenido)
    
    //Agregar 1 vez
    btnAgregar[0].addEventListener('click', agregarContenido)
    //Agregar 5 veces
    btnAgregar[1].addEventListener('click',() => {
        agregarContenidoNVeces(5);
    });
    //Agregar 10 veces
    btnAgregar[2].addEventListener('click',() => {
        agregarContenidoNVeces(10);
    });
    //Agregar N veces
    btnAgregar[3].addEventListener('click',() => {
        const cantidad = prompt('Ingrese la cantidad de veces que desea agregar el contenido de origen');
        agregarContenidoNVeces(cantidad)
    })

    //Punto 6
    //Vaciar destino
    btnVaciar[0].addEventListener('click', vaciarDestino);

    //Convertir a Mayuscula
    btnConvertirAMayuscula[0].addEventListener('click', convertirAMayuscula)

    //Convertir a Minuscula
    btnConvertirAMinusculas[0].addEventListener('click', convertirAMinuscula)

    agregarOks()
})

function habilitarBotones() {   
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].disabled = false;
    }
    var btnConvertirAMinusculas = document.querySelector("button[disabled]");
    btnConvertirAMinusculas.disabled = false;
}

//Punto 5
function reemplazarContenido(){
    const destino = document.getElementById('destino');
    destino.innerHTML = origen.value
}

function agregarContenido(){
    const destino = document.getElementById('destino')
    destino.innerHTML += origen.value
}

function agregarContenidoNVeces(n){
    const destino = document.getElementById('destino')
    for (let i = 0; i<n; i++){
        destino.innerHTML += origen.value
    }
}

//Punto 6
function vaciarDestino(){
    const destino = document.getElementById('destino')
    destino.innerText = ''
}

function convertirAMayuscula(){
    const destino = document.getElementById('destino')
    destino.innerText = destino.innerText.toUpperCase()
}

function convertirAMinuscula(){
    const destino = document.getElementById('destino')
    destino.innerText = destino.innerText.toLowerCase()
}

function agregarOks(){
    const elementosLis = document.getElementsByTagName("li");
    for (var i = 0; i < elementosLis.length; i++) {
        elementosLis[i].innerHTML = "[Ok]" + elementosLis[i].innerHTML
    }
}