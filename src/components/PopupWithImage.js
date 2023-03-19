import { Popup } from "./Popup";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
    this._popupImage = this._popup.querySelector('.popup__image')
    this._popupText = this._popup.querySelector('.popup__subtitle')
  }

  open(name, link) {
    this._popupImage.src = link
    this._popupImage.alt = name
    this._popupText.textContent = name
    super.open()
  }
}
