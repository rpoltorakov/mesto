import { Popup } from "./Popup";

export class PopupWithOnlyButton extends Popup {
  constructor({popupSelector, callbackSubmit}) {
    super(popupSelector)
    this._callbackSubmit = callbackSubmit
    this._form = this._popup.querySelector('.popup__form')
  }

  setEventListeners() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault()
      this._callbackSubmit(evt)
    })
    super.setEventListeners()
  }
}