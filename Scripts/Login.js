
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
//codigo para verificar datos introducidos

window.location.href = "/CreateNew.html";
  }
  // Here you should implement the logic to validate the user credentials against your backend (e.g., database or authentication service)
  // This is omitted for simplicity, you might use AJAX or Fetch API to communicate with the server
});