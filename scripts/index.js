import { 
  Card 
} from "./Card.js";

import { 
  FormValidator 
} from "./FormValidator.js";

import {
  openPopup,
  // openCardPopup,
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
  buttonEditProfile,
  nameInput,
  statusInput,
  profileInfoName,
  profileInfoStatus,
  buttonsClosePopup,
  buttonAddNewCard,
  profileForm,
  cardForm,
  inputPlace,
  inputSrc,
  listElements, 
} from "./constants.js";

// функция отображения попапа профиля с уже заполненными ранее данными
function fillInFormInputs() {
  nameInput.value = profileInfoName.textContent;
  statusInput.value = profileInfoStatus.textContent;
}

// функция редактирования формы профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault(); // предотвращает перезагрузку
  profileInfoName.textContent = nameInput.value;
  profileInfoStatus.textContent = statusInput.value;
  closeProfilePopup();
}

buttonEditProfile.addEventListener("click", openPopupProfile);
buttonEditProfile.addEventListener("click", fillInFormInputs);
// buttonAddNewCard.addEventListener("click", openCardPopup);

// универсальный обработчик крестиков
buttonsClosePopup.forEach(function (button) {
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
function createCard(item) {
  const card = new Card(item, ".template-element");
  const element = card.generateCard();
  return element
}

function renderCard(container, card) {
  container.prepend(card)
}

function initialCard(item){
  const newElement = createCard(item);
  renderCard(listElements, newElement);
}

// функция добавления карточки из попапа
function handleCardFormSubmit(e) {
  e.preventDefault();
  initialCard({
    link: inputSrc.value,
    name: inputPlace.value,
  });
  closeCardPopup();
  e.target.reset();
}

cardForm.addEventListener("submit", handleCardFormSubmit);

// добавление карточек из имеющегося массива
initialCards.forEach(initialCard);

// активация валидации формы профиля
const validateCard = new FormValidator(settings, cardForm);
validateCard.enableValidation();

// активация валидации формы добавления карточки
const validateProfile = new FormValidator(settings, profileForm);
validateProfile.enableValidation();

function openCardPopup() {
  openPopup(cardPopup)
  validateCard.toggleSubmitButtonState()
}

buttonAddNewCard.addEventListener('click', () => {
  openCardPopup();
  // validateCard.toggleSubmitButtonState() 
})