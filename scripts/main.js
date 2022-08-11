const popupButtons = document.querySelectorAll(".open");
const timeout = 800;

if (popupButtons.length > 0) {
  popupButtons.forEach((popupButton) => {
    popupButton.addEventListener("click", function (e) {
      const popupName = popupButton.getAttribute("id").replace("#", "");
      const currentPopup = document.getElementById(popupName);
      popupOpen(currentPopup);
      e.preventDefault();
    });
  });
}
function popupOpen(currentPopup) {
  const popupActive = document.querySelector(".popup.open");

  currentPopup.classList.add("open");

  currentPopup.addEventListener("click", function (e) {
    if (!e.target.closest(".popup__content")) {
      popupClose(e.target.closest(".popup"));
    }
  });
}
function popupClose(popupActive) {
  popupActive.classList.remove("open");
}
