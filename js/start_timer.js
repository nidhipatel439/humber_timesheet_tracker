//this function get called when user clicks start/stop button of a particular task
//this function will start/stop the timer of the current task based on its existing status
function handleStart(event) {
  const timerButton = event.currentTarget;

  // check if user clicked on stop button, if so, return function here
  if (timerButton.innerHTML === "Stop") {
    timerButton.innerHTML = "Start";
    timerButton.classList.remove("btn-danger");
    timerButton.classList.add("btn-success");
    //clear all intervals
    clearInterval(interval);
    interval = null;
    return;
  }

  stopAllTasks();

  //select timer for the task
  const timer = timerButton.parentElement.previousElementSibling;
  // get seconds value from the HH:MM:SS format
  let currentTaskTime = hhmmssToSeconds(timer.innerHTML);

  //capture the total time hours, minutes and seconds
  let totalTime =
    timerButton.parentElement.parentElement.parentElement.nextElementSibling
      .firstElementChild.children[1];

  //start interval
  if (!interval) {
    //update the time every second
    interval = setInterval(function () {
      currentTaskTime++;
      timer.innerHTML = secondsToHHMMSS(currentTaskTime);
      calculateTotalTime(totalTime);
    }, 1000);

    //change the button text "Start" to "Stop"
    timerButton.innerHTML = "Stop";
    timerButton.classList.remove("btn-success");
    timerButton.classList.add("btn-danger");
  }
}

//this function calculate the total time of all tasks for the selected course
function calculateTotalTime(totalTimeElement) {
  // get all times for current course tasks

  // select current course
  const courseId = selectCurrentCourse();

  //capture current course tasks table
  const taskTable =
    document.getElementById(courseId).firstElementChild.children[1].children;
  let t = 0;
  //looping over all tasks to get their times and add them into t
  for (let i = 0; i < taskTable.length; i++) {
    t += hhmmssToSeconds(taskTable[i].children[1].innerHTML);
  }

  //convert total seconds to HH:MM:SS format and add it into html
  totalTimeElement.innerHTML = secondsToHHMMSS(t);
}

//this function stops all the tasks
function stopAllTasks() {
  //clear all intervals
  clearInterval(interval);
  interval = null;

  //capture the all timer button
  const allTimerButton = document.getElementsByClassName("timer-button");

  //change the all timer button text "Start"
  for (let i = 0; i < allTimerButton.length; i++) {
    allTimerButton[i].innerHTML = "Start";
    allTimerButton[i].classList.add("btn-success");
    allTimerButton[i].classList.remove("btn-danger");
  }
}
