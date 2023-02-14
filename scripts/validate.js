const validationList = {
  forms: {
    profileForm: {
      name: 'edit-profile',
      form: '.popup__form_target_profile',
      submitButton: '.popup__save-button_target_profile',
      inputs: {
        inputTitleProfilePopup: '.popup__input_target_profile-title',
        inputSubtitleProfilePopup: '.popup__input_target_profile-subtitle',
      },
    },
    cardForm: {
      name: 'add-card',
      form: '.popup__form_target_element',
      submitButton: '.popup__save-button_target_element',
      inputs: {
        inputTitleCardPopup: '.popup__input_target_element-title',
        inputURLCardPopup: '.popup__input_target_element-image'
      },
    },
  },
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}

function showInputError(formElement, inputElement, errorMessage, validationList) {
  const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
  inputElement.classList.add(validationList.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validationList.errorClass);
}

function hideInputError(formElement, inputElement, validationList) {
  const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
  inputElement.classList.remove(validationList.inputErrorClass);
  errorElement.classList.remove(validationList.errorClass);
}

function checkInputValidity(formElement, inputElement, validationList) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, validationList);
  } else {
    hideInputError(formElement, inputElement, validationList);
  }
};

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid
  })
}

function toggleButtonState (inputList, buttonElement, validationList) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(validationList.inactiveButtonClass)
  } else {
    buttonElement.classList.remove(validationList.inactiveButtonClass)
  }
}

function createDOMElements(Obj) {
  Object.keys(Obj).forEach(item => {
    if (typeof Obj[item] === 'string') {
      if (Obj[item].startsWith('.')) {
        Obj[item] = document.querySelector(Obj[item])
      }
    }
  })
}

function enableValidation(validationList) {
  const forms = Object.values(validationList.forms)
  forms.forEach(formObj => {
    createDOMElements(formObj)
    createDOMElements(formObj.inputs)
    let inputElements = Object.values(formObj.inputs)
    let buttonElement = formObj.submitButton
    inputElements.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        checkInputValidity(formObj.form, inputElement, validationList)
        toggleButtonState(inputElements, buttonElement, validationList)
      })
    })
    if (formObj.name === 'add-card') {
      toggleButtonState(inputElements, buttonElement, validationList)
    }
    
  })
}

enableValidation(validationList)