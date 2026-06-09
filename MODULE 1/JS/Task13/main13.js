let form = document.getElementById("regForm");
let message = document.getElementById("message");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    console.log("Form Submitted");

    let name = document.getElementById("name").value;

    console.log("Name:", name);

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name
        })
    })
    .then(response => {
        console.log("Response Received");
        return response.json();
    })
    .then(data => {
        console.log("Payload:", data);
        message.innerHTML = "Registration Successful";
    })
    .catch(error => {
        console.log("Error:", error);
        message.innerHTML = "Registration Failed";
    });

});