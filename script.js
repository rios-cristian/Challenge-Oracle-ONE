
function fcifrado(){
  const capturarTexto = document.getElementById("textoEntrada").value;
  if (capturarTexto.match(/[^a-z\s]/)) {
    return alert("No deben ser utilizados letras con acentos ni caracteres especiales");
}
  const textoCifrado = capturarTexto.replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/a/gi, 'ai').replace(/o/gi, 'ober').replace(/u/gi, 'ufat');
  document.getElementById("textoSalida").value =textoCifrado
  return false
}


function fdescifrado(){
  const capturarTexto = document.getElementById("textoEntrada").value;
  if (capturarTexto.match(/[^a-z\s]/)) {
    return alert("No deben ser utilizados letras con acentos ni caracteres especiales");
}
  const descifrado = capturarTexto.replace(/ai/gi, 'a').replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
  document.getElementById("textoSalida").value = descifrado
  return false
    
}
    
function fcopiarTexto(){
  const copiarTexto = document.getElementById("textoSalida");
  copiarTexto.select();
  document.execCommand("Copy");
  alert("Mensaje copiado");
  return false
}

/*carga del archivo txt*/
function mostrarContenido(contenido) {
  const mostrarcuadro = document.getElementById("textoEntrada");
  mostrarcuadro.value = contenido;
}
function leerArchivo(e) {
  const archivo = e.target.files[0];
  if (!archivo) {
    return;
  }
  const lector = new FileReader();
  lector.onload = function(e) {
    const contenido = e.target.result;
    mostrarContenido(contenido);
  };
  lector.readAsText(archivo);
}

document.querySelector('#archivo1')
  .addEventListener('change', leerArchivo, false);

/*Creamos un archivo txt con el texto del cuadro textoSalida*/
function exportar (data, fileName) {
  const a = document.createElement("a");
  const contenido = data,
      blob = new Blob([contenido], {type: "octet/stream"}),
      url = window.URL.createObjectURL(blob);
  a.href = url;
  a.download = fileName;
  a.click();
  window.URL.revokeObjectURL(url);
  
};

function fcrearTxt() {
  const data = document.getElementById("textoSalida").value;
  const nombreArchivo = 'mensaje.txt';
  exportar(data, nombreArchivo);
}