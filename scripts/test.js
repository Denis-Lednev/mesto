const page = document.querySelector('.page');



/* кнопка открытия редактирования формы профиля*/

const popup = page.querySelector('.popup');
const editButton = page.querySelector('.profile-info__edit-button');
const nameInput = page.querySelector('.popup__item_el_name') 
const jobInput = page.querySelector('.popup__item_el_status') 
const profileInfoName = page.querySelector('.profile-info__name');
const profileInfoStatus = page.querySelector('.profile-info__status');

editButton.addEventListener('click', popupOpen)
function popupOpen() {
    popup.classList.add('popup_opened');
    nameInput.value = profileInfoName.textContent
    jobInput.value = profileInfoStatus.textContent
}



/* кнопка открытия редактирования формы нового элемента*/

const addButton = page.querySelector('.add-button')
const popupNewPicture = page.querySelector('.popup_type_new-picture')

addButton.addEventListener('click', popupNewPictureOpen);
function popupNewPictureOpen() {
    popupNewPicture.classList.add('popup_opened');
}



/* кнопка закрытия редактирования формы профиля и формы нового элемента*/

const closeButton = page.querySelector('.close-button');
const closeButtonNewPicture = page.querySelector('.close-button_type_new-picture')

closeButton.addEventListener('click', popupClose)
closeButtonNewPicture.addEventListener('click', popupClose)

function popupClose() {
    popup.classList.remove('popup_opened');
    popupNewPicture.classList.remove('popup_opened');
}





/* функция заполнения формы профиля*/

const formElement = page.querySelector('.popup__form') 

function formSubmitHandler (evt) {
    evt.preventDefault(); // предотвращает перезагрузку
    profileInfoName.textContent = nameInput.value;
    profileInfoStatus.textContent = jobInput.value;
    popupClose();
}

formElement.addEventListener('submit', formSubmitHandler); 



/* функция заполнения формы новой карточки*/

const formElementNewPicture = page.querySelector('.popup__form_type_new-picture') 
const inputPlace = page.querySelector('.popup__item_el_place')
const inputSrc = page.querySelector('.popup__item_el_src')

function popupCloseNewPicture() {
  popupNewPicture.classList.remove('popup_opened');
}


function formSubmitHandlerNewPicture (evt) {
  evt.preventDefault(); // предотвращает перезагрузку
  const templateElement = page.querySelector('.template-element').content; 
  const newElement = templateElement.querySelector('.element').cloneNode(true); 

  newElement.querySelector('.element__image').src = inputSrc.value; 
  newElement.querySelector('.element__text').textContent = inputPlace.value;

  listElements.prepend(newElement); 
  popupCloseNewPicture()

  // добаили возможность удялть элементы // 

  newElement.querySelector('.element__trash').addEventListener('click', function(evt){
    const element = evt.target.closest('.element')
    element.remove()
  })

  // добаили возможность ставить лайки // 
  const like = page.querySelector('.element__like')

  function likeActive(eee) {
    console.log(eee);
    eee.target.classList.toggle('element__like_active')
  }

  like.addEventListener('click', likeActive)

   // реализуем попап // 
    
   newElement.querySelector('.element__image_in-popup').src = e.link;
   newElement.querySelector('.element__text_in-popup').textContent = e.name;
   const elementInPopup = page.querySelector('.element__in-popup')

   newElement.querySelector('.element__image').addEventListener('click', function(evt){
     elementInPopup.classList.add('element__in-popup_active')
   })

   const closeButtonImagePopup = page.querySelector('.close-button_type_image-popup')
   closeButtonImagePopup.addEventListener('click', function(evt){
     elementInPopup.classList.remove('element__in-popup_active')
   })


}

formElementNewPicture.addEventListener('submit', formSubmitHandlerNewPicture); 



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
    const templateElement = page.querySelector('.template-element').content; 
    const newElement = templateElement.querySelector('.element').cloneNode(true); 

    newElement.querySelector('.element__image').src = e.link; 
    newElement.querySelector('.element__text').textContent = e.name;

      
    // newElement.querySelector('.element__image').src = inputSrc.value; 
    // newElement.querySelector('.element__text').textContent = inputPlace.value; 


    listElements.prepend(newElement);
    

    
  // добаили возможность удялть элементы // 

  newElement.querySelector('.element__trash').addEventListener('click', function(evt){
    const element = evt.target.closest('.element')
    element.remove()
  })


    // добаили возможность ставить лайки // 
    const like = page.querySelector('.element__like')

    function likeActive(eee) {
      console.log(eee);
      eee.target.classList.toggle('element__like_active')
    }

    like.addEventListener('click', likeActive)

    // реализуем попап // 
    
    newElement.querySelector('.element__image_in-popup').src = e.link;
    newElement.querySelector('.element__text_in-popup').textContent = e.name;
    const elementInPopup = page.querySelector('.element__in-popup')

    newElement.querySelector('.element__image').addEventListener('click', function(evt){
      elementInPopup.classList.add('element__in-popup_active')
    })

    const closeButtonImagePopup = page.querySelector('.close-button_type_image-popup')
    closeButtonImagePopup.addEventListener('click', function(evt){
      elementInPopup.classList.remove('element__in-popup_active')
    })
}

initialCards.forEach(addNewElement);


// пробуем сделать всякий треш (треш-контейнер) //


// ПоПытки

// function addNewElementAgainQ(inputSrc, inputPlace) {
//   const templateElement = page.querySelector('.template-element').content; // здесь мы создаем новую переменную и наполняем ее содержимым template
//   const newElement = templateElement.querySelector('.element').cloneNode(true); // здесь мы создаем новую переменную в которую клонируем часть предыдущей переменной

//   newElement.querySelector('.element__image').src = inputSrc; // здесь мы ищем часть нашей переменной и наполняем ее новым содержимым 
//   newElement.querySelector('.element__text').textContent = inputPlace; // здесь мы ищем часть нашей переменной и наполняем ее новым содержимым

//   listElements.prepend(newElement); // здесь мы добавляем склонированную переменную с новыми показателями в начало списка с таким карточками
// }

// addNewElementAgain(123, йцуу)


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

// const formElementNewPicture = page.querySelector('.popup__form_type_new-picture')
// formElementNewPicture.addEventListener('submit', addNewElement); 


// Всплывающий попап




/* like */

// const like = page.querySelector('.element__like');
// like.addEventListener('click', function (eee){
//   console.log(eee)
// });

// const addButton = page.querySelector('.add-button')
// const popupNewPicture = page.querySelector('.popup_type_new-picture')

// addButton.addEventListener('click', popupNewPictureOpen);
// function popupNewPictureOpen() {
//     popupNewPicture.classList.add('popup_opened');
// }

// --------------------Работает, но только спервым элементом среди созданных внутри HTML -------------------- //

// const like = page.querySelector('.element__like')

// function likeActive() {
//   like.classList.add('element__like_active');
// }

// like.addEventListener('click', likeActive)

// --------------------Работает, но только спервым элементом среди созданных внутри HTML -------------------- //



// ('click', function (like){
//   console.log(like);
//   like.target.classList.toggle('.element__like_active');
// });

// const closeButtonNewPicture = page.querySelector('.close-button_type_new-picture')
// closeButtonNewPicture.addEventListener('click', popupNewPictureClose)
// function popupNewPictureClose() {
//     popupNewPicture.classList.remove('popup_opened');
// }

