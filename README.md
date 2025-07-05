#  Formulario con Validación Dinámica en JavaScript

Este proyecto corresponde a la **Semana 6** del curso. Consiste en el diseño y validación de un formulario web utilizando **HTML**, **CSS** y **JavaScript**, aplicando validaciones en tiempo real para mejorar la experiencia del usuario.

#Objetivo
Desarrollar un formulario interactivo que valide dinámicamente los campos requeridos antes de permitir el envío, utilizando JavaScript puro y buenas prácticas de diseño.

---

##  Archivos del proyecto

- `index.html` → Estructura del formulario.
- `styles.css` → Estilos visuales del formulario (colores, bordes, etc.).
- `script.js` → Lógica de validación en tiempo real.

---

##  Requisitos del formulario

| Campo               | Validación                                                                 |
|--------------------|----------------------------------------------------------------------------|
| **Nombre**          | Mínimo 3 caracteres.                                                       |
| **Correo electrónico** | Formato válido (`usuario@dominio.com`).                                |
| **Contraseña**      | Mínimo 8 caracteres, al menos un número y un carácter especial.            |
| **Confirmar contraseña** | Debe coincidir con la contraseña.                                    |
| **Edad**            | Debe ser mayor o igual a 18 años.                                          |

---

##  Validaciones dinámicas
- Se realiza validación *en tiempo real* mientras el usuario escribe.
- Se muestran mensajes de error personalizados junto a cada campo.
- El botón **Enviar** permanece deshabilitado hasta que todos los campos estén correctamente completados.

---

## Estilo visual
- Campos válidos resaltados en **verde**.
- Campos inválidos resaltados en **r
