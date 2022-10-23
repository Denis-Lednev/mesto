const settings = {
  inputElement: '.popup__item',
  formElement: '.popup__form',
  buttonElement: '.popup__submit-button',
  inputErrorClass: 'popup__item_error',
  inactiveButtonClass: 'popup__submit-button_disabled',
}


const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};
  
const toggleSubmitButtonState = (inputList, buttonElement, settings) => {
  if(hasInvalidInput(inputList)){
    buttonElement.setAttribute("disabled", true)
    buttonElement.classList.add(settings.inactiveButtonClass)
  } else {
    buttonElement.removeAttribute("disabled")
    buttonElement.classList.remove(settings.inactiveButtonClass)
  }
}
  
const validateInput = (formElement, inputElement, settings) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`) 
  if(inputElement.checkValidity()){
    errorElement.textContent = '';
    inputElement.classList.remove(settings.inputErrorClass)
  } else {
    errorElement.textContent = inputElement.validationMessage
    inputElement.classList.add(settings.inputErrorClass)
  }
}

// Навешивает обработчики на все инпуты в одной (можно в конкретной) форме
// оно работает, ОНО РАБОТАЕТ!
const setEventListeners = (formElement, settings) => {
  const inputList = Array.from(formElement.querySelectorAll(settings.inputElement))
  const buttonElement = formElement.querySelector(settings.buttonElement);
  // buttonElement.addEventListener('click', function () {
  //   console.log('Hello') 
  // }) // это мы нашли баттон в определнной форме и навешали на него слушатель
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function (){
      validateInput(formElement, inputElement, settings);
      toggleSubmitButtonState(inputList, buttonElement, settings);
    })
  })
}
  
// делает тоже самое, что и предыдущая функция, но теперь навешивает обработчик на каждую форму, в этой формуле мы фактически помещаем обработчик из прошлой функции в каждую форму
  
const enableValidation = (settings) => {
  const formList = Array.from(document.querySelectorAll(settings.formElement));
  formList.forEach((formElement) => {
    setEventListeners(formElement, settings);
  })
}
  
enableValidation(settings)
































//   const settings = {
//     inputElement: '.popup__item',
//     formElement: '.popup__form',
//     buttonElement: '.popup__submit-button',
//     inputErrorClass: 'popup__item_error',
//     inactiveButtonClass: 'popup__submit-button_disabled',
//     footerAuthor: '.footer__author'
//   }

// const qwerrty = document.querySelector(settings.footerAuthor)
// qwerrty.addEventListener('click', function () {
//       console.log('12345')
// })
  


// const hasInvalidInput = (inputList) => {
//     return inputList.some((inputElement) => {
//       return !inputElement.validity.valid;
//     })
//   };
  
//   const toggleSubmitButtonState = (inputList, buttonElement, settings) => {
//     if(hasInvalidInput(inputList)){
//       buttonElement.setAttribute("disabled", true)
//       buttonElement.classList.add(settings.inactiveButtonClass)
//     } else {
//       buttonElement.removeAttribute("disabled")
//       buttonElement.classList.remove(settings.inactiveButtonClass)
//     }
//   }
  
//   const validateInput = (formElement, inputElement) => {
//     const errorElement = formElement.querySelector(`#${inputElement.id}-error`) 
//     if(inputElement.checkValidity()){
//       errorElement.textContent = '';
//       inputElement.classList.remove('popup__item_error')
//     } else {
//       errorElement.textContent = inputElement.validationMessage
//       inputElement.classList.add('popup__item_error')
//     }
//   }
  


//   // Навешивает обработчики на все инпуты в одной (можно в конкретной) форме
//   // ОНО РАБОТАЕТ!
//   const setEventListeners = (formElement) => {
//     const inputList = Array.from(formElement.querySelectorAll('.popup__item'))
//     const buttonElement = formElement.querySelector('.popup__submit-button');
//     buttonElement.addEventListener('click', function () {
//       console.log('Hello') 
//     }) // это мы нашли баттон в определнной форме и навешали на него слушатель
//     inputList.forEach((inputElement) => {
//       inputElement.addEventListener('input', function (){
//         validateInput(formElement, inputElement, settings);
//         toggleSubmitButtonState(inputList, buttonElement, settings);
//       })
//     })
//   }
  
//   // делает тоже самое, что и предыдущая функция, но теперь навешивает обработчик на каждую форму, в этой формуле мы фактически помещаем обработчик из прошлой функции в каждую форму
  
//   const enableValidation = (settings) => {
//     const formList = Array.from(document.querySelectorAll(settings.formElement));
//     formList.forEach((formElement) => {
//       setEventListeners(formElement);
//     })
//   }
  
//   enableValidation(settings)













































// // const nameInput = page.querySelector('.popup__item_el_name') 
// // const jobInput = page.querySelector('.popup__item_el_status') 
// // const inputPlace = cardForm.querySelector('.popup__item_el_place')
// // const inputSrc = cardForm.querySelector('.popup__item_el_src')
// // const profileForm = page.querySelector('.popup__form_type_profile') 
// // const cardForm = page.querySelector('.popup__form_type_new-card') 

// // 1. создать спан и получить в них ошибки, связав их с инпутами форм 
// // 2. сделать нормальный гэп между спан и инпут
// // 3. сделать проверку сразу, а не по инпуту.


// const settings = {
//     inputElement: '.popup__item',
//     formElement: '.popup__form',
//     buttonElement: '.popup__submit-button'
//   }

// const hasInvalidInput = (inputList) => {
//     return inputList.some((inputElement) => {
//       return !inputElement.validity.valid;
//     })
//   };
  
//   const toggleSubmitButtonState = (inputList, buttonElement) => {
//     if(hasInvalidInput(inputList)){
//       buttonElement.setAttribute("disabled", true)
//       buttonElement.classList.add('popup__submit-button_disabled')
//     } else {
//       buttonElement.removeAttribute("disabled")
//       buttonElement.classList.remove('popup__submit-button_disabled')
//     }
//   }
  
//   const validateInput = (formElement, inputElement) => {
//     const errorElement = formElement.querySelector(`#${inputElement.id}-error`) 
//     if(inputElement.checkValidity()){
//       errorElement.textContent = '';
//       inputElement.classList.remove('popup__item_error')
//     } else {
//       errorElement.textContent = inputElement.validationMessage
//       inputElement.classList.add('popup__item_error')
//     }
//   }
  
  
//   // Навешивает обработчики на все инпуты в одной (можно в конкретной) форме
//   // ОНО РАБОТАЕТ!
//   const setEventListeners = (formElement) => {
//     const inputList = Array.from(formElement.querySelectorAll('.popup__item'))
//     const buttonElement = formElement.querySelector('.popup__submit-button');
//     buttonElement.addEventListener('click', function () {
//       console.log('Hello') 
//     }) // это мы нашли баттон в определнной форме и навешали на него слушатель
//     inputList.forEach((inputElement) => {
//       inputElement.addEventListener('input', function (){
//         validateInput(formElement, inputElement);
//         toggleSubmitButtonState(inputList, buttonElement);
//       })
//     })
//   }
  
//   // делает тоже самое, что и предыдущая функция, но теперь навешивает обработчик на каждую форму, в этой формуле мы фактически помещаем обработчик из прошлой функции в каждую форму
  
//   const enableValidation = (settings) => {
//     const formList = Array.from(document.querySelectorAll(settings.formElement));
//     formList.forEach((formElement) => {
//       setEventListeners(formElement);
//     })
//   }
  
//   enableValidation(settings)