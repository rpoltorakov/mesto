import {
  initialCards,
  validationList
} from "../utils/constants.js"
import {Card} from "../components/Card.js"
import { UserInfo } from "../components/UserInfo.js"
import { FormValidator } from "../components/FormValidator.js"
import { PopupWithForm } from "../components/PopupWithForm.js"
import { PopupWithImage } from "../components/PopupWithImage.js"
import {Section} from "../components/Section.js"
import '../pages/index.css'

const editProfileButton = document.querySelector('.profile__edit-button')
const editProfilePopup = document.querySelector('.popup_target_profile')
const inputTitleProfilePopup = editProfilePopup.querySelector('.popup__input_target_profile-title')
const inputSubtitleProfilePopup = editProfilePopup.querySelector('.popup__input_target_profile-subtitle')
const formEditProfilePopup = document.forms['edit-profile']

const addCardButton = document.querySelector('.profile__add-button')
const formAddCardPopup = document.forms['add-card']

const profile = new UserInfo({
  nameSelector: '.profile__title',
  aboutSelector: '.profile__subtitle'
})

const popupEditProfile = new PopupWithForm({
  popupSelector: '.popup_target_profile',
  callbackSubmit: inputValues => profile.setUserInfo(inputValues),
  resetInputErrors: () => editProfileValidator.resetInputErrors()
})

const popupCard = new PopupWithImage('.popup_target_image')

function createCard(data) {
  const card = new Card({
    name: data.name,
    link: data.link,
    handleCardClick: () => {
      popupCard.open(data.name, data.link)
    }
  }, '.card-template')
  return card.getCard()
}


const popupAddCard = new PopupWithForm({
  popupSelector: '.popup_target_card',
  callbackSubmit: data => {
    const newCard = createCard(data)
    cardsSection.addItem(newCard)
  },
  resetInputErrors: () => addCardValidator.resetInputErrors()
})

editProfileButton.addEventListener('click', () => {
  popupEditProfile.open()
  const userInfo = profile.getUserInfo()
  inputTitleProfilePopup.value = userInfo.name
  inputSubtitleProfilePopup.value = userInfo.about
})

const cardsSection = new Section({
  items: initialCards,
  renderer: (card) => {
    cardsSection.addItem(createCard(card))
  }
}, '.cards')
cardsSection.renderItems()



popupCard.setEventListeners()
popupEditProfile.setEventListeners()
popupAddCard.setEventListeners()

const editProfileValidator = new FormValidator(validationList, formEditProfilePopup)
editProfileValidator.enableValidation()

const addCardValidator = new FormValidator(validationList, formAddCardPopup)
addCardValidator.enableValidation()

addCardButton.addEventListener('click', () => {
  addCardValidator.toggleButtonState()
  popupAddCard.open()
})
