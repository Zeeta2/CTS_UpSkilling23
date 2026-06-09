const output = document.getElementById("output");

const events = [
    { name: "Music Concert", category: "Music" },
    { name: "Baking Workshop", category: "Workshop" },
    { name: "Dance Show", category: "Music" }
];

function showEvent(eventName = "Community Event") {
    output.innerHTML += `<p>${eventName}</p>`;
}

const clonedEvents = [...events];

const musicEvents = clonedEvents.filter(
    event => event.category === "Music"
);

musicEvents.forEach(event => {
    const { name, category } = event;

    output.innerHTML += `<p>Name: ${name}</p>`;
    output.innerHTML += `<p>Category: ${category}</p>`;
});

showEvent();