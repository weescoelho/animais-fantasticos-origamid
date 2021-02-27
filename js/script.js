import SoftScroll from './modules/SoftScroll.js';
import Accordion from './modules/Accordion.js';
import TabNav from './modules/tabnav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import DropdownMenu from './modules/dropdown.js';
import MenuMobile from './modules/menu-mobile.js';
import NumberAnim from './modules/numbersAnim.js';
import Funcionamento from './modules/funcionamento.js';
import AnimaScroll from './modules/scroll-anima.js';

const softScroll = new SoftScroll('[data-soft="smooth"] a[href^="#"]');
softScroll.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section',
);
tabNav.init();

const modal = new Modal('[data-modal="open"]', '[data-modal="close"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

const numberAnim = new NumberAnim('[data-number]', '.numeros', 'ativo');
numberAnim.init();

const scrollAnima = new AnimaScroll('[data-anime="scroll"]');
scrollAnima.init();

const dropdown = new DropdownMenu('[data-dropdown]');
dropdown.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const funcionamento = new Funcionamento('[data-semana]', 'aberto');
funcionamento.init();
