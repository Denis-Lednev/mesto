import { page, imagePopup, cardTextPopup, cardImagePopup } from "./constants.js";
import { openPopup } from "./openAndClosePopup.js";

// export const buttonEditProfile = page.querySelector(".profile-info__edit-button"); // editButton
// export const buttonsClosePopup = document.querySelectorAll(".close-button"); // closeButtons
// export const buttonAddNewCard = page.querySelector(".add-button"); // addButton

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
    this._likeButton = this._element.querySelector(".element__like")
    this._cardImage = this._element.querySelector(".card-image");
    this._cardText = this._element.querySelector(".card-text");

    this._cardImage.src = this._link;
    this._cardImage.alt = `картинка с названием ${this._name}`;
    this._cardText.textContent = this._name;

    this._setEventListeners();
    return this._element;
  }

  _like() {
    this._likeButton.classList.toggle("element__like_active");
  }

  _openPopupImage() { // Такова последовательность, потому что лучше сначала заполнять модальное окно данными, а затем уже открывать. Так пользователь гарантированно получит заполненный попап.
    cardImagePopup.src = this._link;
    cardImagePopup.alt = this._name;
    cardTextPopup.textContent = this._name;
    openPopup(imagePopup);
  }

  _deleteCard() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._like();
      });
    this._cardImage.addEventListener("click", () => {
      this._openPopupImage();
      });
    this._element.querySelector(".element__trash").addEventListener("click", () => {
      this._deleteCard();
      });
  }
}

export { Card };