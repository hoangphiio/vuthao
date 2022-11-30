import dropdownNavbarModule from "./modules/dropdownNavbarModule.js";
import scrollModule from "./modules/scrollModule.js";
import burgerMenuModule from "./modules/burgerMenuModule.js";
import swiperModule from "./modules/swiperModule.js";
import navigationModule from "./modules/navigationModule.js";
import aosModule from "./modules/aosModule.js";

window.addEventListener("DOMContentLoaded", () => {
  dropdownNavbarModule();
  scrollModule();
  burgerMenuModule();
  swiperModule();
  navigationModule();
  aosModule();
});
