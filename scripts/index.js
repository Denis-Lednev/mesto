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

const profileCloseButton = page.querySelector('.profile-close-button');
const cardCloseButton = page.querySelector('.card-close-button')

function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

function closeProfilePopup(){
  closePopup(profilePopup)
}

function closeCardPopup(){
  closePopup(cardPopup)
}

// TO DO: Сделать попап картинки именно попапом, как писал ревьер и добавить туда примерно следкющий код ниже

// const imageCloseButton = page.querySelector('.close-button_type_image-popup')

// const imagePopup = page.querySelector('.element__in-popup')

// function closeImagePopup(){
//   closePopup(imagePopup)
// }

const closeButtons = document.querySelectorAll('.close-button');

// универсальный обработчик крестиков

closeButtons.forEach(function(button){
  const popup = button.closest('.popup');
  button.addEventListener('click', function(){closePopup(popup)})
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

function createCard(link, name) {
  // НОВАЯ КАРТОЧКА //
  const templateElement = page.querySelector('.template-element').content; 
  const cardElement = templateElement.querySelector('.element').cloneNode(true); 
  const cardImage = cardElement.querySelector('.element__image');
  cardImage.src = link; 
  cardImage.alt = `картинка с названием ${name}`; 
  cardElement.querySelector('.element__text').textContent = name;

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
  cardElement.querySelector('.element__image_in-popup').src = link;
  cardElement.querySelector('.element__text_in-popup').textContent = name;
  const imagePopup = page.querySelector('.element__in-popup')
  
  cardImage.addEventListener('click', function(){
    imagePopup.classList.add('element__in-popup_active')
  })
  
  // const closeButtonImagePopup = page.querySelector('.close-button_type_image-popup')
  // closeButtonImagePopup.addEventListener('click', function(){
  //   imagePopup.classList.remove('element__in-popup_active')
  // })
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


function addInitialCards(){
  for (let i=0; i<initialCards.length; i++){
    addNewItem(initialCards[i].link, initialCards[i].name);
  }
}

addInitialCards()