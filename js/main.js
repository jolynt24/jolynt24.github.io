var toggleSwitch = document.querySelector(".toggle-switch");

toggleSwitch.addEventListener("click", () => {
    document.body.classList.toggle('dark-theme');
    toggleSwitch.classList.toggle('active');
});