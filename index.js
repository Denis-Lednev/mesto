/* Пытаемся сделать всплывающий popup и не умереть */

let page = document.querySelector('.page');
let popup = page.querySelector('.popup');
let editButton = page.querySelector('.profile-info__edit-button');

editButton.addEventListener('click', popupOpen)
function popupOpen () {
    popup.classList.add('popup_opened');
}

/* Ничосе, нормально, нормально, продолжаем... делаем кнопку закрытия формы */

let closeButton = page.querySelector('.popup__close-button');
closeButton.addEventListener('click', popupClose)
function popupClose () {
    popup.classList.remove('popup_opened');
}

/* 0.о Осталось разобраться с заполнением формы */

let formElement = page.querySelector('.popup') 
let nameInput = page.querySelector('.popup__item_el_name') 
let jobInput = page.querySelector('.popup__item_el_status') 

function formSubmitHandler (evt) {
    evt.preventDefault();
    let profileInfoName = page.querySelector('.profile-info__name');
    let profileInfoStatus = page.querySelector('.profile-info__status');
    profileInfoName.textContent = nameInput.value;
    profileInfoStatus.textContent = jobInput.value;
    popup.classList.remove('popup_opened');
}

formElement.addEventListener('submit', formSubmitHandler); 