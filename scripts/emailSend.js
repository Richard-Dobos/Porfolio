const firstName = document.querySelector("#firstName")
const lastName = document.querySelector("#lastName")
const email = document.querySelector("#email")
const subject = document.querySelector("#subject")
const emailContent = document.querySelector("#email-content")

const submitBtn = document.querySelector("#submit")

submitBtn.addEventListener("click", verification)

function verification(event)
{
  event.preventDefault()

  const name = `${lastName.value}, ${firstName.value}`

  if(email.value.includes("@") && email.value.includes("gmail.") && email.value.length > 6)
  {
    sendEmail(name, email.value, emailContent.value, subject.value, "gmail")
    resetValue()
  }

  else
  {
    sendEmail(name, email.value, emailContent.value, subject.value, "")
    resetValue()
  }
}

function resetValue()
{
  firstName.value = ""
  lastName.value = ""
  email.value = ""
  subject.value = ""
  emailContent.value = ""
}

function sendEmail(name, email, msg, subject, service)
{
  if(service == "gmail")
  {
    emailjs.send("service_jtc21fo", "template_93f705e", {
      from_name: name,
      from_email: email,
      subject: subject,
      message: msg
    })
  }

  else if(service == "outlook")
  {
    emailjs.send("service_9kvzrdt", "template_93f705e", {
      from_name: name,
      from_email: email,
      subject: subject,
      message: msg
    })
  }

  else
  {
    emailjs.send("service_9kvzrdt", "template_93f705e", {
      from_name: name,
      from_email: email,
      subject: subject,
      message: msg
    })
  }
}


(function() {
  emailjs.init("mnnShuJ3A5Tq6dWcu");
})();