import {initialElements} from "./constants.js"
import {Card} from "./Card.js"

const elementTemplate = document.querySelector('.card-template').content.querySelector('.card')
const elementsContainer = document.querySelector('.cards')

const editProfileButton = document.querySelector('.profile__edit-button')
const profileTitle = document.querySelector('.profile__title')
const profileSubtitle = document.querySelector('.profile__subtitle')
const editProfilePopup = document.querySelector('.popup_target_profile')
const inputTitleProfilePopup = editProfilePopup.querySelector('.popup__input_target_profile-title')
const inputSubtitleProfilePopup = editProfilePopup.querySelector('.popup__input_target_profile-subtitle')
const formProfilePopup = document.forms['edit-profile']
const buttonCloseProfilePopup = document.querySelector('.popup__close-button_target_profile')

const addCardButton = document.querySelector('.profile__add-button')
const addCardPopup = document.querySelector('.popup_target_card')
const inputTitleElementPopup = addCardPopup.querySelector('.popup__input_target_card-title')
const inputImageElementPopup = addCardPopup.querySelector('.popup__input_target_card-image')
const formElementPopup = document.forms['add-card']
const buttonCloseElementPopup = document.querySelector('.popup__close-button_target_card')

const imagePopup = document.querySelector('.popup_target_image')
const picImagePopup = imagePopup.querySelector('.popup__image')
const subtitleImagePopup = imagePopup.querySelector('.popup__subtitle')
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

// function showImagePopup(evt) {
//   openPopup(imagePopup)
//   picImagePopup.src = evt.target.src
//   picImagePopup.alt = 'Карточка в полный размер'
//   subtitleImagePopup.textContent = evt.target.closest('.card').querySelector('.card__title').textContent
// }

function closeImagePopup() {
  closePopup(imagePopup)
}

// function createCard(name, link) {
//   const element = elementTemplate.cloneNode(true)
//   element.querySelector('.card__title-text').textContent = name;
//   const elementImage = element.querySelector('.card__image')
//   elementImage.src = link;
//   elementImage.alt = name;
//   elementImage.addEventListener('click', showImagePopup)
//   element.querySelector('.card__like-button').addEventListener('click', toggleLikeButton)
//   element.querySelector('.card__delete-button').addEventListener('click', removeCard)
//   return element
// }

// function renderCard(name, link) {
//   const newCard = createCard(name, link)
//   elementsContainer.prepend(newCard);
// }

function loadInitialElements(elements) {
  elements.forEach(item => {
    const card = new Card({
      text: item.name,
      imageLink: item.link
    }, '.card-template')
    const cardd = card.getCard()
    elementsContainer.prepend(cardd)
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
function handleElementFormSubmit (evt) {
  evt.preventDefault()
  renderCard(inputTitleElementPopup.value, inputImageElementPopup.value)
  closeAddCardPopup();
  formElementPopup.reset()
  const saveButton = evt.submitter
  saveButton.disabled = true
  saveButton.classList.add('popup__save-button_inactive')
}

function checkTargetIsPopup(evt) {
  return Array.from(evt.target.classList).includes('popup')
}
function closePopupByOutsideClick(evt, closeFunction) {
  if (checkTargetIsPopup(evt)) {
    closeFunction()
  }
}

loadInitialElements(initialElements)

editProfileButton.addEventListener('click', showProfilePopup)
editProfilePopup.addEventListener('click', evt => closePopupByOutsideClick(evt, closeProfilePopup))
buttonCloseProfilePopup.addEventListener('click', closeProfilePopup)
formProfilePopup.addEventListener('submit', handleProfileFormSubmit)

addCardButton.addEventListener('click', showAddCardPopup)
addCardPopup.addEventListener('click', evt => closePopupByOutsideClick(evt, closeAddCardPopup))
// buttonCloseElementPopup.addEventListener('click', closeElementPopup)
// formElementPopup.addEventListener('submit', (evt) => {handleElementFormSubmit(evt)})

buttonCloseImagePopup.addEventListener('click', closeImagePopup)
imagePopup.addEventListener('click', evt => closePopupByOutsideClick(evt, closeImagePopup))