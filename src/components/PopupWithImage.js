import { Popup } from "./Popup";

const popupImage = document.querySelector('.popup_target_image')
const imageText = popupImage.querySelector('.popup__subtitle')
const imageImage = popupImage.querySelector('.popup__image')

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
  }

  open(text, imageLink) {
    imageImage.src = imageLink
    imageImage.alt = text
    imageText.textContent = text
    super.open()
  }
}
