let profileEditButton = document.querySelector('.profile__edit-button')
let popup = document.querySelector('.popup')
let profileTitle = document.querySelector('.profile__title')
let profileSubtitle = document.querySelector('.profile__subtitle')
let popupTitle = document.querySelector('.popup_input_title')
let popupSubtitle = document.querySelector('.popup_input_subtitle')
let formElement = document.querySelector('.popup__form')
let closePopupButton = document.querySelector('.popup__close-button')

function showPopup() {
  popup.classList.add('popup_opened')
  popupTitle.value = profileTitle.textContent
  popupSubtitle.value = profileSubtitle.textContent
}

function closePopup() {
  popup.classList.remove('popup_opened')
}

function handleFormSubmit (evt) {
  evt.preventDefault();
  profileTitle.textContent = popupTitle.value
  profileSubtitle.textContent = popupSubtitle.value
  closePopup()
}

profileEditButton.addEventListener('click', showPopup)
closePopupButton.addEventListener('click', closePopup)
formElement.addEventListener('submit', handleFormSubmit); 