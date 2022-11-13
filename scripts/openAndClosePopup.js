import { profilePopup, cardPopup } from "./constants.js";

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupByEsc);
}

function openPopupProfile() {
  openPopup(profilePopup)
}

function openCardPopup() {
  openPopup(cardPopup)
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupByEsc);
}

function closePopupByEsc(evt) {
  const openedPopup = document.querySelector(".popup_opened");
  if (evt.key === "Escape") {
    closePopup(openedPopup);
  }
}

function closeProfilePopup() {
  closePopup(profilePopup)
}

function closeCardPopup() {
  const openedPopup = document.querySelector('.popup_opened')
  const submitButton = openedPopup.querySelector('.popup__submit-button')
  submitButton.classList.add('popup__submit-button_disabled')
  submitButton.setAttribute("disabled", true)
  closePopup(cardPopup)
}

function closePopupByOverlay(popup) { 
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup')) {
      closePopup(evt.target);
    }
  })
}

function closeOpenedProfileByOverlay(evt){ 
  closePopupByOverlay(evt.target)
}

export { openPopup, openCardPopup, openPopupProfile, closePopup, closeProfilePopup, closeCardPopup, closePopupByOverlay, closeOpenedProfileByOverlay };
