const settingBtn = document.querySelector(".nav__btn");
const settingBg = document.querySelector(".setting__background");
const settingPopUp = document.querySelector(".setting__popUp");
const settingClose = document.querySelector(".setting__close-icon");
const settingOk = document.querySelector(".setting__ok");

const pomodoroTime = document.getElementById("pomodoro");
const shortBreakTime = document.getElementById("sBreak");
const longBreakTime = document.getElementById("lBreak");

const soundVolumeInput = document.querySelector(".setting__range");
const autoStartNextRound = document.getElementById("checkboxForNR");
const darkMode = document.getElementById("checkboxForDM");

// * User Setting Object * //

const userSetting = {
  time: {
    pomodoro: 25,
    sBreak: 5,
    lBreak: 15,
  },
  autoStartNextRound: false,
  soundVolume: 50,
  darkMode: false,
};

// ? Setting Btn Event Listener //
settingBtn.addEventListener("click", function () {
  settingBg.classList.add("setting__background--active");
});

// ? Setting Bg Add Event Listener
settingBg.addEventListener("click", (e) => {
  if (e.target.closest(".setting__popUp") !== settingPopUp) {
    settingBg.classList.remove("setting__background--active");
  }
});

// ? Close Button Add Event Listener
settingClose.addEventListener("click", function () {
  settingBg.classList.remove("setting__background--active");
});

//? Ok Button Event Listener
settingOk.addEventListener("click", function () {
  userSetting.time.pomodoro = parseInt(pomodoroTime.value);
  userSetting.time.sBreak = parseInt(shortBreakTime.value);
  userSetting.time.lBreak = parseInt(longBreakTime.value);

  userSetting.soundVolume = parseInt(soundVolumeInput.value);
  userSetting.autoStartNextRound = autoStartNextRound.checked;
  userSetting.darkMode = darkMode.checked;

  settingBg.classList.remove("setting__background--active");
});
