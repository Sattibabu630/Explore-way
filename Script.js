// DESTINATION DATA

const places = {

    surat: {

        name: "Surat",

        location: "Gujarat, India",

        image: "images/surat.jpg",

        description:
        "Surat is a famous city in Gujarat known for its food, textile industry, beaches and historical places.",

        famous: [
            "Dumas Beach",
            "Surat Castle",
            "Sneh Rashmi Botanical Garden",
            "Dutch Garden"
        ],

        food: [
            "Locho",
            "Surati Ghari",
            "Sev Khamani",
            "Surti Undhiyu"
        ],

        hidden: [
            "Dutch Cemetery",
            "English Cemetery",
            "Suryodaya Ghat"
        ],

        things: [
            "Visit Dumas Beach",
            "Explore Surat Castle",
            "Visit botanical gardens",
            "Try local Surati food"
        ],

        bestTime:
        "October to February",

        photos: [

            {
                name: "Dumas Beach",
                image: "images/dumas.jpg"
            },

            {
                name: "Surat Castle",
                image: "images/suratcastle.jpg"
            }

        ]

    },


    vizag: {

        name: "Visakhapatnam",

        location: "Andhra Pradesh, India",

        image: "images/vizag.jpg",

        description:
        "Visakhapatnam, popularly called Vizag, is a beautiful coastal city known for beaches, hills, museums and scenic views.",

        famous: [
            "Kailasagiri",
            "Ramakrishna Beach",
            "INS Kursura Submarine Museum",
            "Rushikonda Beach",
            "Simhachalam Temple"
        ],

        food: [
            "Andhra Meals",
            "Pesarattu",
            "Pulihora",
            "Seafood"
        ],

        hidden: [
            "Bheemili Beach",
            "Dolphin's Nose",
            "Panchadarla"
        ],

        things: [
            "Visit the beaches",
            "Explore Kailasagiri",
            "Visit Submarine Museum",
            "Enjoy coastal views",
            "Try Andhra food"
        ],

        bestTime:
        "October to March",

        photos: [

            {
                name: "Kailasagiri",
                image: "images/kailasagiri.jpg"
            },

            {
                name: "Vizag Beach",
                image: "images/beach.jpg"
            }

        ]

    },


    vadodara: {

        name: "Vadodara",

        location: "Gujarat, India",

        image: "images/vadodara.jpg",

        description:
        "Vadodara is a cultural city in Gujarat famous for royal heritage, museums, gardens and Gujarati food.",

        famous: [
            "Laxmi Vilas Palace",
            "Sayaji Baug",
            "Baroda Museum",
            "Kirti Mandir"
        ],

        food: [
            "Sev Usal",
            "Gujarati Thali",
            "Fafda Jalebi",
            "Khaman"
        ],

        hidden: [
            "Sursagar Lake",
            "EME Temple",
            "Kirti Mandir"
        ],

        things: [
            "Visit Laxmi Vilas Palace",
            "Explore Sayaji Baug",
            "Visit museums",
            "Try Gujarati food"
        ],

        bestTime:
        "October to February",

        photos: [

            {
                name: "Laxmi Vilas Palace",
                image: "images/palace.jpg"
            },

            {
                name: "Vadodara",
                image: "images/vadodara.jpg"
            }

        ]

    }

};


// SHOW DESTINATION

function showPlace(placeName) {

    const place = places[placeName];

    if (!place) {
        return;
    }


    const details =
    document.getElementById("placeDetails");


    details.innerHTML = `

        <div class="place-main">

            <img
                class="place-main-image"
                src="${place.image}"
                alt="${place.name}"
            >


            <div class="place-content">

                <h1>🌍 ${place.name}</h1>

                <p>
                    📍 ${place.location}
                </p>


                <p class="description">
                    ${place.description}
                </p>


                <div class="info-grid">


                    <div class="info-box">

                        <h3>⭐ Famous Places</h3>

                        <ul>

                            ${place.famous
                            .map(item =>
                                `<li>${item}</li>`)
                            .join("")}

                        </ul>

                    </div>


                    <div class="info-box">

                        <h3>🍴 Famous Food</h3>

                        <ul>

                            ${place.food
                            .map(item =>
                                `<li>${item}</li>`)
                            .join("")}

                        </ul>

                    </div>


                    <div class="info-box">

                        <h3>💎 Hidden Gems</h3>

                        <ul>

                            ${place.hidden
                            .map(item =>
                                `<li>${item}</li>`)
                            .join("")}

                        </ul>

                    </div>


                    <div class="info-box">

                        <h3>🎯 Things To Do</h3>

                        <ul>

                            ${place.things
                            .map(item =>
                                `<li>${item}</li>`)
                            .join("")}

                        </ul>

                    </div>


                    <div class="info-box">

                        <h3>📅 Best Time</h3>

                        <p>
                            ${place.bestTime}
                        </p>

                    </div>

                </div>


                <div class="photo-section">

                    <h2>📸 Places To Explore</h2>

                    <div class="photo-grid">

                        ${place.photos.map(photo => `

                            <div class="photo-card">

                                <img
                                    src="${photo.image}"
                                    alt="${photo.name}"
                                >

                                <h3>
                                    ${photo.name}
                                </h3>

                            </div>

                        `).join("")}

                    </div>

                </div>


            </div>

        </div>

    `;


    // Scroll to result

    document.getElementById("result")
    .scrollIntoView({
        behavior: "smooth"
    });

}


// SEARCH FUNCTION

function searchPlace() {

    const input =
    document.getElementById("searchInput")
    .value
    .toLowerCase()
    .trim();


    const message =
    document.getElementById("message");


    if (input === "") {

        message.innerText =
        "Please enter a city name.";

        return;
    }


    if (
        input.includes("surat")
    ) {

        showPlace("surat");

        message.innerText = "";

    }

    else if (
        input.includes("vizag") ||
        input.includes("visakhapatnam")
    ) {

        showPlace("vizag");

        message.innerText = "";

    }

    else if (
        input.includes("vadodara") ||
        input.includes("baroda")
    ) {

        showPlace("vadodara");

        message.innerText = "";

    }

    else {

        message.innerText =
        "Sorry! Destination not found.";

    }

}
