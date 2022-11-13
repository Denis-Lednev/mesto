export class FormValidator {
  constructor(data, formElement) {
    this._data = data;
    this._inputElement = data.inputElement;
    this._inputErrorClass = data.inputErrorClass;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._formElement = formElement;
    this._buttonElement = this._formElement.querySelector(this._data.buttonElement);
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputElement));
  }

  _hasInvalidInput() {
    return this._inputList.some((input) => {
      return !input.validity.valid;
    });
  }

  _toggleSubmitButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.setAttribute("disabled", true);
      this._buttonElement.classList.add(this._inactiveButtonClass);
    } else {
      this._buttonElement.removeAttribute("disabled");
      this._buttonElement.classList.remove(this._inactiveButtonClass);
    }
  }

  _validateInput(input) {
    const errorElement = this._formElement.querySelector(`#${input.id}-error`);
    if (input.checkValidity()) {
      errorElement.textContent = "";
      input.classList.remove(this._inputErrorClass);
    } else {
      errorElement.textContent = input.validationMessage;
      input.classList.add(this._inputErrorClass);
    }
  }

  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._validateInput(inputElement);
        this._toggleSubmitButtonState();
      });
    });
  }

  enableValidation() {
    this._setEventListeners();
  }
}