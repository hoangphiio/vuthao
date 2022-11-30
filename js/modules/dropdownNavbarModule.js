export default function dropdownNavbarModule() {
  $(".header-navbar-search-input").focus(function () {
    $("#header-search").addClass("move");
  });
  $(".header-navbar-search-input").focusout(function () {
    $("#header-search").removeClass("move");
    $(".header-navbar-search-input").val("");
  });

  $(".ic-search").click(function () {
    $(".header-navbar-search-input").toggleClass("active");
    $("#header-search").toggleClass("active");
  });
}
