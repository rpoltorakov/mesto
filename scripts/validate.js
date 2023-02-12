const validationList = {
  formProfilePopup: '.popup__form_target_profile',
  inputTitleProfilePopup: '.popup__input_target_profile-title',
  inputSubtitleProfilePopup: '.popup__input_target_profile-subtitle',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}

function showInputError(formElement, inputElement, errorMessage) {
  const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
  inputElement.classList.add(validationList.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validationList.errorClass);
}

function hideInputError(formElement, inputElement) {
  const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
  inputElement.classList.remove(validationList.inputErrorClass);
  errorElement.classList.remove(validationList.errorClass);
}

function checkInputValidity(formElement, inputElement) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid
  })
}

function toggleButtonState (inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(validationList.inactiveButtonClass)
  } else {
    buttonElement.classList.remove(validationList.inactiveButtonClass)
  }
}

function enableValidation(inputElements, formElement, buttonElement) {
  inputElements.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement)
      toggleButtonState(inputElements, buttonElement)
    })
  })
  toggleButtonState(inputElements, buttonElement)
}
const testarr = [validationList.inputTitleProfilePopup, validationList.inputSubtitleProfilePopup]
enableValidation(testarr, validationList.formProfilePopup, document.querySelector('.popup__form_target_profile').querySelector('.popup__save-button'))