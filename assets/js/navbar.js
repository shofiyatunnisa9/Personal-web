let hamburgerButton = document.getElementById("hamburger_button");

let mobileMenuList = document.getElementById("mobile_menu_list");

hamburgerButton.addEventListener("click", () => {
  if (mobileMenuList.classList.contains("mobile_menu_hide")) {
    mobileMenuList.classList.remove("mobile_menu_hide");
    mobileMenuList.classList.add("mobile_menu_show");
  } else {
    mobileMenuList.classList.remove("mobile_menu_show");
    mobileMenuList.classList.add("mobile_menu_hide");
  }
});
