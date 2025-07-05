const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const edad = document.getElementById("edad");
const btnEnviar = document.getElementById("btn-enviar");
const form = document.getElementById("formulario");

const errores = {
  nombre: document.getElementById("error-nombre"),
  email: document.getElementById("error-email"),
  password: document.getElementById("error-password"),
  confirmPassword: document.getElementById("error-confirm-password"),
  edad: document.getElementById("error-edad"),
};

function validarNombre() {
  if (nombre.value.length >= 3) {
    setValido(nombre, errores.nombre);
    return true;
  } else {
    setInvalido(nombre, errores.nombre, "Debe tener al menos 3 caracteres");
    return false;
  }
}

function validarEmail() {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (regex.test(email.value)) {
    setValido(email, errores.email);
    return true;
  } else {
    setInvalido(email, errores.email, "Correo no válido");
    return false;
  }
}

function validarPassword() {
  const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])/;
  if (password.value.length >= 8 && regex.test(password.value)) {
    setValido(password, errores.password);
    return true;
  } else {
    setInvalido(password, errores.password, "Debe tener al menos 8 caracteres, un número y un carácter especial");
    return false;
  }
}

function validarConfirmPassword() {
  if (confirmPassword.value === password.value && confirmPassword.value !== "") {
    setValido(confirmPassword, errores.confirmPassword);
    return true;
  } else {
    setInvalido(confirmPassword, errores.confirmPassword, "Las contraseñas no coinciden");
    return false;
  }
}

function validarEdad() {
  const edadValor = parseInt(edad.value);
  if (!isNaN(edadValor) && edadValor >= 18) {
    setValido(edad, errores.edad);
    return true;
  } else {
    setInvalido(edad, errores.edad, "Debes ser mayor de 18");
    return false;
  }
}

function setValido(input, errorSpan) {
  input.classList.add("valido");
  input.classList.remove("invalido");
  errorSpan.textContent = "";
}

function setInvalido(input, errorSpan, mensaje) {
  input.classList.add("invalido");
  input.classList.remove("valido");
  errorSpan.textContent = mensaje;
}

function validarFormulario() {
  const validaciones = [
    validarNombre(),
    validarEmail(),
    validarPassword(),
    validarConfirmPassword(),
    validarEdad(),
  ];

  btnEnviar.disabled = !validaciones.every(Boolean);
}

// Eventos
[nombre, email, password, confirmPassword, edad].forEach((input) =>
  input.addEventListener("input", validarFormulario)
);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("¡Formulario enviado correctamente!");
  form.reset();
  btnEnviar.disabled = true;

  [nombre, email, password, confirmPassword, edad].forEach((input) => {
    input.classList.remove("valido", "invalido");
  });

  Object.values(errores).forEach((span) => (span.textContent = ""));
});
