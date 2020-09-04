// * Selection * //

const pomodoroTab = document.querySelector(".pomodoro");
const shortBreakTab = document.querySelector(".shortBreak");
const longBreakTab = document.querySelector(".longBreak");

const minutes = document.querySelector(".timer__minutes");
const seconds = document.querySelector(".timer__seconds");

const header = document.querySelector(".header");
const btnInnerTextColor = document.querySelector(".start");
const taskDescription = document.querySelector(".task__description");
const allTabs = document.querySelectorAll(".timer__btn");

const addProject = document.querySelector(".task__add");

// * Tab DOM Manipulation * //
pomodoroTab.addEventListener("click", function () {
  activeTab(this);
  changeDOMByTab(218, 68, 83, 137, 33, 107, 25, "Time for Programming"); // #da4453 // #89216b
});

shortBreakTab.addEventListener("click", function () {
  activeTab(this);
  changeDOMByTab(76, 166, 169, 76, 166, 169, 05, "Time for Break"); // #4ca6a9
});

longBreakTab.addEventListener("click", function () {
  activeTab(this);
  changeDOMByTab(73, 143, 193, 73, 143, 193, 15, "Time for Break"); // #498fc1
});

//Function for Changing Bg Color and Start Button Color
function changeDOMByTab(r1, g1, b1, r2, g2, b2, minute, description) {
  taskDescription.innerText = description;
  minutes.innerText = minute;
  header.style.backgroundImage = `linear-gradient(to right bottom, rgb(${r1}, ${g1}, ${b1}), rgb(${r2}, ${g2}, ${b2}))`;
  btnInnerTextColor.style.backgroundImage = `linear-gradient(to right bottom, rgb(${r1}, ${g1}, ${b1}), rgb(${r2}, ${g2}, ${b2}))`;
  document.title = `${minutes.innerText}:${seconds.innerText} - ${taskDescription.innerText}`;
}

//Function for displaying bg of active tab
function activeTab(tab) {
  allTabs.forEach((eachTab) => {
    eachTab.classList.remove("timer__active");
  });
  tab.classList.add("timer__active");
}

//****************************** Title Text Manipulation ***********************************************/

// document.title = `${minutes.innerText}:${seconds.innerText} - ${taskDescription.innerText}`;
document.title = `${minutes.innerText}:${seconds.innerText} - ${taskDescription.innerText}`;
