const toggleSwitch = document.querySelector('#mode-toggle');
const sunIcon = document.querySelector('#sun-icon');
const moonIcon = document.querySelector('#moon-icon');
const body = document.querySelector('body');

// Function to set the theme based on the toggle state
function setTheme(isDarkMode) {
    if (isDarkMode) {
        body.classList.add('dark-mode');
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline-block';
    } else {
        body.classList.remove('dark-mode');
        sunIcon.style.display = 'inline-block';
        moonIcon.style.display = 'none';
    }
}

// Function to toggle the theme
function toggleTheme() {
    const isDarkMode = toggleSwitch.checked;
    localStorage.setItem('darkMode', isDarkMode);
    setTheme(isDarkMode);
}

// Event listener for the toggle switch
toggleSwitch.addEventListener('change', toggleTheme);

// Check the user's preference in local storage
const currentTheme = localStorage.getItem('darkMode');
if (currentTheme) {
    toggleSwitch.checked = currentTheme === 'true';
    setTheme(toggleSwitch.checked);
}
