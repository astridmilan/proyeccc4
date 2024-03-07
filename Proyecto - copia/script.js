
// Ojo aquí: ya no se ocupa var
//cambiamos el valor del null por un array vacio 
let selectedRow = [];

//Cambie la ubicación de las funciones 
//Add data

const selectForm = document.querySelector("#student-form")
selectForm.addEventListener("submit", (e) =>{
    e.preventDefault()
    //Get Form Values
    // No es necesario darle el valor de string como salida del input (= "")
     const firstName =   document.getElementById("firstName").value; 
     console.log(firstName)
    // Ojo en como mandas a llamar los elementos tenías "lastname"
     const lastName =  document.getElementById("lastName").value;
     console.log(lastName) 
    //  Ojo aquí, "rolNo" en vez de rollNo, acuerdate que tiene que tener exactamente el mismo nombre que en tu HTML
    const rollNo =   document.getElementById("rollNo").value; 
    console.log(rollNo)

    if (firstName.trim() === "" || lastName.trim() === "" || rollNo.trim() === "") {
        showAlert("Please fill all fields", "danger");
        return; // Detener el proceso si algún campo está vacío
    } else {
        //Array de objetos 
        let datos = {
            "Nombre": firstName,
            "Apellido": lastName,
            "rol": rollNo
        }
        //Apoyate con los console.log
       console.log(datos)

       const list = document.querySelector("#student-list");
      const row = document.createElement("tr");
            row.innerHTML += `
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${rollNo}</td>
            <td>
            <button class="btn btn-warning btn-sm edit">Edit</button>
            <button class="btn btn-danger btn-sm delete">Delete</button>
            </td>
            `;

            list.appendChild(row);

        const editButtons = row.querySelectorAll(".edit");
        const deleteButtons = row.querySelectorAll(".delete");
        // se realiza una iteración por cada elemento de la lista, no queremos borrar todos los campos
        editButtons.forEach(button => {
            // Agregar event listener para editar y borrar después de agregar la fila
            button.addEventListener("click", (e) => {
                console.log("Editar");
                target = e.target;
                if(target.classList.contains("edit")){
                  selectedRow = target.parentElement.parentElement;
                  // no es necesraio una doble comparación = "" = 
                  document.getElementById("firstName").value = selectedRow.children[0].textContent;
                  document.getElementById("lastName").value = selectedRow.children[1].textContent;
                  // Ojo aquí: tenías document.querySelector("#rollNo") en vez de rolNo 
                  document.getElementById("rollNo").value = selectedRow.children[2].textContent;

                  //Hace falta completar lo que hara despues de editar los datos
              }  
            });
        });

        
        deleteButtons.forEach(button => {
            button.addEventListener("click", (e) => {
                console.log("Eliminar");
           target = e.target;
         if(target.classList.contains("delete")){
         target.parentElement.parentElement.remove();
         showAlert("Student Data Deleted", "danger");
            }
            });
        });

            //Envio de los datos al array selectedRow 
            selectedRow.push(datos)
            showAlert("Student Added", "success");
            clearFields()
    }
});

  function showAlert(message, className){
      const div = document.createElement("div");
      // Se utilizan los backticks para interpolar 
      div.className = `alert alert-${className}`
      div.appendChild(document.createTextNode(message));
      const container = document.querySelector(".container");
      const main = document.querySelector(".main");
      container.insertBefore(div, main);
      setTimeout(() => document.querySelector(".alert").remove(), 3000);
  }

  //clear all fields
function clearFields(){
    document.getElementById("firstName").value = ""; 
    document.getElementById("lastName").value = ""; 
    document.getElementById("rollNo").value = ""; 
}

//Edit Data 
// ¿Por qué mandas a llamar al studen-list en vez del nombre que lleva la clase edit? 
// Ojo con la escritura tenías documet en vez de document 

// ------ Si te das cuenta lo metí dentro del Listener, ya que si ejecutas por fuera no detecta que es otro evento del mismo a menos de que sea una función 


//  documet.querySelector("#student-list").addEventListener("click", (e) =>{
//      target = e.target;
//      if(target.classList.contains("edit")){
//          selectedRow = target.parentElement.parentElement;
//          document.getElementById("firstName").value = "" = selectedRow.children[0].textContent;
//          document.getElementById("lastName").value = "" = selectedRow.children[1].textContent;
//          // Ojo aquí: tenías document.querySelector("#rollNo") en vez de rolNo 
//          document.getElementById("rollNo").value = selectedRow.children[2].textContent;
//      }   
//  })
 //
// //Delete Data

// document.querySelector("#student-list").addEventListener("click", (e) =>{
//     target = e.target;
//     if(target.classList.contains("delete")){
//         target.parentElement.parentElement.remove();
//         showAlert("Student Data Deleted", "danger");
//     }
// });

