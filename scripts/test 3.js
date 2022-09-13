const page = document.querySelector('.page');

/* кнопка открытия редактирования формы профиля*/

const editButton = page.querySelector('.profile-info__edit-button');
const nameInput = page.querySelector('.popup__item_el_name') 
const jobInput = page.querySelector('.popup__item_el_status') 
const profileInfoName = page.querySelector('.profile-info__name');
const profileInfoStatus = page.querySelector('.profile-info__status');

const profilePopup = page.querySelector('.profile-popup');

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

const closeButtons = document.querySelectorAll('.close-button');

// универсальный обработчик крестиков

closeButtons.forEach(function(button){
  const popup = button.closest('.popup');
  button.addEventListener('click', function(){
    closePopup(popup)})
})

/* функция заполнения формы профиля*/

const profileForm = page.querySelector('.popup__form_type_profile') 

function handleProfileFormSubmit (evt) {
  evt.preventDefault(); // предотвращает перезагрузку
  profileInfoName.textContent = nameInput.value;
  profileInfoStatus.textContent = jobInput.value;
}

profileForm.addEventListener('submit', handleProfileFormSubmit); 
profileForm.addEventListener('submit', closeProfilePopup); 



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
const inputPlace = page.querySelector('.popup__item_el_place')
const inputSrc = page.querySelector('.popup__item_el_src')
const listElements = page.querySelector('.elements');




function createCard(item) {
  // НОВАЯ КАРТОЧКА //
  const templateElement = page.querySelector('.template-element').content; 
  const cardElement = templateElement.querySelector('.element').cloneNode(true); 
  const cardImage = cardElement.querySelector('.card-image');
  cardImage.setAttribute('src', item.link)
  cardImage.setAttribute('alt', `картинка с названием ${item.name}`)
  const cardText = cardElement.querySelector('.card-text');
  cardText.textContent = item.name;

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

  const imagePopup = page.querySelector('.image-popup')
  const cardImagePopup = page.querySelector('.card-image_popup');
  const cardTextPopup = page.querySelector('.card-text_popup');

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
  const newElement = createCard(link, name)
  listElements.prepend(newElement); 
}

function handleCardFormSubmit (e) {
  e.preventDefault(); // предотвращает перезагрузку
  addNewItem(inputSrc.value, inputPlace.value); // берет содержимое в инпутах и подставляет в формулу
  e.target.reset();
}

cardForm.addEventListener('submit', handleCardFormSubmit); 
cardForm.addEventListener('submit', closeCardPopup); 

initialCards.forEach(addNewItem)