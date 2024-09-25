const themeSelector = document.querySelector('select[name="theme"]');

function changeTheme() {
const logo = document.querySelector('img');

if (themeSelector.value === 'dark') {
    document.body.classList.add('dark');
    logo.src = 'byui-logo_dark.png'
} else {
    document.body.classList.remove('dark');
    logo.src = 'byui-logo_blue.webp'
}

}

// add an event listener to the themeSelector element here.
// Use the changeTheme function as the event handler function.
themeSelector.addEventListener('change', changeTheme);