/*
  data = {
    text = 'Байкал',
    imageLink = 'https://google.pic/baikal.png'
  }
*/
class Card {
  constructor(data, templateSelector) {
    this._text = data.text;
    this._imageLink = data.imageLink
    this._templateSelector = templateSelector
    /*
    this._cardElement
    */
  }

  _getCardTemplate() {
    const cardTemplate = document.querySelector(this._templateSelector).content.querySelector('.card').cloneNode(true)
    this._cardElement = cardTemplate
    return cardTemplate
  }

  _setEventListeners() {
    console.log("!")
  }

  _createCard() {
    const card = this._getCardTemplate()
    card.querySelector('.card__title-text').textContent = this._text
    card.querySelector('.card__image').src = this._link
    card.querySelector('.card__image').alt = this._text
    
    //card._setEventListeners()

    return card
  }

  getCard() {
    const card = this._createCard()
    return card
  }
}

const test = new Card({
  text : 'test title', 
  imageLink : 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'
}, '.card-template')
// console.log(test)
const testCard = test.getCard()
console.log(testCard)
document.querySelector('.cards').prepend(testCard)