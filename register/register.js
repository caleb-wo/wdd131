// Get the "Add Participant" button by ID
const addParticipant = document.getElementById("add");

// Get the container where new participants will be added
const participants = document.querySelector(".participants");

// Initialize the participant count based on existing sections
let participantCount = 1;

// Function to add a new participant form
const participantForm = () => {
    participantCount += 1; // Increment count

    // Create a new participant form section
    const newPerson = `
        <section class="participant${participantCount}">
          <p>Participant ${participantCount}</p>
          <div class="item">
            <label for="fname${participantCount}"> First Name<span>*</span></label>
            <input id="fname${participantCount}" type="text" name="fname" required />
          </div>
          <div class="item activities">
            <label for="activity${participantCount}">Activity #<span>*</span></label>
            <input id="activity${participantCount}" type="text" name="activity" />
          </div>
          <div class="item">
            <label for="fee${participantCount}">Fee ($)<span>*</span></label>
            <input id="fee${participantCount}" type="number" name="fee" />
          </div>
          <div class="item">
            <label for="date${participantCount}">Desired Date <span>*</span></label>
            <input id="date${participantCount}" type="date" name="date" />
          </div>
          <div class="item">
            <p>Grade</p>
            <select>
              <option value="" disabled selected></option>
              <option value="1">1st</option>
              <option value="2">2nd</option>
              <option value="3">3rd</option>
              <option value="4">4th</option>
              <option value="5">5th</option>
              <option value="6">6th</option>
              <option value="7">7th</option>
              <option value="8">8th</option>
              <option value="9">9th</option>
              <option value="10">10th</option>
              <option value="11">11th</option>
              <option value="12">12th</option>
            </select>
          </div>
        </section>
    `;

    // Append the new participant form section to participants fieldset
    if (participants) {
        addParticipant.insertAdjacentHTML("beforebegin", newPerson);
    } else {
        console.error("Participants container not found.");
    }
};

// Attach event listener to add new participant on button click
if (addParticipant) {
    addParticipant.addEventListener("click", participantForm);
} else {
    console.error("Add Participant button not found.");
}

const submit = document.getElementById("submitButton");

function totalFees() {
// the selector below lets us grab any element that has an id that begins with "fee"
let feeElements = document.querySelectorAll("[id^=fee]");
    console.log(feeElements);
// querySelectorAll returns a NodeList. It's like an Array, but not exactly the same.
// The line below is an easy way to convert something that is list-like to an actual Array so we can use all of the helpful Array methods...like reduce
// The "..." is called the spread operator. It "spreads" apart the list, then the [] we wrapped it in inserts those list items into a new Array.
    feeElements = [...feeElements];
// sum up all of the fees. Something like Array.reduce() could be very helpful here :) Or you could use a Array.forEach() as well.
    // Remember that the text that was entered into the input element will be found in the .value of the element.
    const sum = feeElements.reduce((accumulator , currentValue) => accumulator + currrentValue , 0);
    // once you have your total make sure to return it!
    return sum

}

submit.addEventListener("submit" , submitForm)

function totalFees() {
  // the selector below lets us grab any element that has an id that begins with "fee"
  let feeElements = document.querySelectorAll("[id^=fee]");
  console.log(feeElements);
  // querySelectorAll returns a NodeList. It's like an Array, but not exactly the same.
  // The line below is an easy way to convert something that is list-like to an actual Array so we can use all of the helpful Array methods...like reduce
  // The "..." is called the spread operator. It "spreads" apart the list, then the [] we wrapped it in inserts those list items into a new Array.
  feeElements = [...feeElements];
  // sum up all of the fees. Something like Array.reduce() could be very helpful here :) Or you could use a Array.forEach() as well.
  // Remember that the text that was entered into the input element will be found in the .value of the element.
  total = feeElements.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  // once you have your total make sure to return it!
  } return total
function submitForm(event) {
 event.preventDefault();
    // do the rest of the stuff
    const total = totalFees()
    alert("You owe: $" + total);
}
