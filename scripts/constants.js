export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const settings = {
  inputElement: '.popup__item',
  formElement: '.popup__form',
  buttonElement: '.popup__submit-button',
  inputErrorClass: 'popup__item_error',
  inactiveButtonClass: 'popup__submit-button_disabled',
};

export const page = document.querySelector('.page');
export const profilePopup = page.querySelector(".profile-popup");
export const imagePopup = page.querySelector(".image-popup");
export const cardPopup = page.querySelector(".card-popup");
export const buttonEditProfile = page.querySelector(".profile-info__edit-button"); // editButton
export const nameInput = page.querySelector(".popup__item_el_name");
export const statusInput = page.querySelector(".popup__item_el_status");
export const profileInfoName = page.querySelector(".profile-info__name");
export const profileInfoStatus = page.querySelector(".profile-info__status");
export const buttonsClosePopup = document.querySelectorAll(".close-button"); // closeButtons
export const buttonAddNewCard = page.querySelector(".add-button"); // addButton
export const profileForm = page.querySelector(".popup__form_type_profile");
export const cardForm = page.querySelector(".popup__form_type_new-card");
export const inputPlace = cardForm.querySelector(".popup__item_el_place");
export const inputSrc = cardForm.querySelector(".popup__item_el_src");
export const listElements = page.querySelector(".elements");
export const cardTextPopup = imagePopup.querySelector(".card-text_popup");
export const cardImagePopup = imagePopup.querySelector(".card-image_popup");