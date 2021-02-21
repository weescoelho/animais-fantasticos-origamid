export default class Modal {
  constructor(open, close, container) {
    this.openButton = document.querySelector(open);
    this.closeButton = document.querySelector(close);
    this.modalContainer = document.querySelector(container);
    this.activeClass = 'active';

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickLeaveModal = this.clickLeaveModal.bind(this);
  }

  toggleModal() {
    this.modalContainer.classList.toggle(this.activeClass);
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  clickLeaveModal(event) {
    if (event.target === this.modalContainer) this.toggleModal(event);
  }

  addModalEvent() {
    this.openButton.addEventListener('click', this.eventToggleModal);
    this.closeButton.addEventListener('click', this.eventToggleModal);
    this.modalContainer.addEventListener('click', this.eventToggleModal);
  }

  init() {
    if (this.openButton && this.closeButton && this.modalContainer) {
      this.addModalEvent();
    }
    return this;
  }
}
