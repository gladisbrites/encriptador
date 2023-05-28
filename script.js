/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/

/*function encriptar(){
    var texto = document.getElementById("textoEntrada");
    var textoCifrado =texto.replace(/e/igm,"enter");
    var textoCifrado =textoCifrado.replace(/i/igm,"imes");
    var textoCifrado =textoCifrado.replace(/a/igm,"ai");
    var textoCifrado =textoCifrado.replace(/o/igm,"ober");
    var textoCifrado =textoCifrado.replace(/u/igm,"ufat");
    document.getElementById("imgDerecha").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("msj").innerHTML = textoCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}
function desencriptar(){
    var texto = document.getElementById("textoEntrada");
    var textoCifrado =texto.replace(/enter/igm,"e");
    var textoCifrado =textoCifrado.replace(/imes/igm,"i");
    var textoCifrado =textoCifrado.replace(/ai/igm,"a");
    var textoCifrado =textoCifrado.replace(/ober/igm,"o");
    var textoCifrado =textoCifrado.replace(/ufat/igm,"u");
    document.getElementById("imgDerecha").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("msj").innerHTML = textoCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function copiar(){
    var contenido = document.querySelector("#msj");
    contenido.selected();
    
}*/

const textArea = document.querySelector(".text-area");
const mensaje =document.querySelector(".mensaje");

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value =textoEncriptado; 
}

function encriptar(stringEncriptada){
    let matrizCodigo =[["e", "enter"], ["i", "imes"], ["a", "ai"],["o", "ober"],["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

