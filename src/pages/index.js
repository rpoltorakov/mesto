import { validationList } from "../utils/constants.js"
import {Card} from "../components/Card.js"
import { UserInfo } from "../components/UserInfo.js"
import { FormValidator } from "../components/FormValidator.js"
import { PopupWithForm } from "../components/PopupWithForm.js"
import { PopupWithImage } from "../components/PopupWithImage.js"
import {Section} from "../components/Section.js"
import '../pages/index.css'
import { Api } from "../components/Api.js"
import { PopupWithConfirmation } from "../components/PopupWithConfirmation.js"
import { renderLoad } from "../utils/utils.js"

const editProfileButton = document.querySelector('.profile__edit-button')
const editProfilePopup = document.querySelector('.popup_target_profile')
const inputTitleProfilePopup = editProfilePopup.querySelector('.popup__input_target_profile-title')
const inputSubtitleProfilePopup = editProfilePopup.querySelector('.popup__input_target_profile-subtitle')
const formEditProfilePopup = document.forms['edit-profile']

const addCardButton = document.querySelector('.profile__add-button')
const formAddCardPopup = document.forms['add-card']

const formChangeAvatarPopup = document.forms['change-avatar']
const formConfirmDeleteCard = document.forms['delete-confirm']

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-62',
  headers: {
      authorization: '70ecb372-44ad-4ddf-8a1a-4858bf5c38d9',
      'Content-type': 'application/json'
  }
});

const profile = new UserInfo({
  nameSelector: '.profile__title',
  aboutSelector: '.profile__subtitle',
  avatarSelector: '.profile__avatar'
})

let userId = ''
const userInfoPromise = api.getUserData()

let cardId = ''
let targetCard

const popupEditProfile = new PopupWithForm({
  popupSelector: '.popup_target_profile',
  callbackSubmit: inputValues => {
    renderLoad(true, formEditProfilePopup, 'Сохранение...', 'Сохранить')
    api.setUserInfo({name: inputValues['name-profile'], about: inputValues.about})
    .then(data => {
      profile.setUserInfo(data)
      popupEditProfile.close()
    })
    .catch(error => {console.error(error)})
    .finally(() => {
      renderLoad(false, formEditProfilePopup, 'Сохранение...', 'Сохранить')
    })
  },
  resetInputErrors: () => editProfileValidator.resetInputErrors()
})

const popupCard = new PopupWithImage('.popup_target_image')

function createCard(data) {  
  const card = new Card({
    data: data,
    handleCardClick: () => {
      popupCard.open(data.name, data.link)
    },
    handleLikeClick: () => {
      if (card._likeButton.classList.contains('card__like-button_pressed')) {
        api.deleteLikeCard(card._id)
        .then(res => {
          card._setLikesNumber(res.likes.length)
        })
        .catch(error => {console.error(error)})
      } else {
        api.likeCard(card._id)
        .then((res) => {
          card._setLikesNumber(res.likes.length)
        })
        .catch(error => {console.error(error)})
      }
    },
    handleDeleteClick: (newCardId, newTargetCard) => {
      cardId = newCardId
      targetCard = newTargetCard
      popupDeleteConfirm.open()
    },
    userId: userId
  }, '.card-template')
  return card.getCard()
}

const popupAddCard = new PopupWithForm({
  popupSelector: '.popup_target_card',
  callbackSubmit: data => {
    renderLoad(true, formAddCardPopup, 'Сохранение...', 'Сохранить')
    api.addNewCard(data)
    .then(data => {
      const newCard = createCard(data)
      cardsSection.addItem(newCard)
      popupAddCard.close()
    })
    .catch((error) => {console.error(error)})
    .finally(() => {
      renderLoad(false, formAddCardPopup, 'Сохранение...', 'Сохранить')
    })
  },
  resetInputErrors: () => addCardValidator.resetInputErrors()
})

const popupDeleteConfirm = new PopupWithConfirmation({
  popupSelector: '.popup_target_delete-confirm',
  callbackSubmit: data => {
    renderLoad(true, formConfirmDeleteCard, 'Сохранение...', 'Да')
    api.deleteCard(cardId)
    .then(res => {
      targetCard.remove()
      popupDeleteConfirm.close()
    })
    .catch(error => {console.error(error)})
    .finally(() => {
      renderLoad(false, formConfirmDeleteCard, 'Сохранение...', 'да')
    })
  }
})

editProfileButton.addEventListener('click', () => {
  popupEditProfile.open()
  const userInfo = profile.getUserInfo()
  inputTitleProfilePopup.value = userInfo.name
  inputSubtitleProfilePopup.value = userInfo.about
})

const cardsSection = new Section({
  renderer: (card) => {
    cardsSection.addItem(createCard(card))
  }
}, '.cards')

const initialCardsPromise = api.getInitialCards()

Promise.all([userInfoPromise, initialCardsPromise])
.then(([userInfoData, initialCardsData]) => {
  userId = userInfoData._id
  profile.setUserInfo(userInfoData)
  initialCardsData.reverse()
  cardsSection.renderItems(initialCardsData)
})
.catch(error => {console.error(error)})

const popupChangeAvatar = new PopupWithForm({
  popupSelector: '.popup_target_change-avatar',
  callbackSubmit: avatar => {
    renderLoad(true, formChangeAvatarPopup, 'Сохранение...', 'Сохранить')
    api.changeAvatar(avatar)
    .then(data => {
      profile.setUserAvatar(data.avatar)
      popupChangeAvatar.close()
    })
    .catch(error => {console.error(error)})
    .finally(() => {
      renderLoad(false, formChangeAvatarPopup, 'Сохранение...', 'Сохранить')
    })
  },
  resetInputErrors: () => changeAvatarValidator.resetInputErrors()
})
popupChangeAvatar.setEventListeners()

popupCard.setEventListeners()
popupEditProfile.setEventListeners()
popupAddCard.setEventListeners()
popupDeleteConfirm.setEventListeners()

const editProfileValidator = new FormValidator(validationList, formEditProfilePopup)
editProfileValidator.enableValidation()

const addCardValidator = new FormValidator(validationList, formAddCardPopup)
addCardValidator.enableValidation()

const changeAvatarValidator = new FormValidator(validationList, formChangeAvatarPopup)
changeAvatarValidator.enableValidation()

const changeAvatarButton = document.querySelector('.profile__avatar-wrapper')
changeAvatarButton.addEventListener('click', () => {
  changeAvatarValidator.toggleButtonState()
  popupChangeAvatar.open()
})

addCardButton.addEventListener('click', () => {
  addCardValidator.toggleButtonState()
  popupAddCard.open()
})
