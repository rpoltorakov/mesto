import {
  initialCards,
  validationList
} from "./constants.js"
import {Card} from "./Card.js"
import { FormValidator } from "./FormValidator.js"

const cardsContainer = document.querySelector('.cards')

const editProfileButton = document.querySelector('.profile__edit-button')
const profileTitle = document.querySelector('.profile__title')
const profileSubtitle = document.querySelector('.profile__subtitle')
const editProfilePopup = document.querySelector('.popup_target_profile')
const inputTitleProfilePopup = editProfilePopup.querySelector('.popup__input_target_profile-title')
const inputSubtitleProfilePopup = editProfilePopup.querySelector('.popup__input_target_profile-subtitle')
const formEditProfilePopup = document.forms['edit-profile']
const buttonCloseProfilePopup = document.querySelector('.popup__close-button_target_profile')

const addCardButton = document.querySelector('.profile__add-button')
const addCardPopup = document.querySelector('.popup_target_card')
const inputTitleAddCardPopup = addCardPopup.querySelector('.popup__input_target_card-title')
const inputImageLinkAddCardPopup = addCardPopup.querySelector('.popup__input_target_card-image')
const formAddCardPopup = document.forms['add-card']
const buttonCloseAddCardPopup = addCardPopup.querySelector('.popup__close-button_target_card')

const imagePopup = document.querySelector('.popup_target_image')
const buttonCloseImagePopup = imagePopup.querySelector('.popup__close-button_target_image')

export function closePopup(popupNode) {
  popupNode.classList.remove('popup_opened')
  document.removeEventListener('keydown', closePopupByEsc)
}

export function closePopupByEsc(evt) {
  if (evt.key==='Escape' || evt.key==='Esc') {
    const openedPopup = document.querySelector('.popup_opened')
    closePopup(openedPopup)
  }
}

export function openPopup(popupElement) {
  popupElement.classList.add('popup_opened')
  document.addEventListener('keydown', closePopupByEsc)
}

function closeImagePopup() {
  closePopup(imagePopup)
}

function createCard(data) {
  const card = new Card({
    text: data.name,
    imageLink: data.link
  }, '.card-template')
  return card.getCard()
}

function loadInitialCards(elements) {
  elements.forEach(item => {
    const card = createCard(item)
    cardsContainer.prepend(card)
  })

}

function showProfilePopup() {
  openPopup(editProfilePopup)
  inputTitleProfilePopup.value = profileTitle.textContent
  inputSubtitleProfilePopup.value = profileSubtitle.textContent
}
function closeProfilePopup() {
  closePopup(editProfilePopup)
}
function handleProfileFormSubmit (evt) {
  evt.preventDefault();
  profileTitle.textContent = inputTitleProfilePopup.value
  profileSubtitle.textContent = inputSubtitleProfilePopup.value
  closeProfilePopup()
}

function showAddCardPopup() {
  openPopup(addCardPopup)
}
function closeAddCardPopup() {
  closePopup(addCardPopup)
}
function handleAddCardFormSubmit (evt) {
  evt.preventDefault()
  const newCard = createCard({
    name: inputTitleAddCardPopup.value,
    link: inputImageLinkAddCardPopup.value
  })
  cardsContainer.prepend(newCard)
  closeAddCardPopup();
  formAddCardPopup.reset()
  addCardValidator.toggleButtonState()
}

function closePopupByOutsideClick(evt, closeFunction) {
  if (evt.target.classList.contains('popup')) {
    closeFunction()
  }
}

loadInitialCards(initialCards)

const editProfileValidator = new FormValidator(validationList, formEditProfilePopup)
editProfileValidator.enableValidation()

const addCardValidator = new FormValidator(validationList, formAddCardPopup)
addCardValidator.enableValidation()

editProfileButton.addEventListener('click', showProfilePopup)
editProfilePopup.addEventListener('click', evt => closePopupByOutsideClick(evt, closeProfilePopup))
buttonCloseProfilePopup.addEventListener('click', closeProfilePopup)
formEditProfilePopup.addEventListener('submit', handleProfileFormSubmit)

addCardButton.addEventListener('click', showAddCardPopup)
addCardPopup.addEventListener('click', evt => closePopupByOutsideClick(evt, closeAddCardPopup))
buttonCloseAddCardPopup.addEventListener('click', closeAddCardPopup)
formAddCardPopup.addEventListener('submit', (evt) => {handleAddCardFormSubmit(evt)})

buttonCloseImagePopup.addEventListener('click', closeImagePopup)
imagePopup.addEventListener('click', evt => closePopupByOutsideClick(evt, closeImagePopup))
