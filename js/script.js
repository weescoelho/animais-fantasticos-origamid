import SoftScroll from './modules/SoftScroll.js';
import Accordion from './modules/Accordion.js';
import TabNav from './modules/tabnav.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown.js';
import initMenuMobile from './modules/menu-mobile.js';
import initNumberAnim from './modules/numbersAnim.js';
import initFuncionamento from './modules/funcionamento.js';
import initAnimationScroll from './modules/scroll-animation.js';

const softScroll = new SoftScroll('[data-soft="smooth"] a[href^="#"]');
softScroll.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section',
);
tabNav.init();

initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initNumberAnim();
initFuncionamento();
initAnimationScroll();
