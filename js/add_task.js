//this function triggers when user add the new task
function addTask() {
  // capture task name from input
  const inputValue = document.getElementById("add-task").value;

  //add input validation code
  if (inputValue === "") {
    return;
  }

  //get the current course id
  const courseId = selectCurrentCourse();

  //capture current course tasks table
  const taskTable =
    document.getElementById(courseId).firstElementChild.children[1];

  // add task in the table
  //create table row
  const newRow = document.createElement("tr");
  //create first table column
  const firstColumn = document.createElement("td");
  //create second table column
  const secondColumn = document.createElement("td");
  //create third table column
  const thirdColumn = document.createElement("td");

  //create a text node
  const node = document.createTextNode(inputValue);

  //create a start button
  const startButton = document.createElement("button");
  startButton.classList.add("btn", "btn-success", "timer-button");
  startButton.innerHTML = "Start";
  startButton.addEventListener("click", handleStart);

  //create a delete button
  const deleteButton = document.createElement("button");
  deleteButton.classList.add(
    "btn",
    "btn-outline-danger",
    "delete-button",
    "ms-2"
  );
  deleteButton.innerHTML = "Delete";
  deleteButton.addEventListener("click", deleteTask);

  //insert row into table
  taskTable.appendChild(newRow);

  //insert three column into table row
  newRow.appendChild(firstColumn);
  newRow.appendChild(secondColumn);
  newRow.appendChild(thirdColumn);

  //insert class name into third column
  thirdColumn.classList.add("d-flex");

  // insert text node into first column
  firstColumn.appendChild(node);

  //insert time into second column
  secondColumn.innerHTML = "00:00:00";

  //insert start button into third column
  thirdColumn.appendChild(startButton);

  //insert delete button into third column
  thirdColumn.appendChild(deleteButton);

  // remove text from input
  document.getElementById("add-task").value = "";
}

//this function returns the current course id
const selectCurrentCourse = () => {
  //check which course is selected in dropdown
  const selectedCourse = document.getElementById("course");
  //select the right id for the table
  let courseId;
  switch (selectedCourse.selectedIndex) {
    case 0:
      courseId = "course1";
      break;
    case 1:
      courseId = "course2";
      break;
    case 2:
      courseId = "course3";
      break;
  }
  return courseId;
};
