const page = document.querySelector('.page');

/* кнопка открытия редактирования формы профиля*/

const popup = page.querySelector('.popup');
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

editButton.addEventListener('click', openPopupProfile, editProfile);


/* кнопка открытия редактирования формы нового элемента*/

const addButton = page.querySelector('.add-button')
const cardPopup = page.querySelector('.popup_type_new-picture')

addButton.addEventListener('click', openCardPopup);
function openCardPopup() {
    cardPopup.classList.add('popup_opened');
}



/* кнопка закрытия редактирования формы профиля, нового элемента*/

const profileCloseButton = page.querySelector('.profile-close-button');
const cardCloseButton = page.querySelector('.close-button_type_new-picture')

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

closeButtons.forEach(function(button){
  const popup = button.closest('.popup');
  button.addEventListener('click', function(){closePopup(popup)})
})

/* функция заполнения формы профиля*/

const formElement = page.querySelector('.popup__form') 

function formSubmitHandler (evt) {
    evt.preventDefault(); // предотвращает перезагрузку
    profileInfoName.textContent = nameInput.value;
    profileInfoStatus.textContent = jobInput.value;
    // closePopup();
}

formElement.addEventListener('submit', formSubmitHandler); 



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

const formElementNewItem = page.querySelector('.popup__form_type_new-picture') 
const inputPlace = page.querySelector('.popup__item_el_place')
const inputSrc = page.querySelector('.popup__item_el_src')
const listElements = page.querySelector('.elements');

function addNewItem (link, name) {
  // НОВАЯ КАРТОЧКА //
  const templateElement = page.querySelector('.template-element').content; 
  const newElement = templateElement.querySelector('.element').cloneNode(true); 
  newElement.querySelector('.element__image').src = link; 
  newElement.querySelector('.element__text').textContent = name;
  listElements.prepend(newElement); 
  // closePopup()

  // УДАЛЕНИЕ // 
  newElement.querySelector('.element__trash').addEventListener('click', function(e){
    const element = e.target.closest('.element')
    element.remove()
  })
  
  // ЛАЙК // 
  const like = newElement.querySelector('.element__like')
  function activeLike(e) {
    e.target.classList.toggle('element__like_active')
  }
  like.addEventListener('click', activeLike)
  
  // ПОПАП // 
  newElement.querySelector('.element__image_in-popup').src = link;
  newElement.querySelector('.element__text_in-popup').textContent = name;
  const elementInPopup = page.querySelector('.element__in-popup')
  
  newElement.querySelector('.element__image').addEventListener('click', function(){
    elementInPopup.classList.add('element__in-popup_active')
  })
  
  const closeButtonImagePopup = page.querySelector('.close-button_type_image-popup')
  closeButtonImagePopup.addEventListener('click', function(){
    elementInPopup.classList.remove('element__in-popup_active')
  })
}

function handleSubmit (e) {
  e.preventDefault(); // предотвращает перезагрузку
  addNewItem(inputSrc.value, inputPlace.value); // берет содержимое в инпутах и подставляет в формулу
}

formElementNewItem.addEventListener('submit', handleSubmit); 


function addInitialCards(){
  for (let i=0; i<initialCards.length; i++){
    addNewItem(initialCards[i].link, initialCards[i].name);
  }
}

addInitialCards()