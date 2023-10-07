let baseUrl = window.location.href;

$("#sendEmail").submit(async (e) => {
    // prevent default behavior (the loading of a new page)
    e.preventDefault()
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value
    
    let url = baseUrl + 'send';

    fetch(url, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ "name": name, "email": email, "subject": subject, "message": message })
    }).then(
        function (res) {
            // console.log('res', res)
            return res
        }
    ).then(
        function (data) {
            console.log("Success!")
            button = document.getElementById('email-btn')
            button.innerHTML = "sent! i will respond soon!"
            setInterval(()=> {
                button.innerHTML = 'send'
            }, 2000)
        }
    )
})