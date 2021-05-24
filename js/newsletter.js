//ENVIO EMAIL PARA NEWSLETTER

const newsletterForm = document.getElementById("newsletter")

const enviarEmail = (e) => {

  e.preventDefault()

  let newsletterEmail = document.getElementById("contactEmail").value
  let newsletter = { email: `${newsletterEmail}` }

   fetch("https://dulces-suspiritos-server.herokuapp.com/newsletter", {
  //fetch("http://localhost:3000/newsletter", {
    method: 'POST',
    body: JSON.stringify({newsletter}),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
    alert("Muchas gracias!")
    newsletterForm.reset()
}

newsletterForm.addEventListener("submit", enviarEmail)