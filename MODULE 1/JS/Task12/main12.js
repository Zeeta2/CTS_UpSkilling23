let btn = document.getElementById("register");
let message = document.getElementById("message");

btn.onclick = function () {

    message.innerHTML = "Submitting...";

    setTimeout(() => {

        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "John",
                event: "Music Concert"
            })
        })
        .then(response => response.json())
        .then(data => {
            message.innerHTML = "Registration Successful";
        })
        .catch(error => {
            message.innerHTML = "Registration Failed";
        });

    }, 2000);
};