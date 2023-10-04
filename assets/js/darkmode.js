// Check for user's dark mode preference in local storage
const darkMode = localStorage.getItem('darkMode') === 'enabled';

// Apply dark mode if enabled
if (darkMode) {
    document.body.classList.add('dark-mode');
}

// Toggle between dark and light modes
document.getElementById('darkModeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Save the user's preference to local storage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});
