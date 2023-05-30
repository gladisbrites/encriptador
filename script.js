/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/




const textArea = document.querySelector(".text-area");
const mensaje =document.querySelector(".mensaje");
/*const copia = document.querySelector(".btn-copiar");
copia.onclick = copiar;*/


function validarTexto(){
    let textoEscrito = document.querySelector(".text-area").value;
    let validador = textoEscrito.match(/^[a-z," "]*$/);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}

function btnEncriptar(){
    if(!validarTexto()){
        const textoEncriptado = encriptar(textArea.value);
        mensaje.value =textoEncriptado; 
        document.getElementById("imgDerecha").style.display = "none";
        document.getElementById("texto").style.display = "none";
        textArea.value = "";  
       
    }
      
}

function encriptar(stringEncriptada){
    let matrizCodigo =[["e", "enter"], ["i", "imes"], ["a", "ai"],["o", "ober"],["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}


function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    document.getElementById("imgDerecha").style.display = "none";
    document.getElementById("texto").style.display = "none";
    
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0]);

        }

    }
    return stringDesencriptada;
}

//no funciona con Android

/*function copiar(){
    /*mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
    alert("se copió exitosamente el texto");
}*/
//funcion para probar si funciona con Android
function copiar() {
    var copyText = document.getElementById("msj");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard
      .writeText(copyText.value)
      .then(() => {
        alert("el mensaje fue copiado exitosamente");
      })
      .catch(() => {
        alert("no se logró copiar el mensaje");
      });
}