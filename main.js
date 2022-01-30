const registerForm = document.getElementById("register-form");
const contentContainer = document.querySelector(".container");

registerForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const userData = new FormData(registerForm);
    const userName = userData.get("firstName");
    const userEmail = userData.get("userEmail");
    contentContainer.innerHTML = `
        <h2>Congratulations, <span class="accent-text">${userName}</span></h2>
        <p class="accent-text">You're on your way to becoming a BBQ Master!</p>
        <p>You will get weekly BBQ tips sent to: ${userEmail}</p>
        <p class="small-text">We'll never share your information without your permission</p>
    `;
});
