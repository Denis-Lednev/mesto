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