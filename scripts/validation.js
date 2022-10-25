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