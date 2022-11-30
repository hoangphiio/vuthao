export default function burgerMenuModule() {
  $(document).ready(function () {
    var hamburger = $(".mobile-menu"), // mobile-menu
      menu = $(".header-navbar"), //menu
      sub_menu = $(".mega-menu"), //sub-menu-wrapper
      menu_item = $(".header-dropdown-item"); //has-sub-menu

    hamburger.on("click", function () {
      menu.slideToggle();
      $(this).toggleClass("active");
    });

    menu_item.on("click", function () {
      $(this).children(".mega-menu").slideToggle();
    });
  });
}
