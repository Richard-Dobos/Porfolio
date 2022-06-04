function sendEmail()
{
    Email.send({
        Host : "smtp.gmail.com",
        Username : "mastarious667@gmail.com",
        Password : "TG@ABaNx.bwavU%sqn#JEyczpDVGQKOgetFgW!E5",
        To : 'mastarious667@gmail.com',
        From : document.querySelector("#email").value,
        Subject : document.querySelector("#subject").value,
        Body : document.querySelector("#email-content").value
    }).then(
      message => alert(message)
    );
}