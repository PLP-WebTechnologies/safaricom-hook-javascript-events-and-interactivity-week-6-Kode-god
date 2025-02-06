
// Toggling the background color
const toggleBtn = document.getElementById("toggle-bg-btn");
let isBlue = false;

toggleBtn.addEventListener("click", () => {
    document.body.style.backgroundColor = isBlue ? "white" : "lightblue";
    isBlue = !isBlue;
});

//  Adjusting the text size with slider
const textParagraph = document.getElementById("text-paragraph");
const textSlider = document.getElementById("text-slider");

textSlider.addEventListener("input", () => {
    textParagraph.style.fontSize = `${textSlider.value}px`;
});

//   Implementing modal
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("open-modal-btn");
const closeModalBtn = document.querySelector(".close-btn");

openModalBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

//  Form Validation
const form = document.getElementById("user-form");

form.addEventListener("submit", (event) => {
    let valid = true;

    // Validating name
    const nameInput = document.getElementById("name");
    const nameError = document.getElementById("name-error");
    if (nameInput.value.length < 3) {
        nameError.textContent = "Name must be at least 3 characters.";
        valid = false;
    } else {
        nameError.textContent = "";
    }

    // Validating email
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("email-error");
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = "Enter a valid email.";
        valid = false;
    } else {
        emailError.textContent = "";
    }

    // Validating password
    const passwordInput = document.getElementById("password");
    const passwordError = document.getElementById("password-error");
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordPattern.test(passwordInput.value)) {
        passwordError.textContent = "Password must be at least 8 characters with 1 uppercase letter & 1 number.";
        valid = false;
    } else {
        passwordError.textContent = "";
    }

    if (!valid) {
        event.preventDefault(); // prevents submission of the form
    }
});

//  Dropdown menu display change message
const dropdown = document.getElementById("dropdown");
const dropdownMessage = document.getElementById("dropdown-message");

dropdown.addEventListener("change", () => {
    if (dropdown.value) {
        dropdownMessage.textContent = `You selected: ${dropdown.options[dropdown.selectedIndex].text}`;
    } else {
        dropdownMessage.textContent = "";
    }
});
