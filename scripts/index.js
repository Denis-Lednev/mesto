const page = document.querySelector('.page');

/* кнопка открытия редактирования формы профиля*/

const editButton = page.querySelector('.profile-info__edit-button');
const nameInput = page.querySelector('.popup__item_el_name') 
const jobInput = page.querySelector('.popup__item_el_status') 
const profileInfoName = page.querySelector('.profile-info__name');
const profileInfoStatus = page.querySelector('.profile-info__status');

const profilePopup = page.querySelector('.profile-popup');

const imagePopup = page.querySelector('.image-popup')
const cardImagePopup = page.querySelector('.card-image_popup');

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function openPopupProfile() {
  openPopup(profilePopup)
}

function editProfile() {
  nameInput.value = profileInfoName.textContent
  jobInput.value = profileInfoStatus.textContent
}

editButton.addEventListener('click', openPopupProfile);
editButton.addEventListener('click', editProfile);


/* кнопка открытия редактирования формы нового элемента*/

const addButton = page.querySelector('.add-button')
const cardPopup = page.querySelector('.card-popup')

addButton.addEventListener('click', openCardPopup);
function openCardPopup() {
  cardPopup.classList.add('popup_opened');
}


/* кнопка закрытия редактирования формы профиля, нового элемента*/

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function closeProfilePopup(){
  closePopup(profilePopup)
}

function closeCardPopup(){
  closePopup(cardPopup)
}

function closeImagePopup(){
  closePopup(imagePopup)
}

// универсальный обработчик крестиков

const closeButtons = document.querySelectorAll('.close-button');

closeButtons.forEach(function(button){
  const popup = button.closest('.popup');
  button.addEventListener('click', function(){
    closePopup(popup)})
})

// Закрытие попапов через Esc

function closePopupByEsc(evt){
  const openedPopup = document.querySelector('.popup_opened');
  if (evt.key === 'Escape'){
    closePopup(openedPopup)
  }
} 

document.addEventListener('keydown', closePopupByEsc)

// Закрытие попапов через overlay

function closePopupByOverlay(popup){
  popup.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('popup')) {
      closePopup(evt.target);
    }
  })
}

function closeCardPopupByOverlay(){
  closePopupByOverlay(cardPopup)
}

function closeProfilePopupByOverlay(){
  closePopupByOverlay(profilePopup)
}

function closeImagePopupByOverlay(){
  closePopupByOverlay(imagePopup)
}

cardPopup.addEventListener('click', closeCardPopupByOverlay)
profilePopup.addEventListener('click', closeProfilePopupByOverlay)
imagePopup.addEventListener('click', closeImagePopupByOverlay)


/* функция заполнения формы профиля*/

const profileForm = page.querySelector('.popup__form_type_profile') 

function handleProfileFormSubmit (evt) {
  evt.preventDefault(); // предотвращает перезагрузку
  profileInfoName.textContent = nameInput.value;
  profileInfoStatus.textContent = jobInput.value;
  closeProfilePopup();
}

profileForm.addEventListener('submit', handleProfileFormSubmit); 



/* template */

const initialCards = [
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

const cardForm = page.querySelector('.popup__form_type_new-card') 
const inputPlace = cardForm.querySelector('.popup__item_el_place')
const inputSrc = cardForm.querySelector('.popup__item_el_src')
const listElements = page.querySelector('.elements');

const cardTextPopup = page.querySelector('.card-text_popup');

function createCard(item) {
  // НОВАЯ КАРТОЧКА //
  const templateElement = page.querySelector('.template-element').content; 
  const cardElement = templateElement.querySelector('.element').cloneNode(true); 
  const cardImage = cardElement.querySelector('.card-image');
  const cardText = cardElement.querySelector('.card-text');
  cardImage.src = item.link; 
  cardText.textContent = item.name;
  cardImage.alt = `картинка с названием ${item.name}`
  // с помощью item.link и item.name здесь мы как бы создаем структуру карточки: 
    // item {
    //   link: ...
    //   name: ...
    // }

  // УДАЛЕНИЕ // 
  cardElement.querySelector('.element__trash').addEventListener('click', function(){
    cardElement.remove()
  })
  
  // ЛАЙК // 
  const like = cardElement.querySelector('.element__like')
  function toggleLike(e) {
    e.target.classList.toggle('element__like_active')
  }
  like.addEventListener('click', toggleLike)
  
  
  
  // ПОПАП // 

  function openPopupImage() {
    openPopup(imagePopup)
    cardImagePopup.src = cardImage.src;
    cardImagePopup.alt = cardImage.alt;
    cardTextPopup.textContent = cardText.textContent;
  }
  cardImage.addEventListener('click', openPopupImage)
  
  return cardElement;
}

function addNewItem (link, name) {
  const newElement = createCard(link, name);
  listElements.prepend(newElement); 
}

function handleCardFormSubmit (e) {
  e.preventDefault(); // предотвращает перезагрузку
  addNewItem({
    link: inputSrc.value,
    name: inputPlace.value
  })
  closeCardPopup()
  e.target.reset();
}

cardForm.addEventListener('submit', handleCardFormSubmit); 

initialCards.forEach(addNewItem)
