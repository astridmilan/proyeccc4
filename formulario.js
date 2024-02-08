// 1. Mucho Ojo con los parentesis que coloques. El parentesis al incio de tu código es un error de sintaxis. 
// 2.- No hacía falta declarar la función "Formulario", ya que ibas a estar ocupando varias funciones y no solo una que la englobara. Si bien, el principio que ocupaste va del lado de Funciones Públicas y Privadas, en este caso era un tanto innecesaria. 
// //3.- Mucho ojo, con los nombres de los obtención de elementos del documento. Habías colocado:  let formulario = document.getElementsByName("formulario")[0], elementos = formulario.elements; boton = document.getElementById("btn"); Pero nunca los utilizaste, además de que no se obtienen los valores de todo el formulario. Es necesario ser especificos. 




// Esta bien que coloques nombres a tus funciones de esta manera, solo verifica que el parentesis al lado de "function()" esté pegado.
let validarNombre = function(){
  // Primero tenías que haber capturado el valor del input para después definir la condicional
  let nombre = document.getElementById("nombre").value
console.log(nombre)
if (nombre == 0) {
    // Apoyate de los Console.log, ayudan bastante para que sepas que efectivamente estas recibiendo los valores que deseas
     console.log(formulario.nombre.value)
     alert("Completa el campo nombre");
   }

}

let validarApellido = function() {
  let apellido = document.getElementById("apellido").value
  console.log(apellido)
   if (apellido == 0) {
     console.log(formulario.apellido.value)
     alert("Completa el campo apellido");
   }

 };

  let validarRadio = function(e) {
    //cuando tienes varios inpust con el mismo nombre, ocupas el getElementsByName para después hacer una iteración
   let sexo = document.getElementsByName("sexo")
   let sexoSeleccionado = null;
   // Recorremos la colección de elementos y verificamos cuál está marcado como seleccionado
   for (let i = 0; i < sexo.length; i++) {
       if (sexo[i].checked) {
           sexoSeleccionado = sexo[i].value;
           break; // Salimos del bucle cuando encontramos el elemento seleccionado
       }
   }

   if (sexoSeleccionado == null){
    alert("Completa el campo sexo")
   }
   console.log(sexoSeleccionado);

  };

  let validarCheckbox = function() {
   let terminos = document.getElementById("terminos").checked
   console.log(terminos)
    if (terminos == false) {
      alert("Acepta los Términos y Condiciones");
    }
  };

 function validar(e){

  let vista = document.getElementById("aviso")
  validarNombre()
  validarApellido()
  validarRadio()
  validarCheckbox()
  console.log("evento")
  e.preventDefault(); 
  // Añadí un aviso al final de completar el Form, siempre es bueno que nuestros usuarios sepan si se envió o no. 
  vista.innerHTML = "Se llenó correctamente el Formulario, espere respuesta"
 }

 // El envio de datos se realiza hasta el último, ya que primero tiene que hacer las verificaciones antes de enviar.
 let formulario = document.getElementById("formulario")
 formulario.addEventListener("submit", validar);