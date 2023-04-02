export class Card {
  constructor({ data, handleCardClick, handleLikeClick, handleDeleteClick, userId }, templateSelector) {
    this._text = data.name;
    this._imageLink = data.link
    this._likes = data.likes
    this._owner = data.owner
    this._id = data._id
    this._templateSelector = templateSelector
    this._handleCardCLick = handleCardClick
    this._handleLikeClick = handleLikeClick
    this._handleDeleteClick = handleDeleteClick
    this._userId = userId
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
    this._likeButton.addEventListener('click', evt => {
      this._handleLikeClick(evt)
      this._toggleLikeButton()
    })
    this._deleteButton.addEventListener('click', evt => {
      this._handleDeleteClick(this._id, this._card)
    })
  }

  _showDeleteButton() {
    if (this._userId == this._owner._id) {
      this._deleteButton.classList.add('card__delete-button_active')
    }
  }

  _checkCardIsLiked() {
    if (this._likes.map(item => item._id).includes(this._userId)) {
      this._toggleLikeButton()
    }
  }

  _setLikesNumber(likesNumber) {
    this._likesNumber.textContent = likesNumber
  }

  _createCard() {
    this._card = this._getCardTemplate()
    this._cardImage = this._card.querySelector('.card__image')
    this._cardText = this._card.querySelector('.card__title-text')
    this._likeButton = this._card.querySelector('.card__like-button')
    this._deleteButton = this._card.querySelector('.card__delete-button')
    this._likesNumber = this._card.querySelector('.card__likes')
    this._cardImage.src = this._imageLink
    this._cardImage.alt = this._text
    this._cardText.textContent = this._text
    this._likesNumber.textContent = this._likes.length
    this._checkCardIsLiked()
    this._showDeleteButton()
    this._setEventListeners()
    return this._card
  }

  getCard() {
    const card = this._createCard()
    return card
  }
}
