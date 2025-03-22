const handSignalsData = {
    "alexandra": [
        { destination: "Sandton", image: "images/.jpg" },
        { destination: "Boulders", image: "images/midrand.jpg" },
        { destination: "Alexandra", image: "images/down.jpg" },
        { destination: "Johannesburg-cbd", image: "images/one.jpg" },
        { destination: "Ivory-park", image: "images/peace.jpg" },
        { destination: "Rabie-ridge", image: "images/one.jpg" },
        { destination: "Randburg", image: "images/one.jpg" },
        { destination: "Marlboro", image: "images/one.jpg" }
       
  
     ],
    "boulders": [

        { destination: "Alexandra", image: "images/point.jpg" },
        { destination: "Boulders", image: "images/down.jpg" }   
    ],
    "diepkloof": [
        { destination: "Dobsonville", image: "images/down.jpg" },
        { destination: "Dube", image: "images/down.jpg" },
        { destination: "Diepkloof", image: "images/down.jpg" },
        { destination: "Meadowlands", image: "images/down.jpg" },
        { destination: "Johannesburg-cbd", image: "images/one.jpg" },
        { destination: "Pimville", image: "images/down.jpg" }

    ],
    "dobsonville": [
        { destination: "Soweto", image: "images/signal-5.jpg" },
        { destination: "Roodepoort", image: "images/signal-6.jpg" }
    ],
    "dube": [
        { destination: "Diepkloof", image: "images/down.jpg" },
        { destination: "Dube", image: "images/down.jpg" },
        { destination: "Johannesburg-cbd", image: "images/one.jpg" },
        
    ],
    "honeydew": [
        { destination: "Johannesburg-cbd", image: "images/five.jpg" }
    ],
    "ivory-park": [
        { destination: "Alexandra", image: "images/selfpo.jpg" },
        { destination: "Midrand", image: "images/midrand.jpg" },
        { destination: "Boulders", image: "images/midrand.jpg" },
        { destination: "Ivory-park", image: "images/down.jpg" },
        { destination: "Johannesburg-cbd", image: "images/one.jpg" },
        { destination: "Kempton", image: "images/kempton.jpg" }
    ],
    "johannesburg-cbd": [
        { destination: "Alexandra", image: "images/signal-1.jpg" },
        { destination: "Boksburg", image: "images/signal-2.jpg" },
        { destination: "Dobsonville", image: "images/signal-3.jpg" },
        { destination: "Ivory Park", image: "images/signal-4.jpg" },
        { destination: "Midrand", image: "images/signal-5.jpg" },
        { destination: "Orange Farm", image: "images/signal-6.jpg" },
        { destination: "Pretoria", image: "images/signal-7.jpg" },
        { destination: "Randburg", image: "images/signal-8.jpg" },
        { destination: "Sandton", image: "images/signal-9.jpg" },
        { destination: "Soweto", image: "images/signal-10.jpg" },
        { destination: "Tembisa", image: "images/signal-11.jpg" },
        { destination: "Zoo Lake", image: "images/signal-12.jpg" },
        { destination: "Kempton", image: "images/signal-13.jpg" },
        { destination: "Johannesburg CBD", image: "images/down.jpg" }
    ],
    "klipfontein": [
        { destination: "Johannesburg-cbd", image: "images/one.jpg" }
    ],
    "lenasia": [
        { destination: "Johannesburg-cbd", image: "images/one.jpg" }
    ],
    "moloto": [
        { destination: "Johannesburg-cbd", image: "images/one.jpg" }
    ],
    "naledi": [
        { destination: "Johannesburg-cbd", image: "images/one.jpg" }    ],
    "orange-farm": [
        { destination: "Johannesburg-cbd", image: "images/one.jpg" },
        { destination: "Ennerdale", image: "images/signal-16.jpg" },
        { destination: "Vereeniging", image: "images/signal-17.jpg" }
    ],
    "orlando": [
        { destination: "Johannesburg-cbd", image: "images/one.jpg" }    ],
    "phefeni": [
        { destination: "Johannesburg-cbd", image: "images/one.jpg" }    ],
    "pimville": [
        { destination: "Johannesburg-cbd", image: "images/one.jpg" }    ],
    "protea-glen": [
        { destination: "No signals yet", image: "images/default.jpg" }
    ],
    "rabie-ridge": [
        { destination: "No signals yet", image: "images/default.jpg" }
    ],
    "randburg": [
        { destination: "Tembisa", image: "images/signal-28.jpg" },
        { destination: "Noord CBD", image: "images/signal-29.jpg" }
    ],
    "roodepoort": [
        { destination: "No signals yet", image: "images/default.jpg" }
    ],
    "rosebank": [
        { destination: "No signals yet", image: "images/default.jpg" }
    ],
    "sandton": [
        { destination: "Bryanston", image: "images/signal-20.jpg" },
        { destination: "Fourways", image: "images/signal-21.jpg" }
    ],
    "senoane": [
        { destination: "Johannesburg-cbd", image: "images/one.jpg" }    ],
    "soweto": [
        { destination: "Orlando", image: "images/signal-22.jpg" },
        { destination: "Diepkloof", image: "images/signal-23.jpg" }
    ],
    "tembisa": [
        { destination: "Kempton Park", image: "images/signal-24.jpg" },
        { destination: "Edenvale", image: "images/signal-25.jpg" }
    ],
    "woodmead": [
        { destination: "Johannesburg-cbd", image: "images/one.jpg" }    ],
    "yeoville": [
        { destination: "Johannesburg-cbd", image: "images/down.jpg" }
    ],
    "zola": [
        { destination: "Johannesburg-cbd", image: "images/one.jpg" }    ]
  };

