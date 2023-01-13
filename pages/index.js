let editProfileButton = document.querySelector('.profile__edit-button')
function showPopup() {
  let popup = document.querySelector('.popup')
  popup.classList.add('popup_opened')
  let popupTitle = document.querySelector('.popup__title')
  let profileTitle = document.querySelector('.profile__title')
  popupTitle.value = profileTitle.innerHTML
  let popupSubtitle = document.querySelector('.popup__subtitle')
  let profileSubtitle = document.querySelector('.profile__subtitle')
  popupSubtitle.value = profileSubtitle.innerHTML
}
editProfileButton.addEventListener('click', showPopup)
let closePopupButton = document.querySelector('.popup__close-button')
function closePopup() {
  let popup = document.querySelector('.popup')
  popup.classList.remove('popup_opened')
}
closePopupButton.addEventListener('click', closePopup)
let formElement = document.querySelector('.popup__form')
let nameInput = document.querySelector('.popup__title')
let jobInput = document.querySelector('.popup__subtitle')
function handleFormSubmit (evt) {
  evt.preventDefault();
  let nameInpitValue = nameInput.value
  let jobInputValue = jobInput.value
  let profileTitle = document.querySelector('.profile__title')
  let profileSubtitle = document.querySelector('.profile__subtitle')
  profileTitle.textContent = nameInpitValue
  profileSubtitle.textContent = jobInputValue
}
formElement.addEventListener('submit', handleFormSubmit); 