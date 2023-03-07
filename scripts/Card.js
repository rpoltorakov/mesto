import {
  openPopup,
} from './index.js'

const cardPopup = document.querySelector('.popup_target_image')
const picImagePopup = cardPopup.querySelector('.popup__image')
const subtitleImagePopup = cardPopup.querySelector('.popup__subtitle')

export class Card {
  constructor(data, templateSelector) {
    this._text = data.text;
    this._imageLink = data.imageLink
    this._templateSelector = templateSelector
  }

  _getCardTemplate() {
    const cardTemplate = document.querySelector(this._templateSelector).content.querySelector('.card').cloneNode(true)
    return cardTemplate
  }

  _showCardPopup() {
  openPopup(cardPopup)
  picImagePopup.src = this._imageLink
  picImagePopup.alt = 'Карточка в полный размер'
  subtitleImagePopup.textContent = this._text
}

  _toggleLikeButton() {
    this._likeButton.classList.toggle('card__like-button_pressed')
  }

  _removeCard() {
    this._card.remove()
    this._card = null
  }

  _setEventListeners() {
    this._cardImage.addEventListener('click', evt => this._showCardPopup(evt))
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
