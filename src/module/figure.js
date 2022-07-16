/* eslint-disable linebreak-style */
export default class Figure {
  constructor(width, height) {
    this.width = `${width}px`;
    this.height = `${height}px`;
  }

  createElm(nameClass) {
    const body = document.querySelector('body');
    const div = document.createElement('div');
    div.classList.add(nameClass);
    div.style.width = this.width;
    div.style.height = this.height;
    body.append(div);
  }
}
