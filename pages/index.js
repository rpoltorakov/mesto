let profileEditButton = document.querySelector('.profile__edit-button')
let popup = document.querySelector('.popup')
let profileTitle = document.querySelector('.profile__title')
let profileSubtitle = document.querySelector('.profile__subtitle')
let popupTitle = document.querySelector('.popup__title')
let popupSubtitle = document.querySelector('.popup__subtitle')

function showPopup() {
  popup.classList.add('popup_opened')
  popupTitle.value = profileTitle.textContent
  popupSubtitle.value = profileSubtitle.textContent
}

let closePopupButton = document.querySelector('.popup__close-button')

function closePopup() {
  let popup = document.querySelector('.popup')
  popup.classList.remove('popup_opened')
}

let formElement = document.querySelector('.popup__form')
let nameInput = document.querySelector('.popup__title')
let jobInput = document.querySelector('.popup__subtitle')

function handleFormSubmit (evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value
  profileSubtitle.textContent = jobInput.value
  closePopup()
}

profileEditButton.addEventListener('click', showPopup)
closePopupButton.addEventListener('click', closePopup)
formElement.addEventListener('submit', handleFormSubmit); 