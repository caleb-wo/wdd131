const MyButton = document.getElementsByTagName('button')[0];
const MyMenu = document.getElementsByTagName('ul')[0];

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

resizeEvent()
MyButton.addEventListener('click' , hideMenu);
window.addEventListener('resize' , resizeEvent);