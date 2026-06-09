let form = document.getElementById("regForm");
let error = document.getElementById("error");
let success = document.getElementById("success");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = form.elements["name"].value;
    let email = form.elements["email"].value;
    let selectedEvent = form.elements["event"].value;

    error.innerHTML = "";
    success.innerHTML = "";

    if (name === "" || email === "" || selectedEvent === "") {
        error.innerHTML = "All fields are required";
        return;
    }

    success.innerHTML =
        `Registration Successful for ${selectedEvent}`;
});