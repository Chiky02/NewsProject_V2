
import { auth } from "./Connection.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js"
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js"; 

const formularioLogin = document.getElementById('formularioLogin');



formularioLogin.addEventListener('submit', (event) => {
  event.preventDefault();

  const correo = document.getElementById('correo').value;
  const contrasena = document.getElementById('contrasena').value;

  if (correo === '' || contrasena === '') {
    alert('Todos los campos son obligatorios.');
    return;
  }
  else {

    signInWithEmailAndPassword(auth, correo, contrasena)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user.uid;
        
        alert('¡Inicio de sesión exitoso!'); // Replace with appropriate success message or redirection
        // Redirect to a specific page after successful login (optional)

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });


  }
  // Here you should implement the logic to validate the user credentials against your backend (e.g., database or authentication service)
  // This is omitted for simplicity, you might use AJAX or Fetch API to communicate with the server
});