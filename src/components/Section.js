export class Section {
  constructor({renderer}, containerSelector) {
    // this._renderedItems = items,
    this._renderer = renderer
    this._container = document.querySelector(containerSelector)
  }

  renderItems(cards) {
    cards.forEach(item => {
      this._renderer(item)
    })
  }

  addItem(item) {
    this._container.prepend(item)
  }
}