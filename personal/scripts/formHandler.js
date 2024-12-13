const nameSub = document.getElementById("GrabName");
const emailSub = document.getElementById("GrabEmail");
const companySub = document.getElementById("GrabCompany");
const descSub = document.getElementById("GrabDesc");
/* MAIN submission function */
document.querySelector("#formSubmit").addEventListener("click" , (event) => {
    event.preventDefault();
    /* GET data */
    const usrName = nameSub.value;
    const usrEmail = emailSub.value;
    const usrCompany = companySub.value;
    const usrDesc = descSub.value;
    /* CREATE object */
    const data = {
        name: usrName,
        email: usrEmail,
        company: usrCompany,
        description: usrDesc
    }
    /* 
    HERE I'll send the data to an S3 bucket containing a JSON doc.
    */
   /* CHECK object creation. */
   console.log(data);
   /* CLEAR form */
   const references = document.querySelector("#references");
   references.reset();
   alert("Thank you! You can expect to receive the contact information for my past employers within the next 1-2 days =).");
});