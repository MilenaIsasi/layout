arrastrarElemento(document.getElementById('componente1'));
arrastrarElemento(document.getElementById('componente2'));
arrastrarElemento(document.getElementById('componente3'));
arrastrarElemento(document.getElementById('componente4'));
arrastrarElemento(document.getElementById('componente5'));
arrastrarElemento(document.getElementById('componente6'));
arrastrarElemento(document.getElementById('componente7'));
arrastrarElemento(document.getElementById('componente8'));
arrastrarElemento(document.getElementById('componente9'));
arrastrarElemento(document.getElementById('componente10'));
arrastrarElemento(document.getElementById('componente11'));
arrastrarElemento(document.getElementById('componente12'));
arrastrarElemento(document.getElementById('componente13'));
arrastrarElemento(document.getElementById('componente14'));
arrastrarElemento(document.getElementById('componente15'));
arrastrarElemento(document.getElementById('componente16'));
arrastrarElemento(document.getElementById('producto1'));
arrastrarElemento(document.getElementById('producto2'));
arrastrarElemento(document.getElementById('producto3'));
arrastrarElemento(document.getElementById('producto4'));


function arrastrarElemento(element) {
    //Declaramos 4 variables para manejar la posición de cada elemento en la pantalla.
    let pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    element.onpointerdown = arrastrarPuntero ; //onpointerdow ejecuta la funcion que le pasamos cuando se PRESIONA el boton del mouse

    //function arrastrarPunteroe(){ //cuando se presiona el boton en la imagen va a llamar la a la funcion mostarMensaje
       // console.log('HOLA')  //cuando llama la funcion mostrarMensaje, imprime en pantalla lo que asignamos aca.

  //  }

function arrastrarPuntero(e) {
    e.preventDefault();
    console.log(e);
    pos3 = e.clientX; //imprimimos la posicion de opointerdown
    pos4 = e.clientY;
    document.onpointermove = iniciarArrastreElemento;
    document.onpointerup = pararArrastreElemento;
   }


    function iniciarArrastreElemento(e) {
        pos1 = pos3 - e.clientX; //se resta la posicion inicial - la posicion del puntero
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX; //imprimimos la posicion de onpointermove
        pos4 = e.clientY;
        console.log(pos1, pos2, pos3, pos4);
        element.style.top = element.offsetTop - pos2 + 'px'; //vamos acceder a la imagen element, al estilo, margenes de la imagen
        element.style.left = element.offsetLeft - pos1 + 'px';//vamos acceder a la imagen element, al estilo, margenes de la imagen
    //lo que realizamos en el 52 y 53, cambiamos los margenes de arriba y de la izquierda de forma dinamica
    //va a cambiar de forma dinamica porque en el 47 y 48 se ejecuta siempre al mover, y varia los datos, no es algo estatico y fijo 
    }
    function pararArrastreElemento() {
        document.onpointerup = null; //imprimimos la posicion de onpointerup
        document.onpointermove = null;
    }

}


