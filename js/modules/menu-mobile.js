import outsideclick from "./outsideclick.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const events = ["click", "touchstart"];

  if (menuButton) {
    function openMenu(event) {
      menuList.classList.add("active");
      menuButton.classList.add("active");
      outsideclick(menuList, ["click", "touchstart"], () => {
        menuList.classList.remove("active");
        menuButton.classList.remove("active");
      });
    }

    events.forEach((userEvents) =>
      menuButton.addEventListener("click", openMenu),
    );
  }
}
