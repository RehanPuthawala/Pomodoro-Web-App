// ********************************************* Add Projects ************************************* //

addProject.addEventListener("click", function () {
  showPopUp();
});

//********************************************** * Add Element To DOM function **********************************************************//
const addElementToDOM = (
  variableName,
  className,
  attributeName,
  attributeValue,
  innerText,
  value
) => {
  variableName.classList.add(className);

  if (attributeName && attributeValue)
    variableName.setAttribute(attributeName, attributeValue);

  if (innerText) variableName.innerText = innerText;

  if (value) variableName.value = value;
};

//********************************************** * Create New Task Function * **********************************************************//

const createNewTask = (taskName, taskCounter, whereToAppend, formName) => {
  if (taskName.value && taskCounter.value > 0) {
    const newProject = document.createElement("li");

    addElementToDOM(newProject, "task__project");

    const projectName = document.createElement("span");
    addElementToDOM(projectName, "task__name", null, null, `${taskName.value}`);

    const projectCheck = document.createElement("i");

    addElementToDOM(projectCheck, null, "aria-hidden", "true");
    projectCheck.className = "fa fa-check-circle task__check";

    const projectPomodoro = document.createElement("div");
    addElementToDOM(projectPomodoro, "task__pomodoro");

    const projectPomodoroCompleted = document.createElement("span");
    addElementToDOM(
      projectPomodoroCompleted,
      "task__pomodoro--completed",
      null,
      null,
      "0"
    );

    const projectPomodoroSlash = document.createElement("span");
    addElementToDOM(
      projectPomodoroSlash,
      "task__pomodoro--slash",
      null,
      null,
      "/"
    );

    const projectPomodoroTotal = document.createElement("span");
    addElementToDOM(
      projectPomodoroTotal,
      "task__pomodoro--total",
      null,
      null,
      `${taskCounter.value}`
    );

    projectPomodoro.append(
      projectPomodoroCompleted,
      projectPomodoroSlash,
      projectPomodoroTotal
    );

    const projectEdit = document.createElement("div");
    addElementToDOM(projectEdit, "task__edit");

    const projectEditIcon = document.createElement("i");
    projectEditIcon.className = "fa fa-ellipsis-v task__edit-icon";
    projectEditIcon.setAttribute("aria-hidden", "true");

    // let projectDescription;
    // if (popUpDescription) {
    //   projectDescription = document.createElement("div");
    //   addElementToDOM(
    //     projectDescription,
    //     "task__description",
    //     null,
    //     null,
    //     `${popUpDescription.value}`
    //   );
    // }

    projectEdit.append(projectEditIcon);
    newProject.append(projectCheck, projectName, projectPomodoro, projectEdit);
    // if (projectDescription) {
    //   newProject.append(projectDescription);
    // }
    whereToAppend.append(newProject);

    whereToAppend.removeChild(formName);

    projectCheck.addEventListener("click", function () {
      projectCheck.classList.toggle("task__check--active");
      if (projectCheck.classList.contains("task__check--active")) {
        projectCheck.nextElementSibling.style.textDecoration = "line-through";
      } else {
        projectCheck.nextElementSibling.style.textDecoration = "none";
      }
    });

    projectEdit.addEventListener("click", function (e) {
      whereToAppend.removeChild(e.target.parentElement);
      showPopUp(
        e.target.parentElement.children[1].innerText,
        e.target.parentElement.children[2].children[2].innerText,
        null,
        true,
        true,
        false
      );
    });
  }
};

//********************************************** * Show Pop Up Function * **********************************************************//

