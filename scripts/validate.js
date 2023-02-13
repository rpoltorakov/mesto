const validationListProfile = {
  formProfilePopup: '.popup__form_target_profile',
  inputTitleProfilePopup: '.popup__input_target_profile-title',
  inputSubtitleProfilePopup: '.popup__input_target_profile-subtitle',
  submitButtonSelector: '.popup__save-button_target_profile',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}


console.log(Object.values(vl.forms.form))

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

function createElements(Obj) {
  Object.keys(Obj).forEach(item => {
    if (Obj[item].startsWith('.')) {
      Obj[item] = document.querySelector(Obj[item])
    }
  })
}

function enableValidation(validationList) {
  createElements(validationList)
  console.log(validationList)
  const inputElements = [validationList.inputTitleProfilePopup, validationList.inputSubtitleProfilePopup]
  inputElements.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(validationList.formProfilePopup, inputElement, validationList)
      toggleButtonState(inputElements, validationList.submitButtonSelector, validationList)
    })
  })
  toggleButtonState(inputElements, validationList.submitButtonSelector, validationList)
}

enableValidation(validationListProfile)