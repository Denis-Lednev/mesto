import { page, imagePopup } from "./constants.js";
import { openPopup } from "./openAndClosePopup.js";

class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    const cardImage = this._element.querySelector(".card-image");
    const cardText = this._element.querySelector(".card-text");
    cardImage.src = this._link;
    cardImage.alt = `картинка с названием ${this._name}`;
    cardText.textContent = this._name;

    this._setEventListeners();

    return this._element;
  }

  _like() {
    this._element
      .querySelector(".element__like")
      .classList.toggle("element__like_active");
  }

  _openPopupImage() {
    openPopup(imagePopup);
    const cardTextPopup = page.querySelector(".card-text_popup");
    const cardImagePopup = page.querySelector(".card-image_popup");
    cardImagePopup.src = this._link;
    cardImagePopup.alt = this._name;
    cardTextPopup.textContent = this._name;
  }

  _deleteCard() {
    this._element.remove();
  }

  _setEventListeners() {
    this._element.querySelector(".element__like").addEventListener("click", () => {
        this._like();
      });
    this._element.querySelector(".card-image").addEventListener("click", () => {
      this._openPopupImage();
      });
    this._element.querySelector(".element__trash").addEventListener("click", () => {
        this._deleteCard();
      });
  }
}

export { Card };