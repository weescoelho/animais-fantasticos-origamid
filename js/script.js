import SoftScroll from './modules/SoftScroll.js';
import initAnimationScroll from './modules/scroll-animation.js';
import initAccordion from './modules/accordion.js';
import initTabNav from './modules/tabnav.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown.js';
import initMenuMobile from './modules/menu-mobile.js';
import initNumberAnim from './modules/numbersAnim.js';
import initFuncionamento from './modules/funcionamento.js';

const softScroll = new SoftScroll('[data-soft="smooth"] a[href^="#"]');
softScroll.init();

initAnimationScroll();
initAccordion();
initTabNav();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initNumberAnim();
initFuncionamento();
