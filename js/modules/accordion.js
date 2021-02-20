export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = 'active';
  }

  toggleAccordion(item) {
    item.nextElementSibling.classList.toggle(this.activeClass);
    item.classList.toggle('active');
  }

  // add events on accordion
  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => this.toggleAccordion(item));
    });
  }

  // init function
  init() {
    if (this.accordionList.length) {
      // add event on first item
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
  }
}
