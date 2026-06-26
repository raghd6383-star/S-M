const envelope = document.querySelector(".envelope");
const opening = document.getElementById("opening");
const invitation = document.getElementById("invitation");

const storyText = document.getElementById("storyText");

const locationBtn = document.querySelector(".location-btn");
const rsvpBtn = document.querySelector(".rsvp-btn");

const music = document.getElementById("music");

/*=========================================
            STORY
=========================================*/

const story = [

    "Every love story begins with a single moment.",

    "A smile...",

    "A conversation...",

    "A promise...",

    "Two hearts.",

    "One forever.",

    "And now...",

    "Our forever begins."

];

let currentStory = 0;

/*=========================================
        OPEN ENVELOPE
=========================================*/

envelope.addEventListener("click", () => {

    envelope.classList.add("open");

    if (music) {

        music.volume = 0.35;

        music.play().catch(() => {});

    }

    setTimeout(() => {

        opening.style.display = "none";

        invitation.style.display = "block";

        invitation.classList.add("fade");

        startStory();

    }, 1800);

});

/*=========================================
          STORY ANIMATION
=========================================*/

function startStory() {

    if (currentStory >= story.length) {

        storyText.innerHTML = "";

        return;

    }

    storyText.classList.remove("show");

    void storyText.offsetWidth;

    storyText.innerHTML = story[currentStory];

    storyText.classList.add("show");

    setTimeout(() => {

        storyText.classList.remove("show");

    }, 2500);

    setTimeout(() => {

        currentStory++;

        startStory();

    }, 3500);

}

/*=========================================
          LOCATION BUTTON
=========================================*/

locationBtn.addEventListener("click", () => {

    window.open(

        "https://maps.google.com",

        "_blank"

    );

});

/*=========================================
          RSVP BUTTON
=========================================*/

rsvpBtn.addEventListener("click", () => {

    alert("Thank you! Please contact us to confirm your attendance. 🤍");

});
const weddingDate = new Date("November 21, 2026 19:00:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if (distance < 0) {

        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";

        return;

    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        /
        1000
    );

    document.getElementById("days").innerHTML = days;

    document.getElementById("hours").innerHTML = hours;

    document.getElementById("minutes").innerHTML = minutes;

    document.getElementById("seconds").innerHTML = seconds;

}

updateCountdown();

setInterval(updateCountdown,1000);

/*=========================================
            FALLING PETALS
=========================================*/

const petals = document.querySelector(".petals");

function createPetal(){

    const petal = document.createElement("div");

    petal.classList.add("petal");

    petal.style.left = Math.random()*100+"vw";

    petal.style.animationDuration =
        Math.random()*5+5+"s";

    petal.style.opacity =
        Math.random();

    petals.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },10000);

}

setInterval(createPetal,400);

/*=========================================
            HEART EFFECT
=========================================*/

const heart = document.querySelector(".names span");

setInterval(()=>{

    heart.animate(

        [

            {transform:"scale(1)"},

            {transform:"scale(1.3)"},

            {transform:"scale(1)"}

        ],

        {

            duration:800

        }

    );

},1800);

/*=========================================
            BUTTON HOVER
=========================================*/

document.querySelectorAll("button").forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform="translateY(-5px)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="translateY(0)";

    });

});
