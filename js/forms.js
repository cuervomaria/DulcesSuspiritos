
// ENVIO FORMULARIO DE CONTACTO

const enviarFormulario = (e) => {

  e.preventDefault()

  const form = document.getElementById("contactForm")
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
    alert("Muchas gracias!")
    form.reset()


}

contactForm.addEventListener("submit", enviarFormulario)
