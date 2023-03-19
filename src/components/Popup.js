export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector)
    this._buttonClosePopup = this._popup.querySelector('.popup__close-button')
    this._handleEscClose = this._handleEscClose.bind(this)
  }

  open() {
    this._popup.classList.add('popup_opened')
    document.addEventListener('keydown', this._handleEscClose)
  }

  close() {
    this._popup.classList.remove('popup_opened')
    document.removeEventListener('keydown', this._handleEscClose)
  }

  _handleEscClose(evt) {
    if (evt.key==='Escape' || evt.key==='Esc') {
      this.close()
    }
  }

  _handleOutsideClickClose(evt) {
    if (evt.target.classList.contains('popup')) {
      this.close()
    }
  }

  setEventListeners() {
    this._buttonClosePopup.addEventListener('click', () => {
      this.close()
    })
    this._popup.addEventListener('click', evt => this._handleOutsideClickClose(evt))
  }
}