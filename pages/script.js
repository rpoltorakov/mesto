let editProfileButton = document.querySelector('.profile__edit-button')
function showPopup() {
  document.querySelector('.popup').classList.add('popup_opened')
  document.querySelector('.popup__title').value = document.querySelector('.profile__title').innerHTML
  document.querySelector('.popup__subtitle').value = document.querySelector('.profile__subtitle').innerHTML
}
editProfileButton.addEventListener('click', showPopup)
let closePopupButton = document.querySelector('.popup__close-button')
function closePopup() {
  document.querySelector('.popup').classList.remove('popup_opened')
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