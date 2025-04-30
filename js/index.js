// Simplified version
document.addEventListener('DOMContentLoaded', () => {
  const themeButton = document.getElementById('theme-mode');
  if (!themeButton) {
    console.error('Theme button not found');
    return;
  }
  
  // Load saved preference
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

