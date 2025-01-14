document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const sideMenu = document.querySelector(".side-menu");
    const closeBtn = document.querySelector(".close-btn");
  
    if (!menuToggle || !sideMenu || !closeBtn) {
      console.error("One or more elements are missing from the DOM.");
      return;
    }
  
    // åpne meny
    menuToggle.addEventListener("click", () => {
      console.log("Opening menu...");
      sideMenu.classList.add("open");
    });
  
    // lukke meny
    closeBtn.addEventListener("click", () => {
      console.log("Closing menu...");
      sideMenu.classList.remove("open");
    });
  
    // lukk meny når klikker utenfor 
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

// === Handlekurv-funksjonalitet ===
  let cart = [];

  document.addEventListener("click", event => {
    if (event.target.classList.contains("add-to-basket")) {
      const productId = parseInt(event.target.dataset.id);
      const product = products.find(p => p.id === productId);
      const existingItem = cart.find(item => item.id === productId);

      if (existingItem) {
        existingItem.quantity += 1; // Øk mengden
      } else {
        cart.push({ ...product, quantity: 1 });
      }
      updateCartCount();
    }
  });

  function updateCartCount() {
    const cartCount = document.querySelector(".cart-count");
    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
  }


 // Initialisering av Leaflet-kart
 if (document.body.classList.contains("product-page")) {
  if (typeof L !== 'undefined') {
    console.log("Initializing map with coordinates:", [60.30384351384949, 10.63625125343083]);

    const map = L.map("map").setView([60.30384351384949, 10.63625125343083], 10);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(map);

    L.marker([60.30384351384949, 10.63625125343083])
      .addTo(map)
      .bindPopup("Braastad Gård, Oppdalslinna 242, 2740 Roa")
      .openPopup();
  } else {
    console.error("Leaflet library is not loaded. Check your script imports.");
  }
}

// === Chat-historikk for chatbot ===//
let chatHistory = [{ role: "system", content: "You are a helpful assistant." }];


  // === chatbot ===//
document.querySelector('.send-message').addEventListener('click', function() {
  var messageInput = document.querySelector('textarea');
  var messageText = messageInput.value.trim();
  
  if (messageText) {
      // Vis brukerens melding
      var userMessage = document.createElement('div');
      userMessage.classList.add('chat-message');
      userMessage.innerHTML = '<div class="message-from">User:</div><p>' + messageText + '</p>';
      document.querySelector('.chat-area').appendChild(userMessage);

       // Legg til meldingen i chat-historikken
       chatHistory.push({ role: "user", content: messageText });

      // Vis svar fra chatbot
      var botMessage = document.createElement('div');
      botMessage.classList.add('chat-message');
      botMessage.innerHTML = '<div class="message-from">FRAM:</div><p>Processing your request...</p>';
      document.querySelector('.chat-area').appendChild(botMessage);

      // Tøm tekstfeltet
      messageInput.value = '';

      // Rull ned for å vise nyeste meldinger
      document.querySelector('.chat-area').scrollTop = document.querySelector('.chat-area').scrollHeight;
         // Kall async-funksjonen for API-kall
         sendMessageToOpenAI(botMessage);
  }
});

async function sendMessageToOpenAI(botMessage) {
  try {
      // Koble til OpenAI API
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer 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`
          },
          body: JSON.stringify({
              model: "gpt-3.5-turbo",
              messages: chatHistory // Send hele chat-historikken
          })
      });

      const data = await response.json();

      // Hent botens svar
      const botReply = data.choices[0].message.content;

      // Oppdater botens svar i chat-området
      botMessage.querySelector('p').textContent = botReply;

      // Legg botens svar til chat-historikken
      chatHistory.push({ role: "assistant", content: botReply });

  } catch (error) {
      console.error('Error communicating with OpenAI:', error);
      botMessage.querySelector('p').textContent = "Sorry, there was an error. Please try again later.";
  }
}
