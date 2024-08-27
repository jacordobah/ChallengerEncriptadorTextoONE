/*codigo asccii a: 97  z:122 */
let palabraMostar;

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
        let codigo = lista[i].charCodeAt(0);
        switch(palabra[i]){
            case ('a'): lista[i] = "ai";
                        break;
            case ('e'): lista[i] = "enter";
                        break;
            case ('i'): lista[i] = "imes";
                        break;
            case ('o'): lista[i] = "ober";
                        break;
            case ('u'): lista[i] = "ufat";
                        break;
            default: break;
        }
    }
    palabraMostar = lista.join("");
    mostrarPalabraEncriptada();
}
/*

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
    lista.reverse();
    palabraEncriptada = lista.join("");
    palabraEncriptada.replace(",","");
    mostrarPalabraEncriptada();
    return 1;
}*/

function mostrarPalabraEncriptada(){
    document.getElementById("imgEncriptado").style.display = "none";
    document.getElementById("pResultadoNoEncontrado").style.display = "none";
    document.getElementById("pResultadoSugerencia").style.display = "none";
    document.getElementById("divBotonCopiar").style.display="flex";
    document.getElementById("pResultadoEncriptado").style.display = "block";
    document.getElementById("pResultadoEncriptado").innerHTML = palabraMostar;
}

function copiar(){
    navigator.clipboard.writeText(palabraMostar);
    alert("texto Copiado");
    document.getElementById("capturarTexto").value = "";
    document.getElementById("capturarTexto").focus;
}

function desencriptar(){
    const palabra = document.getElementById("capturarTexto").value
    let desencpitaa = palabra.replaceAll('ai','a');
    console.log("1",desencpitaa);
    let desencriptae = desencpitaa.replaceAll("enter","e");
    let desencriptai = desencriptae.replaceAll("imes","i");
    let desencriptao = desencriptai.replaceAll("ober","o");
    let desencriptau = desencriptao.replaceAll("ufat","u");
    palabraMostar = desencriptau;
    mostrarPalabraEncriptada();

}


/*
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
}*/
