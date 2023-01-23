let elementTemplate = document.querySelector('.element-template').content
let elementsContainer = document.querySelector('.elements')

let editProfileButton = document.querySelector('.profile__edit-button')
let profileTitle = document.querySelector('.profile__title')
let profileSubtitle = document.querySelector('.profile__subtitle')
let editProfilePopup = document.querySelector('.popup_target_profile')
let inputTitleProfilePopup = editProfilePopup.querySelector('.popup__input_target_profile-title')
let inputSubtitleProfilePopup = editProfilePopup.querySelector('.popup__input_target_profile-subtitle')
let formProfilePopup = document.querySelector('.popup__form_target_profile')
let buttonCloseProfilePopup = document.querySelector('.popup__close-button_target_profile')

let addElementButton = document.querySelector('.profile__add-button')
let addElementPopup = document.querySelector('.popup_target_element')
let inputTitleElementPopup = addElementPopup.querySelector('.popup__input_target_element-title')
let inputImageElementPopup = addElementPopup.querySelector('.popup__input_target_element-image')
let formElementPopup = document.querySelector('.popup__form_target_element')
let buttonCloseElementPopup = document.querySelector('.popup__close-button_target_element')



const initialElements = [
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

function loadInitialElements(elements) {
  elements.forEach(item => {
    let element = elementTemplate.querySelector('.element').cloneNode(true);
    element.querySelector('.element__title-text').textContent = item.name;
    element.querySelector('.element__image').src = item.link;
    element.querySelector('.element__image').alt = item.name;
    element.querySelector('.element__delete-button').addEventListener('click', evt => {evt.target.parentNode.remove()})
    elementsContainer.prepend(element); 
  })
}
loadInitialElements(initialElements)

function showProfilePopup() {
  editProfilePopup.classList.add('popup_opened')
  inputTitleProfilePopup.value = profileTitle.textContent
  inputSubtitleProfilePopup.value = profileSubtitle.textContent
}
function closeProfilePopup() {
  editProfilePopup.classList.remove('popup_opened')
}
function handleProfileFormSubmit (evt) {
  evt.preventDefault();
  profileTitle.textContent = inputTitleProfilePopup.value
  profileSubtitle.textContent = inputSubtitleProfilePopup.value
  closeProfilePopup()
}

function showElementPopup() {
  addElementPopup.classList.add('popup_opened')
}
function closeElementPopup() {
  addElementPopup.classList.remove('popup_opened')
}
function handleElementFormSubmit (evt) {
  evt.preventDefault()
  let newElement = elementTemplate.querySelector('.element').cloneNode(true)
  newElement.querySelector('.element__title-text').textContent = inputTitleElementPopup.value;
  newElement.querySelector('.element__image').src = inputImageElementPopup.value;
  newElement.querySelector('.element__image').alt = inputTitleElementPopup.value;
  elementsContainer.prepend(newElement); 
  newElement.querySelector('.element__delete-button').addEventListener('click', evt => {evt.target.parentNode.remove()})
  closeElementPopup();
  inputImageElementPopup.value = ''
  inputTitleElementPopup.value = ''
}




editProfileButton.addEventListener('click', showProfilePopup)
buttonCloseProfilePopup.addEventListener('click', closeProfilePopup)
formProfilePopup.addEventListener('submit', handleProfileFormSubmit);

addElementButton.addEventListener('click', showElementPopup)
buttonCloseElementPopup.addEventListener('click', closeElementPopup)
formElementPopup.addEventListener('submit', handleElementFormSubmit)
