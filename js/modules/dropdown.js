import outsideClick from './outsideclick.js';

function handleClick(event) {
  event.preventDefault();
  this.classList.add('active');
  outsideClick(this, ['touchstart', 'click'], () => {
    this.classList.remove('active');
  });
}
export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');
  dropdownMenus.forEach((menu) => {
    ['touchstart', 'click'].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });
}
