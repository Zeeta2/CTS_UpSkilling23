let events = [
    { name: "Music Concert", category: "Music", seats: 20 },
    { name: "Baking Workshop", category: "Workshop", seats: 15 }
];

let container = document.getElementById("events");

function displayEvents(list) {
    container.innerHTML = "";

    list.forEach(event => {
        let card = document.createElement("div");

        let title = document.createElement("h3");
        title.textContent = event.name;

        let seat = document.createElement("p");
        seat.textContent = "Seats: " + event.seats;

        let btn = document.createElement("button");
        btn.textContent = "Register";

        btn.onclick = function () {
            if (event.seats > 0) {
                event.seats--;
                seat.textContent = "Seats: " + event.seats;
            }
        };

        card.appendChild(title);
        card.appendChild(seat);
        card.appendChild(btn);

        container.appendChild(card);
    });
}

displayEvents(events);

document.getElementById("category").onchange = function () {
    let value = this.value;

    if (value === "All") {
        displayEvents(events);
    } else {
        displayEvents(events.filter(e => e.category === value));
    }
};

document.getElementById("search").onkeydown = function () {
    let text = this.value.toLowerCase();

    let result = events.filter(e =>
        e.name.toLowerCase().includes(text)
    );

    displayEvents(result);
};