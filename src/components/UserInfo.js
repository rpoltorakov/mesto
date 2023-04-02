export class UserInfo{
  constructor({ nameSelector, aboutSelector, avatarSelector }) {
    this._nameElement = document.querySelector(nameSelector)
    this._aboutElement = document.querySelector(aboutSelector)
    this._avatarElement = document.querySelector(avatarSelector)
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      about: this._aboutElement.textContent
    }
  }

  setUserAvatar(link) {
    this._avatarElement.src = link
  }

  setUserInfo(data) {
    this._nameElement.textContent = data.name
    this._aboutElement.textContent = data.about
    this.setUserAvatar(data.avatar)
  }
}