function showPopUp(
  titleValue,
  counterValue,
  noteValue,
  showSave = false,
  showDelete = false,
  normalCancel = true
) {
  //UL
  const newProjectList = document.querySelector(".task__list");

  //POPUP CREATION
  const popUp = document.createElement("div");
  addElementToDOM(popUp, "pop-up");
  //POPUP TITLE
  const popUpTitle = document.createElement("input");
  popUpTitle.setAttribute("type", "text");
  addElementToDOM(
    popUpTitle,
    "pop-up__title",
    "placeholder",
    "What are you working on"
  );

  // popUpTitle.focus = true;

  if (titleValue) {
    addElementToDOM(
      popUpTitle,
      "pop-up__title",
      "placeholder",
      "What are you working on?",
      null,
      `${titleValue}`
    );
  }

  //POPUP ADDITIONAL INFORMATION DIV
  const popUpDiv = document.createElement("div");
  addElementToDOM(popUpDiv, "pop-up__div");

  //POPUP ADDITONAL INFORMATION TEXT
  const popUpText = document.createElement("p");
  addElementToDOM(popUpText, "pop-up__text", null, null, "Est Pomodoros");

  //POPUP POMODORO COUNTER
  const popUpCounter = document.createElement("input");
  popUpCounter.setAttribute("type", "number");
  popUpCounter.setAttribute("min", "1");
  addElementToDOM(popUpCounter, "pop-up__counter", "max", "50", null, "1");

  if (counterValue) {
    addElementToDOM(
      popUpCounter,
      "pop-up__counter",
      "max",
      "50",
      null,
      `${counterValue}`
    );
  }

  //POPUP PLUS ICON
  const popUpIconPlus = document.createElement("i");
  popUpIconPlus.className = "fa fa-plus";
  popUpIconPlus.setAttribute("aria-hidden", true);

  //POPUP COUNTER INCREMENT BUTTON
  const popUpIncrementBtn = document.createElement("button");
  addElementToDOM(popUpIncrementBtn, "pop-up__btn");
  popUpIncrementBtn.append(popUpIconPlus);

  //POPUP MINUS ICON
  const popUpIconMinus = document.createElement("i");
  popUpIconMinus.className = "fa fa-minus";
  popUpIconMinus.setAttribute("aria-hidden", true);

  //POPUP COUNTER Decrement BUTTON
  const popUpDecrementBtn = document.createElement("button");
  addElementToDOM(popUpDecrementBtn, "pop-up__btn");
  popUpDecrementBtn.append(popUpIconMinus);

  //POPUP Add Note Button
  const popUpNote = document.createElement("a");
  addElementToDOM(popUpNote, "pop-up__note", null, null, "Add Note");

  //POPUP BOTTOM DIV
  const popUpBottomDiv = document.createElement("div");
  addElementToDOM(popUpBottomDiv, "pop-up__bottom-div");

  //POPUP DELETE BUTTON
  const popUpDelete = document.createElement("a");
  addElementToDOM(popUpDelete, null, null, null, "Delete");
  popUpDelete.className = "pop-up__delete pop-up__delete--active";

  //POPUP CONFIRMATION BOX
  const popUpConfirmationBox = document.createElement("div");
  addElementToDOM(popUpConfirmationBox, "pop-up__confirmationBox");

  //POPUP CANCEL BUTTON
  const popUpCancel = document.createElement("a");
  addElementToDOM(popUpCancel, "pop-up__cancel", null, null, "Cancel");

  //POPUP save BUTTON
  const popUpSave = document.createElement("a");
  addElementToDOM(popUpSave, "pop-up__save", null, null, "Save");

  //Adding Elements to the HTML DOM
  newProjectList.appendChild(popUp);

  popUp.append(popUpTitle, popUpDiv, popUpBottomDiv);

  popUpDiv.append(
    popUpText,
    popUpCounter,
    popUpIncrementBtn,
    popUpDecrementBtn,
    popUpNote
  );

  popUpBottomDiv.append(popUpDelete, popUpConfirmationBox);
  if (showDelete) {
    popUpDelete.classList.add("pop-up__delete--active");
  } else {
    popUpDelete.classList.remove("pop-up__delete--active");
  }

  popUpConfirmationBox.append(popUpCancel, popUpSave);

  //************************ Getting Value From Form ************************* //
  let popUpDescription;

  //!Add Note EventListener
  popUpNote.addEventListener("click", function () {
    popUpDescription = document.createElement("textarea");
    addElementToDOM(
      popUpDescription,
      "pop-up__description",
      "placeholder",
      "Some Notes..."
    );

    popUpDiv.removeChild(popUpNote);
    popUpDiv.append(popUpDescription);
  });

  //! Save Button EventListener
  popUpSave.addEventListener("click", function () {
    createNewTask(popUpTitle, popUpCounter, newProjectList, popUp);
  });

  //! Enter Event Listener on PopUp Title
  popUpTitle.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      createNewTask(popUpTitle, popUpCounter, newProjectList, popUp);
    }
  });

  //!POPUP TITLE EVENT LISTENER
  if (!showSave) {
    save(popUpTitle, popUpSave);
  } else {
    popUpSave.classList.add("pop-up__save--active");
    save(popUpTitle, popUpSave);
  }

  //! Cancel Button Eventlistener
  popUpCancel.addEventListener("click", function () {
    if (!normalCancel) {
      createNewTask(popUpTitle, popUpCounter, newProjectList, popUp);
    } else {
      newProjectList.removeChild(popUp);
    }
  });

  //! Delete Button Eventlistener
  popUpDelete.addEventListener("click", function () {
    newProjectList.removeChild(popUp);
  });

  // !Increment Button Eventlistener
  popUpIncrementBtn.addEventListener("click", function () {
    if (popUpCounter.value < 50) popUpCounter.value++;
  });

  // !Decrement Button Eventlistener
  popUpDecrementBtn.addEventListener("click", function () {
    if (popUpCounter.value > 1) popUpCounter.value--;
  });
}

//********************************************** * Show Save Button Function * **********************************************************//

function save(eventTakingElement, changingElement) {
  eventTakingElement.addEventListener("keyup", function (e) {
    if (eventTakingElement.value)
      changingElement.classList.add("pop-up__save--active");

    if (e.key == "Backspace" || e.key == "Delete") {
      if (!eventTakingElement.value)
        changingElement.classList.remove("pop-up__save--active");
    }
  });
}
