import { Popup } from "./Popup";

export class PopupWithForm extends Popup {
  constructor({popupSelector, callbackSubmit, resetInputErrors}) {
    super(popupSelector)
    this._callbackSubmit = callbackSubmit
    this._form = this._popup.querySelector('.popup__form')
    this._inputs = Array.from(this._form.querySelectorAll('.popup__input'))
    this._resetInputErrors = resetInputErrors
  }

  close() {
    this._form.reset()
    this._resetInputErrors()
    super.close()
  }

  _getInputValues() {
    this._inputsValues = {}
    this._inputs.forEach(input => {
      this._inputsValues[input.name] = input.value
    })
    return this._inputsValues
  }

  setEventListeners() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault()
      this._callbackSubmit(this._getInputValues())
      this.close()
    })
    super.setEventListeners()
  }
}