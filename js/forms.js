
// ENVIO FORMULARIO DE CONTACTO

const enviarFormulario = (e) => {

  e.preventDefault()

  // const name = "nombre"
  // const phone = "2610000"
  // const email = "nombre@gmail.com"
  // const message = "Este es el mensaje"
  // const subscribe = "True"

  const name = document.getElementById("name").value
  const phone = document.getElementById("phone").value
  const email = document.getElementById("email").value
  const message = document.getElementById("message").value
  const subscribe = document.getElementById("suscribeNewsletter").checked

  let contacto = {
    contact: {
      name: `${name}`,
      phone: `${phone}`,
      email: `${email}`,
      message: `${message}`,
      subscribe: `${subscribe}`
    }
  }

  fetch("https://dulces-suspiritos-server.herokuapp.com/contact", {
    method: 'POST',
    body: JSON.stringify(contacto),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
}

contactForm.addEventListener("submit", enviarFormulario)
