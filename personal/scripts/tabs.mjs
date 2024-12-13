/* INITIALIZE tabs */
const initTabs = () => {
    const mainPage = document.getElementById("mainPage");
    const eduPage = document.getElementById("educationPage");
    const jobsPage = document.getElementById("jobsPage");
    /* BIND tabs to containers */
    mainPage.addEventListener("click" , clickHandle.bind(this , "main"));
    jobsPage.addEventListener("click" , clickHandle.bind(this , "page2"));
    eduPage.addEventListener("click" , clickHandle.bind(this , "page3"));

}
/* HIDE all pages and reveal main page. */
const clickHandle = (name) => {
    /* GET page divs */
    const mainPage = document.getElementById("pageOne");
    const jobsPage = document.getElementById("pageTwo");
    const eduPage = document.getElementById("pageThree");
    /* HIDE pages */
    mainPage.style.display = "none";
    eduPage.style.display = "none";
    jobsPage.style.display = "none";
    /* REVEAL selected page */
    if (name === "main") {
        mainPage.style.display = "block"
    } else if (name === "page2") {
        jobsPage.style.display = "block"
    } else {
        eduPage.style.display = "block"
    }
}
/* Set tabs */
initTabs();