const elementTemplate = document.querySelector('.element-template').content
const elementsContainer = document.querySelector('.elements')

const editProfileButton = document.querySelector('.profile__edit-button')
const profileTitle = document.querySelector('.profile__title')
const profileSubtitle = document.querySelector('.profile__subtitle')
const editProfilePopup = document.querySelector('.popup_target_profile')
const inputTitleProfilePopup = editProfilePopup.querySelector('.popup__input_target_profile-title')
const inputSubtitleProfilePopup = editProfilePopup.querySelector('.popup__input_target_profile-subtitle')
const formProfilePopup = document.querySelector('.popup__form_target_profile')
const buttonCloseProfilePopup = document.querySelector('.popup__close-button_target_profile')

const addElementButton = document.querySelector('.profile__add-button')
const addElementPopup = document.querySelector('.popup_target_element')
const inputTitleElementPopup = addElementPopup.querySelector('.popup__input_target_element-title')
const inputImageElementPopup = addElementPopup.querySelector('.popup__input_target_element-image')
const formElementPopup = document.querySelector('.popup__form_target_element')
const buttonCloseElementPopup = document.querySelector('.popup__close-button_target_element')

const imagePopup = document.querySelector('.popup_target_image')
const picImagePopup = imagePopup.querySelector('.popup__image')
const subtitleImagePopup = imagePopup.querySelector('.popup__subtitle')
const buttonCloseImagePopup = imagePopup.querySelector('.popup__close-button_target_image')

const buttonLike = document.querySelector('.element__like-button')

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

function showImagePopup(evt) {
  imagePopup.classList.add('popup_opened')
  picImagePopup.src = evt.target.src
  subtitleImagePopup.textContent = evt.target.alt
}
function closeImagePopup() {
  imagePopup.classList.remove('popup_opened')
}

function toggleLikeButton(evt) {
  evt.target.classList.toggle('element__like-button_pressed')
}

function removeParent(evt) {
  evt.target.parentNode.remove()
}

function loadInitialElements(elements) {
  elements.forEach(item => {
    const element = elementTemplate.querySelector('.element').cloneNode(true);
    element.querySelector('.element__title-text').textContent = item.name;
    element.querySelector('.element__image').src = item.link;
    element.querySelector('.element__image').alt = item.name;
    element.querySelector('.element__image').addEventListener('click', showImagePopup)
    element.querySelector('.element__like-button').addEventListener('click', toggleLikeButton)
    element.querySelector('.element__delete-button').addEventListener('click', removeParent)
    elementsContainer.prepend(element);
  })
}

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
  const newElement = elementTemplate.querySelector('.element').cloneNode(true)
  newElement.querySelector('.element__title-text').textContent = inputTitleElementPopup.value;
  newElement.querySelector('.element__image').src = inputImageElementPopup.value;
  newElement.querySelector('.element__image').alt = inputTitleElementPopup.value;
  elementsContainer.prepend(newElement);
  newElement.querySelector('.element__like-button').addEventListener('click', toggleLikeButton)
  newElement.querySelector('.element__delete-button').addEventListener('click', removeParent)
  closeElementPopup();
  inputImageElementPopup.value = ''
  inputTitleElementPopup.value = ''
}

loadInitialElements(initialElements)

editProfileButton.addEventListener('click', showProfilePopup)
buttonCloseProfilePopup.addEventListener('click', closeProfilePopup)
formProfilePopup.addEventListener('submit', handleProfileFormSubmit);

addElementButton.addEventListener('click', showElementPopup)
buttonCloseElementPopup.addEventListener('click', closeElementPopup)
formElementPopup.addEventListener('submit', handleElementFormSubmit)

buttonCloseImagePopup.addEventListener('click', closeImagePopup)