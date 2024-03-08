
// Apoyate de la simplificación de la condicional, te ayudará a resolver de forma más eficiente el código
let listaEmpleados = JSON.parse(localStorage.getItem("empleados")) ? JSON.parse(localStorage.getItem("empleados")) : []

// Ojo aquí: si es un array de objetos necesitas especificar el objeto, no se puede dar como valor strings vacios
// const objEmpleado = {
//     id: '',
//     nombre:'',
//     puesto:''
// }

// let editando = false;

const formulario = document.querySelector('#formulario');
const btnAgragar = document.querySelector('#btnAgregar');

// Es mejor cambiar la sintaxis, ya que si primero ejecutas el listener y luego la función, tarda en renderizar los elementos
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

//Hizo falta especificar la obtención del valor en tus inputs
// Más que la utilización del querySelector, implementa el documentById si vas a trabajar con elementos por separado
let nombreImput = document.getElementById("nombre").value;
let puestoImput = document.getElementById("puesto").value;

//Nota: si quieres agregar un id es necesario especificar antes la formula o una función que te de un id especifico y anexarlo a tu array de evento, no se puede asignar un id sin antes darle valor

    console.log(nombreImput && puestoImput)

    // el método .trim() te ayuda a eliminar los espacios en blanco de los trings
     if(nombreImput.trim() === ""  || puestoImput.trim() === ''){
         alert('Todos los campos son obligatorios');
         return;
     } else {  
    //Ojo: hicieron falta las comillas
    const objEmpleado = {
    "nombre":nombreImput,
    "puesto":puestoImput
     }

     agregarEmpleado(objEmpleado)
     }
    
});


// function() {
    
//     console.log("hola");

//     e.preventDefault();

//     console.log(nombreImput && puestoImput)

//      if(nombreImput.trim() === ""  || puestoImput.trim() === ''){
//          alert('Todos los campos son obligatorios');
//          return;
//      } 

    // if(editando){
    //     editarEmpleado();
    //     editando = false;
    // }else{
    //     objEmpleado.id = Date.now();
    //     objEmpleado.nombre= nombreImput.value
    //     objEmpleado.puesto= puestoImput.value

    //     agregarEmpleado();
    // }

//}

// pasas como parametro el array de objetos
 function agregarEmpleado(objEmpleado){
   listaEmpleados.push(objEmpleado)
   // mando a llamar el localStorage 
   localStorage.setItem("empleados", JSON.stringify(listaEmpleados))
     console.log(listaEmpleados)
      mostrarEmpleados();
    //   guardarLocalStorage(listaEmpleados)
    //   obtenerLocalStorage()
     formulario.reset();
     limpiarObjeto();
 }

 // Ojo: aquí hice un cambio, checalo 
 function limpiarObjeto(){
     listaEmpleados.nombre ='';
     listaEmpleados.puesto= '';
 }


 function mostrarEmpleados(){
    //  limpiarHTML();
    const divEmpleados= document.querySelector('.div-empleados');
    // Para que no se repitan los elementos
     divEmpleados.innerHTML = " ";

     //Bien al utilizar un forEach! 
     //No le tengas miedo a los parametros, un buen recurso del ForEach es el index 
     // Apoyate tambien del evento onclick ayudan a simplificar el código
     listaEmpleados.forEach((empleado,index)=>{
        divEmpleados.innerHTML += `
        <div>
        <h1>${empleado.nombre}</h1>
        <h1>${empleado.puesto}</h1>
        <button type="submit" onclick="editarEmpleado(${index})" >Editar</button>
        <button type="submit" onclick="eliminarEmpleado(${index})">Borrar</button>
        </div>
        `
        // ?????????????????????? No entendí * inserte meme de gatito de ojos bizcos * jejeje 

        //  const {nombre, puesto} = empleado;
        //  const parrafo = document.createElement('p');
        //  parrafo.textContent = ` ${nombre} - ${puesto} -`;
        // parrafo.dataset.id = id;
        //  const editarBoton = document.createElement('button');
        //  editarBoton.onclick = () => cargarEmpleado(empleado);
        //  editarBoton.textContent ='Editar';
        //  editarBoton.classList.add('btn', 'btn-editar');
        //  parrafo.append(editarBoton);
        //  const eliminarBoton = document.createElement('button');
        //  eliminarBoton.onclick = () => eliminarEmpleado(id);
        //  eliminarBoton.textContent ='Eliminar';
        //  eliminarBoton.classList.add('btn', 'btn-eliminar');
        //  parrafo.append(eliminarBoton);
        //  const hr = document.createElement('hr')
        //   divEmpleados.appendChild(parrafo);
        //   divEmpleados.appendChild(hr);
    
     })
 }

// Esta función ya no es necesaria
// function cargarEmpleado(empleado){
//     const {id, nombre, puesto} = empleado;
//     nombreImput.value = nombre;
//     puestoImput.value = puesto;

//     objEmpleado.id = id;

//     formulario.querySelector('button[type="submit"]').textContent = 'Actualizar';

//     editando = true;
// }

 function editarEmpleado(index){
    // Ya no es necesario volver a especificar
    //  objEmpleado.nombre = nombreImput.value;
    //  objEmpleado.puesto = puestoImput.value;

    //Vale la pena mejor aplicar un for o forEach más que un map
     listaEmpleados.forEach( (empleado, i )=>{
        if(i === index){
          //Si se te facilita mejor en este punto volver a colocar el valor del value: 
          document.getElementById("nombre").value = empleado.nombre
          document.getElementById("puesto").value = empleado.puesto

          //Falta completar el código, ya solo es cosa de que definas que vas con valores editados
        // No te olvides mandar a llamar la constante de localStorage en este punto
        }
      
        // ibas bien, hace falta afinar esta lógica
        //  if(empleado.id === objEmpleado.id){
        //      empleado.id = objEmpleado.id;
        //      empleado.nombre = objEmpleado.nombre;
          
        //      empleado.puesto = objEmpleado.puesto;
          
        //  }
     });

    }

//   guardarLocalStorage(listaEmpleados)
//  obtenerLocalStorage();
//     //  limpiarHTML();
//     //  mostrarEmpleados();
//     formulario.reset();
//     formulario.querySelector('button[type="submit"]').textContent = 'Agregar';
//     editando= false;
// }

 function eliminarEmpleado(index){
    listaEmpleados.splice(index,1)
    console.log(listaEmpleados)
    localStorage.setItem("empleados", JSON.stringify(listaEmpleados))
    mostrarEmpleados();
  // ???????
    //  listaEmpleados = listaEmpleados.filter(empleado => empleado.id !== id);
    //  guardarLocalStorage(listaEmpleados)
    //   obtenerLocalStorage()
     // limpiarHTML();
 }

 // ¿Por qué funciones de LocalStorage por separado? 
//   function guardarLocalStorage(listaEmpleados){
//       localStorage.setItem('empleados', JSON.stringify(listaEmpleados))
//   }

//  function obtenerLocalStorage(){
//      listaEmpleados = JSON.parse(localStorage.getItem('empleados'))
//      mostrarEmpleados()
//   }

// Ya no es necesaria esta función 
// function limpiarHTML(){
//     const divEmpleados = document.querySelector('.div-empleados');
//     while(divEmpleados.firstChild){
//         divEmpleados.removeChild(divEmpleados.firstChild);
//     }
// }
//  obtenerLocalStorage ();