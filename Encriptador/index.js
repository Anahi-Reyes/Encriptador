function clearText(){
    var textarea = document.getElementById("TextoEncriptado");
  if (textarea.value === "Ingrese el texto aquí") {
    textarea.value = "";
  }

}

function encriptar(){
    // hace que todo lo que se escribe se vulva en minusculas
    var frase = document.getElementById("TextoEncriptado"). value.toLowerCase(); 

    //Igualamos la  var "TextoEncriptado" a la var "frase", el raplace va a reemplazar la letra "e" por "enter"
    //i = para que tome letras mayusculas y minusculas
    //g = toma en cuenta toda la línea u oración
    //m = toma en cuenta multiples lineas
    var TextoEncriptado = frase.replace(/e/img, "enter");
    var TextoEncriptado = TextoEncriptado.replace(/o/img, "ober");
    var TextoEncriptado = TextoEncriptado.replace(/i/img, "imes");
    var TextoEncriptado = TextoEncriptado.replace(/a/img, "ai");
    var TextoEncriptado = TextoEncriptado.replace(/u/img, "ufat");

    document.getElementById("TextoDesencriptado").innerHTML = TextoEncriptado;

    document.getElementById("BotonCopiar").style.display = "show";
    document.getElementById("BotonCopiar").style.display = "inherit";
}

function desencriptar(){
    // hace que todo lo que se escribe se vulva en minusculas
    var frase = document.getElementById("TextoEncriptado"). value.toLowerCase(); 

    //Igualamos la  var "TextoEncriptado" a la var "frase", el raplace va a reemplazar la letra "e" por "enter"
    //i = para que tome letras mayusculas y minusculas
    //g = toma en cuenta toda la línea u oración
    //m = toma en cuenta multiples lineas
    var TextoEncriptado = frase.replace(/enter/img, "e");
    var TextoEncriptado = TextoEncriptado.replace(/ober/img, "o");
    var TextoEncriptado = TextoEncriptado.replace(/imes/img, "i");
    var TextoEncriptado = TextoEncriptado.replace(/ai/img, "a");
    var TextoEncriptado = TextoEncriptado.replace(/ufat/img, "u");

    document.getElementById("TextoDesencriptado").innerHTML = TextoEncriptado;
}

function copiar(){
    var contenido = document.querySelector("#TextoDesencriptado");
    contenido.select();
    document.execCommand("copy");
}

