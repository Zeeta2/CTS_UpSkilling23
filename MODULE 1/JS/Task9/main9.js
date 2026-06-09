let events = [
    { name: "Music Concert" },
    { name: "Baking Workshop" },
    { name: "Art Exhibition" }
];

let loading = document.getElementById("loading");
let container = document.getElementById("events");

function fetchEvents() {
    loading.innerHTML = "Loading events...";

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(events);
        }, 2000);
    });
}

fetchEvents()
    .then(data => {
        loading.innerHTML = "";

        data.forEach(event => {
            container.innerHTML += `<p>${event.name}</p>`;
        });
    })
    .catch(error => {
        loading.innerHTML = "Failed to load events";
    });

async function loadEvents() {
    try {
        loading.innerHTML = "Loading events...";

        let data = await fetchEvents();

        loading.innerHTML = "";
        container.innerHTML = "";

        data.forEach(event => {
            container.innerHTML += `<p>${event.name}</p>`;
        });
    }
    catch (error) {
        loading.innerHTML = "Failed to load events";
    }
}

loadEvents();