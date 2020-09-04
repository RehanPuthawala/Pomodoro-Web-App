const settingBtn = document.querySelector(".nav__btn");
const settingBg = document.querySelector(".setting__background");
const settingPopUp = document.querySelector(".setting__popUp");

// *************** Setting Btn Event Listener ************ //

settingBtn.addEventListener("click", function () {
  settingBg.classList.add("setting__background--active");

  settingBg.addEventListener("click", function (e) {
    if (e.target !== settingPopUp) {
      settingBg.classList.remove("setting__background--active");
    }
  });
});
