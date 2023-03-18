export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector)
    this._buttonClosePopup = this._popup.querySelector('.popup__close-button')
  }

  open() {
    this._popup.classList.add('popup_opened')
    document.addEventListener('keydown', (evt) => this._handleEscClose(evt))
  }

  close() {
    this._popup.classList.remove('popup_opened')
    document.removeEventListener('keydown', this._handleEscClose)
  }

  _handleEscClose(evt) {
    if (evt.key==='Escape' || evt.key==='Esc') {
      this._openedPopup = document.querySelector('.popup_opened')
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