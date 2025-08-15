// Utility to get a random color
function randomColor() {
    return `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
}

// Button Click Event
document.getElementById("bgBtn").addEventListener("click", () => {
    document.body.style.backgroundColor = randomColor();
});

// Mouse Events
const colorBox = document.getElementById("colorBox");
colorBox.addEventListener("mouseover", () => {
    colorBox.style.backgroundColor = "orange";
});
colorBox.addEventListener("mouseout", () => {
    colorBox.style.backgroundColor = "lightgray";
});

// Keyboard Events
const keyInput = document.getElementById("keyInput");
const keyDisplay = document.getElementById("keyDisplay");
keyInput.addEventListener("keyup", (event) => {
    keyDisplay.textContent = `You pressed: ${event.key}`;
});

// Form Submit Event
document.getElementById("infoForm").addEventListener("submit", (event) => {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    if (!name || !email) {
        alert("Both name and email are required!");
        event.preventDefault();
    }
});

// Focus & Blur Events
const focusField = document.getElementById("focusField");
focusField.addEventListener("focus", () => {
    focusField.style.borderColor = "blue";
});
focusField.addEventListener("blur", () => {
    focusField.style.borderColor = "";
});

// Change Event
const fruitSelect = document.getElementById("fruitSelect");
const fruitDisplay = document.getElementById("fruitDisplay");
fruitSelect.addEventListener("change", () => {
    fruitDisplay.textContent = fruitSelect.value ? `You selected: ${fruitSelect.value}` : "";
});

// Double Click Event
const toggleImage = document.getElementById("toggleImage");
let imgToggle = true;
toggleImage.addEventListener("dblclick", () => {
    toggleImage.src = imgToggle 
        ? "https://via.placeholder.com/150?text=Image+2" 
        : "https://via.placeholder.com/150?text=Image+1";
    imgToggle = !imgToggle;
});

// Right Click Event
const noRightClick = document.getElementById("noRightClick");
noRightClick.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    alert("Right Click Is Disabled");
});
