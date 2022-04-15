//this function triggers when user toggle between different courses and shows corresponding tasks of the selected course
function switchTable() {
  // stop the current interval
  stopAllTasks();

  //capture the course select box
  const course = document.getElementById("course");

  //capture option value from the select box
  let courseOption = course.options[course.selectedIndex].value;

  //capture all course
  const course1 = document.getElementById("course1");
  const course2 = document.getElementById("course2");
  const course3 = document.getElementById("course3");

  //check the course name
  if (courseOption === "course1") {
    course1.classList.remove("d-none");
    course3.classList.add("d-none");
    course2.classList.add("d-none");
  } else if (courseOption === "course2") {
    course2.classList.remove("d-none");
    course1.classList.add("d-none");
    course3.classList.add("d-none");
  } else if (courseOption === "course3") {
    course3.classList.remove("d-none");
    course2.classList.add("d-none");
    course1.classList.add("d-none");
  }
}
