let page = document.querySelector('.page');



/* кнопка открытия редактирования формы профиля*/

let popup = page.querySelector('.popup');
let editButton = page.querySelector('.profile-info__edit-button');
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



/* кнопка открытия редактирования формы нового элемента*/

let addButton = page.querySelector('.add-button')
let popupNewPicture = page.querySelector('.popup_type_new-picture')

addButton.addEventListener('click', popupNewPictureOpen);
function popupNewPictureOpen() {
    popupNewPicture.classList.add('popup_opened');
}



/* кнопка закрытия редактирования формы профиля*/

let closeButton = page.querySelector('.popup__close-button');
closeButton.addEventListener('click', popupClose)
function popupClose() {
    popup.classList.remove('popup_opened');
}



/* кнопка закрытия редактирования формы нового элемента*/

let closeButtonNewPicture = page.querySelector('.popup__close-button_type_new-picture')
closeButtonNewPicture.addEventListener('click', popupNewPictureClose)
function popupNewPictureClose() {
    popupNewPicture.classList.remove('popup_opened');
}



/* функция заполнения формы профиля*/

let formElement = page.querySelector('.popup__form') 

function formSubmitHandler (evt) {
    evt.preventDefault(); // предотвращает перезагрузку
    profileInfoName.textContent = nameInput.value;
    profileInfoStatus.textContent = jobInput.value;
    popupClose();
}

formElement.addEventListener('submit', formSubmitHandler); 



/* функция заполнения формы нововй карточки*/

const formElementNewPicture = page.querySelector('.popup__form_type_new-picture') 
const inputPlace = page.querySelector('.popup__item_el_place')
const inputSrc = page.querySelector('.popup__item_el_src')

function popupCloseNewPicture() {
  popupNewPicture.classList.remove('popup_opened');
}

function formSubmitHandlerNewPicture (evt) {
  evt.preventDefault(); // предотвращает перезагрузку
  const templateElement = page.querySelector('.template-element').content; // здесь мы создаем новую переменную и наполняем ее содержимым template
  const newElement = templateElement.querySelector('.element').cloneNode(true); // здесь мы создаем новую переменную в которую клонируем часть предыдущей переменной

  newElement.querySelector('.element__image').src = inputSrc.value; // здесь мы ищем часть нашей переменной и наполняем ее новым содержимым 
  newElement.querySelector('.element__text').textContent = inputPlace.value; // здесь мы ищем часть нашей переменной и наполняем ее новым содержимым

  listElements.prepend(newElement); // здесь мы добавляем склонированную переменную с новыми показателями в начало списка с таким карточками
  popupCloseNewPicture()


  // добаили возможность ставить лайки // 
  let like = page.querySelector('.element__like')

  function likeActive(eee) {
    console.log(eee);
    eee.target.classList.toggle('element__like_active')
  }

  like.addEventListener('click', likeActive)
}

formElementNewPicture.addEventListener('submit', formSubmitHandlerNewPicture); 



/* like */

// let like = page.querySelector('.element__like');
// like.addEventListener('click', function (eee){
//   console.log(eee)
// });

// let addButton = page.querySelector('.add-button')
// let popupNewPicture = page.querySelector('.popup_type_new-picture')

// addButton.addEventListener('click', popupNewPictureOpen);
// function popupNewPictureOpen() {
//     popupNewPicture.classList.add('popup_opened');
// }

// --------------------Работает, но только спервым элементом среди созданных внутри HTML -------------------- //

// let like = page.querySelector('.element__like')

// function likeActive() {
//   like.classList.add('element__like_active');
// }

// like.addEventListener('click', likeActive)

// --------------------Работает, но только спервым элементом среди созданных внутри HTML -------------------- //



// ('click', function (like){
//   console.log(like);
//   like.target.classList.toggle('.element__like_active');
// });

// let closeButtonNewPicture = page.querySelector('.popup__close-button_type_new-picture')
// closeButtonNewPicture.addEventListener('click', popupNewPictureClose)
// function popupNewPictureClose() {
//     popupNewPicture.classList.remove('popup_opened');
// }


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

const listElements = page.querySelector('.elements');

function addNewElement(e) {
    const templateElement = page.querySelector('.template-element').content; // здесь мы создаем новую переменную и наполняем ее содержимым template
    const newElement = templateElement.querySelector('.element').cloneNode(true); // здесь мы создаем новую переменную в которую клонируем часть предыдущей переменной

    newElement.querySelector('.element__image').src = e.link; // здесь мы ищем часть нашей переменной и наполняем ее новым содержимым 
    newElement.querySelector('.element__text').textContent = e.name; // здесь мы ищем часть нашей переменной и наполняем ее новым содержимым

    listElements.prepend(newElement); // здесь мы добавляем склонированную переменную с новыми показателями в начало списка с таким карточками
    

    // добаили возможность ставить лайки // 
    let like = page.querySelector('.element__like')

    function likeActive(eee) {
      console.log(eee);
      eee.target.classList.toggle('element__like_active')
    }

    like.addEventListener('click', likeActive)
}

initialCards.forEach(addNewElement);



// ПоПытки

// function addNewElementAgain(inputSrc, inputPlace) {
//   const templateElement = page.querySelector('.template-element').content; // здесь мы создаем новую переменную и наполняем ее содержимым template
//   const newElement = templateElement.querySelector('.element').cloneNode(true); // здесь мы создаем новую переменную в которую клонируем часть предыдущей переменной

//   newElement.querySelector('.element__image').src = inputSrc; // здесь мы ищем часть нашей переменной и наполняем ее новым содержимым 
//   newElement.querySelector('.element__text').textContent = inputPlace; // здесь мы ищем часть нашей переменной и наполняем ее новым содержимым

//   listElements.prepend(newElement); // здесь мы добавляем склонированную переменную с новыми показателями в начало списка с таким карточками
// }

// addNewElementAgain(inputSrc, inputPlace)


// const inputPlace = page.querySelector('.popup__item_el_place')
// const inputSrc = page.querySelector('.popup__item_el_src')
// const templateElement = page.querySelector('.template-element')
// const formElementNewImage = page.querySelector('.popup__form_type_new-picture')

// // popup__item_el_place = element__image
// // popup__item_el_src = element__text

// function handleSubmit(e){
//     e.preventDefault()

//     const place = inputPlace.value
//     const src = inputSrc.value
//     addTodo(place, src)
// } 

// function addTodo(place, src){
//     const newItemElement = templateElement.content.cloneNode(true)
//     newItemElement.querySelector('.element__image').textContent = place;
//     newItemElement.querySelector('.element__text').textContent = src;

//     listElements.prepend(newElement); 
// }

// formElementNewImage.addEventListener('submit', formSubmitHandler); 


/* функция заполнения формы нового элемента*/

// function formSubmitNewPictureHandler (evt) {
//     const templateElement = page.querySelector('.template-element').content;
//     const newElement = templateElement.querySelector('.element').cloneNode(true);

//     evt.preventDefault(); // предотвращает перезагрузку
//     newElement.querySelector('.element__text').textContent = placeInput.value;
//     newElement.querySelector('.element__image').src = srcInput.value;
//     popupNewPictureClose();

//     listElements.prepend(newElement);
// }


// function submitformElementNewPicture() {
//     evt.preventDefault();
//     addNewElement();
//     popupClose();
// } 

// let formElementNewPicture = page.querySelector('.popup__form_type_new-picture')
// formElementNewPicture.addEventListener('submit', addNewElement); 