export class Card {
  constructor({ text, imageLink, handleCardClick }, templateSelector) {
    this._text = text;
    this._imageLink = imageLink
    this._templateSelector = templateSelector
    this._handleCardCLick = handleCardClick
  }

  _getCardTemplate() {
    const cardTemplate = document.querySelector(this._templateSelector).content.querySelector('.card').cloneNode(true)
    return cardTemplate
  }

  _toggleLikeButton() {
    this._likeButton.classList.toggle('card__like-button_pressed')
  }

  _removeCard() {
    this._card.remove()
    this._card = null
  }

  _setEventListeners() {
    this._cardImage.addEventListener('click', () => this._handleCardCLick())
    this._likeButton.addEventListener('click', evt => this._toggleLikeButton(evt))
    this._deleteButton.addEventListener('click', evt => this._removeCard(evt))
  }

  _createCard() {
    this._card = this._getCardTemplate()
    this._cardImage = this._card.querySelector('.card__image')
    this._cardText = this._card.querySelector('.card__title-text')
    this._likeButton = this._card.querySelector('.card__like-button')
    this._deleteButton = this._card.querySelector('.card__delete-button')
    this._cardImage.src = this._imageLink
    this._cardImage.alt = this._text
    this._cardText.textContent = this._text
    this._setEventListeners()
    return this._card
  }

  getCard() {
    const card = this._createCard()
    return card
  }
}
