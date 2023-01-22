let profileEditButton = document.querySelector('.profile__edit-button')
let popup = document.querySelector('.popup')
let profileTitle = document.querySelector('.profile__title')
let profileSubtitle = document.querySelector('.profile__subtitle')
let popupTitle = document.querySelector('.popup__input_target_title')
let popupSubtitle = document.querySelector('.popup__input_target_subtitle')
let formElement = document.querySelector('.popup__form')
let closePopupButton = document.querySelector('.popup__close-button')
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

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