console.log('It works')

$(document).ready(function () {
    $('.sendbutton').click(function (event) {
      console.log('Clicked button')

        const email = $('.email').val();
        const subject = $('.subject').val();
        const message = $('.message').val()
        const statusElm = $('.status');
        statusElm.empty()

        if(email.length >= 5 && email.includes('@') && email.includes('.')) {
            console.log("EMail is valid.")
        } else {
            event.preventDefault()
            statusElm.append('<div>Etwas stimmt mit deiner E-Mail-Adresse nicht! :(</div>')
        }

        if(subject.length >= 2) {
            console.log("Subject is valid")
        } else {
            event.preventDefault()
            statusElm.append('<div>Dein Betreff ist leider zu kurz :/</div>')
        }

        if(message.length >= 15) {
            console.log("Message is valid")
        } else {
            event.preventDefault()
            statusElm.append('<div>Deine Nachricht ist leider zu kurz :(</div>')
        }
    })
})