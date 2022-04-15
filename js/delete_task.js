//this function triggers when user clicks the delete button on a particular task
function deleteTask(event) {
  const deleteButton = event.currentTarget;

  //capture the current task
  const currentTask = deleteButton.parentElement.parentElement;
  currentTask.remove();

  //if currentTask is currently running, then stop the interval
  if (currentTask.children[2].children[0].innerHTML === "Stop") {
    clearInterval(interval);
    interval = null;
  }
}
