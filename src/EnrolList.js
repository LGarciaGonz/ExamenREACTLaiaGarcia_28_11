import "./EnrolList.css";
import { DetailsList } from "@fluentui/react/lib/DetailsList";
import { useState, useEffect, useCallback } from 'react';

function EnrolList () {

// Columns for the detail list.
const columns = [
  {
    key: "fname",
    name: "First Name",
    fieldName: "fname",
    minWidth: 90,
    maxWidth: 200,
    isResizable: true,
  },
  {
    key: "lname",
    name: "Last Name",
    fieldName: "lname",
    minWidth: 90,
    maxWidth: 200,
    isResizable: true,
  },
  {
    key: "program",
    name: "Program",
    fieldName: "program",
    minWidth: 60,
    maxWidth: 200,
    isResizable: true,
  },
  {
    key: "email",
    name: "Email",
    fieldName: "email",
    minWidth: 130,
    maxWidth: 200,
    isResizable: true,
  },
];

const users = [
  {nombre: 'nombre1'},
  {lastName: 'apellido1'},
  {program: 'UG'},
  {email: 'EMAIL@EMAIL1'}
]
const [usuarios, addUsuario] = useState([]);
const [value, setValue] = useState("");

// // Change items by elements introduces in other component
// const  items = [];
// for (let i = 1; i < 5; i++) {
//   items.push({
//     key: i,
//     fname: "FirstName " + i,
//     lname: "LastName " + i,
//     program: "UG",
//     email: "Email " + i,
//   });
// }

// function saveValue(event) {
//   setValue(event.target.value)
// }

function addList(){
  addUsuario([...usuarios, value])
}

// CAMPO NOMBRE *************
const [enteredNombre, setEnteredNombre] = useState('')
const [validateNombre, setValidateNombre] = useState(false)
const [alertaNombre, setAlertaNombre] = useState('');

 // Manejador para actualizar el valor del campo de NOMBRE
 function updateNombreHandler(event) {
  const enteredName = event.target.value
  setEnteredNombre(enteredName);
}


// CAMPO LAST NAME *******************************************
const [enteredLastName, setEnteredLastName] = useState('');
const [validateLastName, setValidateLastName] = useState(false);
const [alertLastName, setAlertLastName] = useState("");

// Manejador para actualizar el valor del campo de LAST NAME
function updateLastNameHandler(event) {
    const enteredLastName = event.target.value
    setEnteredLastName(enteredLastName);
}


 // CAMPO PROGRAM *******************************************
 const [enteredProgram, setEnteredProgram] = useState("UG");
 const [validateProgram, setValidateProgram] = useState(true);

 // Manejador para actualizar el valor del campo de PROGRAM
 function updateProgramHandler(event) {
     setEnteredProgram(event.target.value);
     console.log('PROGRAM ok!');
     setValidateProgram(true);
 }


 // CAMPO EMAIL *******************************************
 const [enteredEmail, setEnteredEmail] = useState('');
 const [validateEmail, setValidateEmail] = useState(false);
 const [alertaEmail, setAlertaEmail] = useState("");

 // Manejador para actualizar el valor del campo de correo electrónico
 function updateEmailHandler(event) {
     setEnteredEmail(event.target.value)
 }


  // Función que valida todos los campos del formulario
  const handleValidateAll = useCallback(() => {

    // LAST NAME --------------------------------------------------------------------------------------
    if (enteredLastName.length > 0 && enteredLastName.length <= 20) {
        console.log('apellidos ok!');
        setValidateLastName(true);
        setAlertLastName("");
    } else if (enteredLastName.length === 0) {
        setAlertLastName("El apellido no puede estar vacío.")
        setValidateLastName(false);
        console.log('apellidos vacío!');
    } else {
        setAlertLastName("El apellido no puede contener más de 20 caracteres.")
        setValidateLastName(false);
        console.log('apellidos +20 caracteres!');
    }

    // NOMBRE --------------------------------------------------------------------------------------
    if (enteredNombre.length > 0 && enteredNombre.length <= 10) {
        console.log('nombre ok!');
        setValidateNombre(true);
        setAlertaNombre("");
    } else if (enteredNombre.length > 10) {
        setAlertaNombre("El nombre no puede contener más de 10 caracteres.")
        setValidateNombre(false);
        console.log('nombre +10 caracteres!');
    } else if (enteredNombre.length === 0) {
        setAlertaNombre("El nombre no puede estar vacío.")
        setValidateNombre(false);
        console.log('nombre vacío!');
    }

    // EMAIL --------------------------------------------------------------------------------------
    if (enteredEmail.includes('@') && enteredEmail.length > 0 && enteredEmail.length <= 15) {
        console.log('mail ok!');
        setValidateEmail(true);
        setAlertaEmail("");
    } else if (enteredEmail.length === 0) {
        setAlertaEmail("El email no puede estar vacío.")
        setValidateEmail(false);
        console.log('mail vacío!');
    } else if (enteredEmail.length > 15) {
        setAlertaEmail("El email no puede contener más de 15 caracteres")
        setValidateEmail(false);
        console.log('mail +15 caracteres');
    } else {
        setAlertaEmail("El email debe contener un @.")
        setValidateEmail(false);
        console.log('mail sin @!');
    }
}, [enteredNombre, enteredLastName, enteredEmail, enteredProgram])

// Efecto para ejecutar la validación cada vez que se actualizan los campos del formulario
useEffect(
    function () {
        handleValidateAll()
    }, [handleValidateAll]
)

// Función para la comprobación de los datos y envío del formulario (mostrar mensaje)
function handleSubmit(e) {
  e.preventDefault();
  if (validateNombre === true && validateLastName === true && validateEmail === true && validateProgram === true) {
      console.log("Formulario enviado correctamente")
      
          // Limpiar los campos del formulario
          setEnteredNombre('');
          setEnteredLastName('');
          setEnteredEmail('');
          setEnteredProgram('');

          // Restablecer los estados de validación
          setValidateNombre(false);
          setValidateLastName(false);
          setValidateEmail(false);
          setValidateProgram(false);

          // Mostrar mensaje de éxito
          alert("FORMULARIO ENVIADO CORRECTAMENTE AL SERVIDOR")

      
  } else {
      console.log("el formulario no se ha enviado")
      alert("EL FORMULARIO NO SE HA PODIDO ENVIAR")
  }
}



  return (
    
    <form onSubmit={handleSubmit} className='form'>

        <div>
            <h1>Formulario</h1>
        </div>

        <div>
            <label>Nombre</label><span>   </span>
            <input type="text" onChange={updateNombreHandler}/>
            <p  className='error'>{alertaNombre}</p>
        </div>

        <br />

        <div>
            <label>Last Name</label><span>   </span>
            <input type="text" onChange={updateLastNameHandler} />
            <p  className='error'>{alertLastName}</p>
        </div>

        <br />

        <div>
            <label>Program</label><span>   </span>
            <select className='textarea' type="text" onChange={updateProgramHandler}>
                <option value="UG">UG</option>
                <option selected value="PG">PG</option>
            </select>
        </div>

        <br />
        
        <div>
            <label>Email</label><span>   </span>
            <input type="text" onChange={updateEmailHandler} />
            <p  className='error'>{alertaEmail}</p>
        </div>

      <br />
        <button type='submit' onClick={addList}>Enviar Formulario</button>

<br/><br/><br/>

        <div className="enrolList">
          <DetailsList items={usuarios} columns={columns} />
        </div>
    </form>
  
  );
};

export default EnrolList;