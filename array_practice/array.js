// //  arrays.js
// const steps = ["one", "two", "three"];
// const listTemplate(step) {
//   return '<li>${step}</li>'; //the html string made from step
// }
// const stepsHtml = steps.map(listTemplate); // use map to convert the list from strings to HTML
// document.querySelector("#myList").innerHTML = stepsHtml.join(); // set the innerHTML

let gradeList = ['A' , 'B' , 'C']
const grade = (letter) => {
    let gpa;

    if (letter == 'A') {
        gpa = 4;
    } else if (letter == 'B') {
        gpa = 3;
    } else if (letter == 'C') {
        gpa = 2;
    } else {
        console.log('ERROR');
        return;
    }

    console.log(gpa);
    return gpa
}
const gpaList = gradeList.map(grade);
console.log(gpaList);

let gradeList2 = ['A' , 'B' , 'A']
