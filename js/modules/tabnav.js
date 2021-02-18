export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');
  const activeClass = 'ativo';
  function activeTab(index) {
    tabContent.forEach((item) => {
      item.classList.remove(activeClass);
    });
    tabContent[index].classList.add(activeClass, tabContent[index].dataset.anime);
  }
  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add(activeClass);

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