let selectedRegion = 'alexandra';

// Display default signals on page load
window.addEventListener('DOMContentLoaded', () => {
  displayHandSignals(selectedRegion);
});

// Region select event
document.getElementById('region-select').addEventListener('change', function () {
  selectedRegion = this.value;
  clearAnimatedMessages();
  displayHandSignals(selectedRegion);
});

// Debounce destination input
let debounceTimeout;
document.getElementById('destination-input').addEventListener('input', function () {
  clearAnimatedMessages();
  const destination = this.value;

  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => {
      displayHandSignalsByDestination(destination);
  }, 300);
});

// Display signals by region
function displayHandSignals(region) {
  const signalContainer = document.getElementById('signal-container');
  signalContainer.innerHTML = '';

  if (handSignalsData[region] && handSignalsData[region].length > 0) {
      handSignalsData[region].forEach(item => {
          createHandSignalCard(item, signalContainer);
      });
  } else {
      signalContainer.innerHTML = `<p>No hand signals available for ${region}.</p>`;
  }
}

// Display signals by destination search
function displayHandSignalsByDestination(destination) {
  const signalContainer = document.getElementById('signal-container');
  signalContainer.innerHTML = '';

  let found = false;
  if (handSignalsData[selectedRegion]) {
      handSignalsData[selectedRegion].forEach(item => {
          if (item.destination.toLowerCase().includes(destination.toLowerCase())) {
              createHandSignalCard(item, signalContainer);
              found = true;
          }
      });
  }

  if (!found) {
      displayAnimatedMessage(`No hand signals found for "${destination}" in ${selectedRegion}.`);
  }
}

// Create card
function createHandSignalCard(item, container) {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
      <img src="${item.image}" class="card-img-top" alt="${item.destination}" onerror="this.src='images/default.jpg'">
      <div class="card-body">
          <h5 class="card-title">${item.destination}</h5>
      </div>
  `;
  container.appendChild(card);
}

// Animated message
function displayAnimatedMessage(message) {
  const messageElement = document.createElement('div');
  messageElement.className = 'animated-message show';
  messageElement.textContent = message;
  document.body.appendChild(messageElement);

  setTimeout(() => {
      messageElement.classList.remove('show');
      setTimeout(() => {
          messageElement.remove();
      }, 500);
  }, 3000);
}

// Clear messages
function clearAnimatedMessages() {
  document.querySelectorAll('.animated-message').forEach(msg => msg.remove());
}

// POPUP DONATION MESSE