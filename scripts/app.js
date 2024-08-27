/*codigo asccii a: 97  z:122 */
let palabraEncriptada;

function validarCaracteres(tEvent){
    var t = new Boolean(true);
    if((parseInt(tEvent.keyCode) < 97) ){
        alert("Solo acepta caracteres  a - z");
        t = false;
    }
    return
}

function encriptar(){
    let palabra = document.getElementById("capturarTexto").value
    let lista=[];
    for(let i = 0; i < palabra.length; i++){
        lista[i]=palabra[i];
        //sumar 2 a espacios a indices pares
        if(i%2 == 0){
            let codigo = lista[i].charCodeAt(0);
            codigo+=2;
            if(codigo>122){
                codigo -=26;
            }else if(codigo==34){
                codigo -=2;
            }
            lista[i] = String.fromCharCode(codigo);
        }

    }
    console.log(lista);
    lista.reverse();
    palabraEncriptada = lista.join("");
    palabraEncriptada.replace(",","");
    console.log(palabraEncriptada);
    mostrarPalabraEncriptada();
    return 1;
}

function mostrarPalabraEncriptada(){
    document.getElementById("imgEncriptado").style.display = "none";
    document.getElementById("pResultadoNoEncontrado").style.display = "none";
    document.getElementById("pResultadoSugerencia").style.display = "none";
    document.getElementById("divBotonCopiar").style.display="flex";
    console.log(palabraEncriptada);
    document.getElementById("pResultadoEncriptado").style.display = "block";
    document.getElementById("pResultadoEncriptado").innerHTML = palabraEncriptada;
   
   /* mostrar.style.visibility = "visible";
    mostrar.innerHTML = palabraEncriptada;*/
}

function copiar(){
    navigator.clipboard.writeText(palabraEncriptada);
    alert("texto Copiado");
}

function desencriptar(){
    //funcion desencripar
    let palabra = document.getElementById("capturarTexto").value
    let lista=[];
    lista = palabra.split("");
    console.log(lista)
    lista.reverse();
    for(let i = 0; i < palabra.length; i++){
        //restar 2 a espacios a indices pares
        if(i%2 == 0){
            let codigo = lista[i].charCodeAt(0);
            codigo-=2;
            if(codigo<97){
                codigo +=26;
            }else if(codigo==34){
                codigo -=2;
            }
            lista[i] = String.fromCharCode(codigo);
        }
    }
    palabraEncriptada = lista.join("");
    palabraEncriptada.replace(",","");
    console.log(palabraEncriptada);
    mostrarPalabraEncriptada();
    return 1;
}

/*<textarea class="principal__capturar__input--text"  placeholder="Ingrese el texto aqui" id="capturarTexto"
            onkeypress="validarCaracteres(event);"; onclick.thisvalu=""; onkeyup="javascript:this.value=this.value.toLowerCase();"></textarea>
  */