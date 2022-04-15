//this application extensively uses time component and to update time in UI we use setInterval function
//to make sure we only use one setInterval function at any given time, we assign the setInterval function to this global variable called "interval"
//to reset/restart a setInterval in the js logic, we first need to clearInterval and assign null to "interval"
let interval;

// add handleStart function to existing tasks
const allTaskButtons = document.getElementsByClassName("timer-button");
for (let i = 0; i < allTaskButtons.length; i++) {
  allTaskButtons[i].addEventListener("click", handleStart);
}

//add deleteTask function to existing task
const deleteButtons = document.getElementsByClassName("delete-button");
for (let i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].addEventListener("click", deleteTask);
}
