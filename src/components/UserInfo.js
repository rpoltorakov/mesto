export class UserInfo{
  constructor({ nameSelector, aboutSelector }) {
    this._nameElement = document.querySelector(nameSelector)
    this._aboutElement = document.querySelector(aboutSelector)
  }

  getUserInfo() {
    return {
      title: this._nameElement.textContent,
      about: this._aboutElement.textContent
    }
  }

  setUserInfo({title, about}) {
    this._nameElement.textContent = title
    this._aboutElement.textContent = about
  }
}