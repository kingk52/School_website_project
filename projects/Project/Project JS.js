 //Original Function to calculate the difference between two dates. Not used in the final code but kept for reference, and to show our thought process.
function DateCalc()
{
    var date1 = document.getElementById("Sdate").value;
    var date2 = document.getElementById("Edate").value;

    var total = 0;
        total = date2 - date1;


    if(total < 0)
    {
        alert("Please enter a valid date");
    }
    else
    {
        alert(total + "is your total number of days");
    }
    
    if(total >= 5)
    {
        alert("You are eligible for a 20% discount");
    }
    
    return total;
}

function confirmSubmit(){
    return confirm("Are you sure you want to submit?");
}

function handleSelection()
{
    const selected = document.querySelector('input[name="dreamStatus"]:checked');
    const dreamerDiv = document.getElementById("Dreamer");
    const achievedDiv = document.getElementById("Achieved");

    if (selected?.value === "no") {
        dreamerDiv.classList.remove("hidden");
            achievedDiv.classList.add("hidden");
    } else if (selected?.value === "yes") {
            achievedDiv.classList.remove("hidden");
            dreamerDiv.classList.add("hidden");
    } else {
            dreamerDiv.classList.add("hidden");
            achievedDiv.classList.add("hidden");
        }

}

function FeeCalc()
{
    const selected = document.querySelector('input[name="dreamStatus"]:checked');
    let sum = 0;
    let startDate, endDate;

    if (selected?.value === "no") {
    // Dreamer selected
    alert("You are a Dreamer :D");

    // Get Dreamer dates
    startDate = new Date(document.getElementById("SdateDreamer").value);
    endDate = new Date(document.getElementById("EdateDreamer").value);
    //the cb is a callback function that loops through the checkboxes. I know we didn't learn this in class but I found it easier to use 
    const checkboxes = document.querySelectorAll("#Dreamer input[type='checkbox']:checked");
    checkboxes.forEach(cb => {
        sum += parseInt(cb.value);
    });

    } else if (selected?.value === "yes") {
        // Achiever selected
        alert("You are an Achiever :D");

        // Get Achieved dates
        startDate = new Date(document.getElementById("SdateAchieved").value);
        endDate = new Date(document.getElementById("EdateAchieved").value);

        const checkboxes = document.querySelectorAll("#Achieved input[type='checkbox']:checked");
        checkboxes.forEach(cb => {
        sum += parseInt(cb.value);
    });
    }

    const diffTime = endDate - startDate;
    const totalDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (isNaN(totalDays) || totalDays < 0) {
        alert("Please enter valid start and end dates.");
        return;
    }

    alert(`${totalDays} is your total number of days.`);

    if (totalDays >= 5) {
    alert("You are eligible for a 20% discount/Bonus.");
    sum *= 0.8;
    } 

    alert("Total pay: $" + sum);
}

// Slider functionality
// This code is for the slider functionality. It allows the user to navigate through different items in the slider using next and previous buttons.
//this took longer than I thought out 🫠.
const wrapper = document.querySelector(".wrapper");
const sliderItems = document.querySelectorAll(".slider-item");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let index = 0;
let itemSize = 100;
let duration = 1 * 1000 * 2; // 1s
let numberOfItem = sliderItems.length;

function moveSlider(i) {
  index += i;
  let pos = (index * itemSize) % (numberOfItem * itemSize);
  wrapper.style.transform = `translateX(-${pos}vw)`;
 
  clearInterval(myInterval);
  myInterval = setInterval(() => moveSlider(1), duration);
}

let myInterval = window.setInterval(() => moveSlider(1), duration)

prevBtn.addEventListener('click', () => moveSlider(-1))
nextBtn.addEventListener('click', () => moveSlider(1))

// I made the slider JS on an online compiler so I hadn't noticed the  many debugging errors.
// we tried with animations but I couldn't get it to work the way I wanted it to.