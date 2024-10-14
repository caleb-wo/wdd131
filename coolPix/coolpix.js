const MyButton = document.getElementsByTagName('button')[0];
const MyMenu = document.getElementsByTagName('ul')[0];
const MyImages = document.querySelectorAll('img');  // Select all images
let viewerElement = null;  // To keep track of the viewer div

function viewerToggle(event) {
    const imageSrc = event.target.src;  // Get the src of the clicked image
    
    // Check if the viewer already exists
    if (!viewerElement) {
        // Create the viewer div and add it to the top of the document
        viewerElement = document.createElement('div');
        viewerElement.className = 'viewer';
        viewerElement.innerHTML = `
            <button class="close-viewer">X</button>
            <img src="${imageSrc}" alt="Larger Image">
        `;

        // Append the viewer to the body
        document.body.prepend(viewerElement);

        // Add event listener to the close button to remove the viewer
        const closeButton = viewerElement.querySelector('.close-viewer');
        closeButton.addEventListener('click', viewerToggle);  // Use viewerToggle to close it
    } else {
        // If the viewer exists, remove it and reset the reference
        viewerElement.remove();
        viewerElement = null;
    }
}

function hideMenu() {
    MyMenu.classList.toggle('hide');
}

function resizeEvent() {
    if (window.innerWidth > 1000) {
        MyMenu.classList.remove('hide');
    } else {
        MyMenu.classList.add('hide');
    }
}

resizeEvent();
MyButton.addEventListener('click', hideMenu);

// Add event listener to all images to trigger the viewerToggle function when clicked
MyImages.forEach(image => {
    image.addEventListener('click', viewerToggle);
});