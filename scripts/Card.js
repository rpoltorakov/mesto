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

  _showCardPopup(evt) {
  openPopup(cardPopup)
  picImagePopup.src = evt.target.src
  picImagePopup.alt = 'Карточка в полный размер'
  subtitleImagePopup.textContent = evt.target.closest('.card').querySelector('.card__title').textContent
}

  _toggleLikeButton(evt) {
    evt.target.classList.toggle('card__like-button_pressed')
  }

  _removeCard(evt) {
    evt.target.closest('.card').remove()
  }

  _setEventListeners() {
    this._card.querySelector('.card__image').addEventListener('click', evt => this._showCardPopup(evt))
    this._card.querySelector('.card__like-button').addEventListener('click', evt => this._toggleLikeButton(evt))
    this._card.querySelector('.card__delete-button').addEventListener('click', evt => this._removeCard(evt))
  }

  _createCard() {
    this._card = this._getCardTemplate()
    this._card.querySelector('.card__title-text').textContent = this._text
    this._card.querySelector('.card__image').src = this._imageLink
    this._card.querySelector('.card__image').alt = this._text
    
    this._setEventListeners()

    return this._card
  }

  getCard() {
    const card = this._createCard()
    return card
  }
}
