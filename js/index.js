document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded'); // Debug

    console.log('Attempting to find theme button...');
    const themeButtonTest = document.getElementById('theme-mode');
    console.log('Theme button found?', themeButtonTest ? 'Yes' : 'No');

    if (themeButtonTest) {
        console.log('Button position:', {
            top: themeButtonTest.getBoundingClientRect().top,
            right: themeButtonTest.getBoundingClientRect().right
        });
        console.log('Button style:', {
            display: window.getComputedStyle(themeButtonTest).display,
            visibility: window.getComputedStyle(themeButtonTest).visibility,
            opacity: window.getComputedStyle(themeButtonTest).opacity,
            zIndex: window.getComputedStyle(themeButtonTest).zIndex
        });
    }
    
    const themeButton = document.getElementById('theme-mode');
    if (!themeButton) {
        console.error('Theme button not found');
        return;
    }
    
    console.log('Theme button found');
    
    // Clean up any double initialization
    const existingButtons = document.querySelectorAll('#theme-mode');
    if (existingButtons.length > 1) {
        console.warn('Multiple theme buttons found, cleaning up duplicates');
        for (let i = 1; i < existingButtons.length; i++) {
            existingButtons[i].remove();
        }
    }

    // Load saved preference on page load
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
    }
});

// Remove duplicate theme button click handler
document.addEventListener('click', (e) => {
  if (e.target.closest('#theme-mode')) {
    toggleTheme();
  }
});

// Add localStorage to remember user's theme preference
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');
  localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
  
  // Update Notion icon if needed
  const imgNotion = document.getElementById("notion");
  if (imgNotion) {
    imgNotion.src = document.body.classList.contains('dark-mode')
      ? 'https://img.icons8.com/?size=100&id=uVERmCBZZACL&format=png&color=ffffff'
      : 'https://img.icons8.com/?size=100&id=uVERmCBZZACL&format=png&color=000000';
  }
}

