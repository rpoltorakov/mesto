const elementTemplate = document.querySelector('.element-template').content.querySelector('.element')
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

function openPopup(popupNode) {
  popupNode.classList.add('popup_opened')
}

function closePopup(popupNode) {
  popupNode.classList.remove('popup_opened')
}

function showImagePopup(evt) {
  openPopup(imagePopup)
  picImagePopup.src = evt.target.src
  picImagePopup.alt = 'Карточка в полный размер'
  subtitleImagePopup.textContent = evt.target.parentElement.querySelector('.element__title').textContent
}
function closeImagePopup() {
  closePopup(imagePopup)
}

function toggleLikeButton(evt) {
  evt.target.classList.toggle('element__like-button_pressed')
}

function removeCard(evt) {
  evt.target.parentElement.remove()
}

function createCard(name, link) {
  const element = elementTemplate.cloneNode(true)
  element.querySelector('.element__title-text').textContent = name;
  const elementImage = element.querySelector('.element__image')
  elementImage.src = link;
  elementImage.alt = name;
  elementImage.addEventListener('click', showImagePopup)
  element.querySelector('.element__like-button').addEventListener('click', toggleLikeButton)
  element.querySelector('.element__delete-button').addEventListener('click', removeCard)
  elementsContainer.prepend(element);
}

function loadInitialElements(elements) {
  elements.forEach(item => {
    createCard(item.name, item.link)
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

function showElementPopup() {
  openPopup(addElementPopup)
}
function closeElementPopup() {
  closePopup(addElementPopup)
}
function handleElementFormSubmit (evt) {
  evt.preventDefault()
  createCard(inputTitleElementPopup.value, inputImageElementPopup.value)
  closeElementPopup();
  formElementPopup.reset()
}

loadInitialElements(initialElements)

editProfileButton.addEventListener('click', showProfilePopup)
buttonCloseProfilePopup.addEventListener('click', closeProfilePopup)
formProfilePopup.addEventListener('submit', handleProfileFormSubmit);

addElementButton.addEventListener('click', showElementPopup)
buttonCloseElementPopup.addEventListener('click', closeElementPopup)
formElementPopup.addEventListener('submit', handleElementFormSubmit)

buttonCloseImagePopup.addEventListener('click', closeImagePopup)