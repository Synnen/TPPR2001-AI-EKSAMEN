document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const sideMenu = document.querySelector(".side-menu");
    const closeBtn = document.querySelector(".close-btn");
  
    if (!menuToggle || !sideMenu || !closeBtn) {
      console.error("One or more elements are missing from the DOM.");
      return;
    }
  
    // Open menu
    menuToggle.addEventListener("click", () => {
      console.log("Opening menu...");
      sideMenu.classList.add("open");
    });
  
    // Close menu
    closeBtn.addEventListener("click", () => {
      console.log("Closing menu...");
      sideMenu.classList.remove("open");
    });
  
    // Close menu when clicking outside
    document.addEventListener("click", (event) => {
      if (!sideMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        console.log("Clicked outside menu. Closing...");
        sideMenu.classList.remove("open");
      }
    });
  });
  


  document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const sideMenu = document.querySelector(".side-menu");
    const closeBtn = document.querySelector(".close-btn");
  
    if (!menuToggle || !sideMenu || !closeBtn) {
      console.error("One or more elements are missing from the DOM.");
      return;
    }
  
    // Åpne meny
    menuToggle.addEventListener("click", () => {
      sideMenu.classList.add("open");
    });
  
    // Lukke meny
    closeBtn.addEventListener("click", () => {
      sideMenu.classList.remove("open");
    });
  
    // Lukk meny ved klikk utenfor
    document.addEventListener("click", (event) => {
      if (!sideMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        sideMenu.classList.remove("open");
      }
    });
  });
  