(function(){
  const nav = document.querySelector(".main-nav");
  nav.classList.remove("main-nav--nojs");

  const toggle = document.querySelector(".main-nav__toggle");

  const showMenu = function(){  
    if (nav.classList.contains("main-nav--open")){
      nav.classList.remove("main-nav--open");
      nav.classList.add("main-nav--close");
    } else{
      nav.classList.remove("main-nav--close");
      nav.classList.add("main-nav--open");
    }
  }

  toggle.addEventListener("click", showMenu);
})();