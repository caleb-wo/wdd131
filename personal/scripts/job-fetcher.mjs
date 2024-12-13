import jobs from './jobs.mjs'
const main = () => {
    const getJob = (indexNum) => {
        const job = jobs[indexNum];
        return job;
    }
    const companyNameAdd = (object) => {
        const name = object.name;
        const injectHtml = `
        <h2 id="companyName">${name}</h2>`
        return injectHtml;
    }
    const jobInsert = (object) => {
        /* Initialize variables */
        const imgsrc = object.image;
        const ex1 = object.bulletedSummary[0];
        const ex2 = object.bulletedSummary[1];
        const ex3 = object.bulletedSummary[2];
        const ex4 = object.bulletedSummary[3];
        const ex5 = object.bulletedSummary[4];
        const jobTitle = object.position;
        const desc = object.description;

        const injectHtml = `
        <section id="imgNbullet">
            <img src="${imgsrc}"/>
            <ul>
                <li>${ex1}</li>
                <li>${ex2}</li>
                <li>${ex3}</li>
                <li>${ex4}</li>
                <li>${ex5}</li>
            </ul>
        </section>
        <div id="job-description">
            <h1>My Experience...</h1>
            <h2>${jobTitle}</h2>
            <p>${desc}</p>
        </div>`
        return injectHtml;
    }
    /* get job */
    const jobList = document.querySelector("#jobList");
    const jobId = jobList.value;
    const outputJob = getJob(jobId);

    /* create html */
    const h2Add = companyNameAdd(outputJob);
    const pageAdd = jobInsert(outputJob);

    /* insert html */
    const orgName = document.querySelector("#orgName");
    const addPage = document.querySelector("#addPage");
    orgName.innerHTML = h2Add;
    addPage.innerHTML = pageAdd;
}
/* default */
document.addEventListener("DOMContentLoaded" , main);
/* Function Call */
const jobSelect = document.querySelector("#jobList");
jobSelect.addEventListener("change" , main);


