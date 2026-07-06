const form = document.getElementById("form-registro");
const alertBox = document.getElementById("alert-error");
const alertList = document.getElementById("alert-list");
const alertClose = document.getElementById("alert-close");

function mostrarErrores(errores) {
  alertList.innerHTML = "";
  errores.forEach((msg) => {
    const li = document.createElement("li");
    li.textContent = msg;
    alertList.appendChild(li);
  });
  alertBox.hidden = false;
}

function ocultarErrores() {
  alertBox.hidden = true;
  alertList.innerHTML = "";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const usuario = document.getElementById("usuario").value.trim();
  const password = document.getElementById("password").value;
  const password2 = document.getElementById("password2").value;
  const email = document.getElementById("email").value.trim();
  const captcha = document.getElementById("captcha").checked;

  const errores = [];

  if (!captcha) {
    errores.push("Por favor verifica el captcha");
  }
  if (password !== password2) {
    errores.push("Las contraseñas no coinciden");
  }
  if (!nombre || !usuario || !password || !email) {
    errores.push("Todos los campos son obligatorios");
  }

  if (errores.length > 0) {
    mostrarErrores(errores);
    return;
  }

  ocultarErrores();
  alert("Registro exitoso. Ahora puedes iniciar sesión.");
  form.reset();
});

alertClose.addEventListener("click", ocultarErrores);
