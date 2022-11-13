import { 
  Card 
} from "./Card.js";

import { 
  FormValidator 
} from "./FormValidator.js";

import {
  openPopup,
  openCardPopup,
  openPopupProfile,
  closePopup,
  closeProfilePopup,
  closeCardPopup,
  closePopupByOverlay,
  closeOpenedProfileByOverlay,
} from "./openAndClosePopup.js";

import {
  initialCards,
  settings,
  page,
  profilePopup,
  imagePopup,
  cardPopup,
  editButton,
  nameInput,
  jobInput,
  profileInfoName,
  profileInfoStatus,
  closeButtons,
  addButton,
  profileForm,
  cardForm,
  inputPlace,
  inputSrc,
  listElements, 
} from "./constants.js";

// функция отображения попапа профиля с уже заполненными ранее данными
function fillInFormInputs() {
  nameInput.value = profileInfoName.textContent;
  jobInput.value = profileInfoStatus.textContent;
}

// функция редактирования формы профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault(); // предотвращает перезагрузку
  profileInfoName.textContent = nameInput.value;
  profileInfoStatus.textContent = jobInput.value;
  closeProfilePopup();
}

editButton.addEventListener("click", openPopupProfile);
editButton.addEventListener("click", fillInFormInputs);
addButton.addEventListener("click", openCardPopup);

// универсальный обработчик крестиков
closeButtons.forEach(function (button) {
  const popup = button.closest(".popup");
  button.addEventListener("click", function () {
    closePopup(popup);
  });
});

cardPopup.addEventListener("click", closeOpenedProfileByOverlay);
profilePopup.addEventListener("click", closeOpenedProfileByOverlay);
imagePopup.addEventListener("click", closeOpenedProfileByOverlay);
profileForm.addEventListener("submit", handleProfileFormSubmit);

// общая функция добавления карточки
function addNewItem(item) {
  const card = new Card(item, ".template-element");
  const newElement = card.generateCard();

  listElements.prepend(newElement);
}

// функция добавления карточки из попапа
function handleCardFormSubmit(e) {
  e.preventDefault();
  addNewItem({
    link: inputSrc.value,
    name: inputPlace.value,
  });
  closeCardPopup();
  e.target.reset();
}

cardForm.addEventListener("submit", handleCardFormSubmit);

// добавление карточек из имеющегося массива
initialCards.forEach(addNewItem);

// активация валидации формы профиля
const validateCard = new FormValidator(settings, cardForm);
validateCard.enableValidation();

// активация валидации формы добавления карточки
const validateProfile = new FormValidator(settings, profileForm);
validateProfile.enableValidation();

addButton.addEventListener('click', () => {
  validateCard.enableValidation()
  console.log('qwqwq')
})