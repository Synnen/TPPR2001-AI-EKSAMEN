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
  
// === Dynamisk produktgenerering ===
  const products = [
    { id: 1, name: "Oats", price: 48, weight: "1 kg", image: "images/havregryn.jpg", isPopular: true },
    { id: 2, name: "Potatoes", price: 25, weight: "1 kg", image: "images/poteter.jpg", isPopular: false },
    { id: 3, name: "Carrots", price: 20, weight: "1 kg", image: "images/gulrot.jpg", isPopular: false },
    { id: 4, name: "Red Onions", price: 48, weight: "0.5 kg", image: "images/rødløk.jpg", isPopular: true },
    { id: 5, name: "Garlic", price: 48, weight: "0.2 kg", image: "images/hvitløk.jpg", isPopular: true }
  ];

  const productGrid = document.querySelector(".product-grid");

  // Forsiden (home-page): Vis populære produkter
  if (productGrid && document.body.classList.contains("home-page")) {
    console.log("Home page detected. Generating popular products...");
    const popularProducts = products.filter(product => product.isPopular);
    popularProducts.forEach(product => {
      const productCard = `
        <div class="product">
          <div class="container">
            <img src="${product.image}" alt="${product.name}" />
            <div class="bottom-right add-to-basket" data-id="${product.id}">Add to basket</div>
          </div>
          <div class="product-title">${product.name}</div>
          <div class="product-price">${product.price} kr / ${product.weight}</div>
        </div>
      `;
      productGrid.innerHTML += productCard;
    });
    console.log("Popular products generated:", popularProducts);
  }


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



// Chatbot
document.addEventListener("DOMContentLoaded", () => {
  const openChatButton = document.getElementById("openChat");
  const closeChatButton = document.getElementById("closeChat");
  const chatPopup = document.getElementById("chatPopup");

  openChatButton.addEventListener("click", () => {
    chatPopup.style.display = "block";
  });

  closeChatButton.addEventListener("click", () => {
    chatPopup.style.display = "none";
  });
});
  
