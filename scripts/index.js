let page = document.querySelector('.page');
let popup = page.querySelector('.popup');
let editButton = page.querySelector('.profile-info__edit-button');

let formElement = page.querySelector('.popup__form') 
let nameInput = page.querySelector('.popup__item_el_name') 
let jobInput = page.querySelector('.popup__item_el_status') 
let profileInfoName = page.querySelector('.profile-info__name');
let profileInfoStatus = page.querySelector('.profile-info__status');

editButton.addEventListener('click', popupOpen)
function popupOpen() {
    popup.classList.add('popup_opened');
    nameInput.value = profileInfoName.textContent
    jobInput.value = profileInfoStatus.textContent
}

/* Ничосе, нормально, нормально, продолжаем... делаем кнопку закрытия формы */

let closeButton = page.querySelector('.popup__close-button');
closeButton.addEventListener('click', popupClose)
function popupClose() {
    popup.classList.remove('popup_opened');
}

/* 0.о Осталось разобраться с заполнением формы */



function formSubmitHandler (evt) {
    evt.preventDefault();
    profileInfoName.textContent = nameInput.value;
    profileInfoStatus.textContent = jobInput.value;
    popupClose();
}

formElement.addEventListener('submit', formSubmitHandler); 



/* Пытамеся реализовать template */

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

const listElements = page.querySelector('.elements');

function addNewElement(e) {
    const templateElement = page.querySelector('.template-element').content;
    const newElement = templateElement.querySelector('.element').cloneNode(true);

    newElement.querySelector('.element__image').src = e.link;
    newElement.querySelector('.element__text').textContent = e.name;

    listElements.prepend(newElement);
}

initialCards.forEach(addNewElement);
