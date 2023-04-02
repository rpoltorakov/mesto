export const renderLoad = (isLoading, popup, textLoading, text) => {
  if (isLoading) {
    popup.querySelector('.popup__save-button').textContent = textLoading
  } else {
    popup.querySelector('.popup__save-button').textContent = text
  }
}