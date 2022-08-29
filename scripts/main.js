const popupButtons = document.querySelectorAll(".open");
const timeout = 800;

popupButtons.forEach((popupButton) => {
  popupButton.addEventListener("click", function (e) {
    const currentContent = popupButton.closest(".img");

    popupOpen(currentContent);
    e.preventDefault();
  });
});

function popupOpen(currentPopup) {
  const popupActive = document.querySelector(".popup");
  const closeButton = document.querySelector(".close");
  popupActive.querySelector("img").src = currentPopup.querySelector("img").src;

  popupActive.classList.add("open");
  closeButton.addEventListener("click", function (e) {
    popupClose(popupActive);
  });
  popupActive.addEventListener("click", function (e) {
    if (!e.target.closest(".popup__content")) {
      popupClose(e.target.closest(".popup"));
    }
  });
}
function popupClose(popupActive) {
  popupActive.classList.remove("open");
}
