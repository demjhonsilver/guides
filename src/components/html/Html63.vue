<script setup>
import { onMounted, ref } from 'vue';
import Sidebar from './Sidebar.vue'; // Importing Sidebar

// Reactive state variables
const locationText = ref('');
const storageOutput = ref('');
const workerOutput = ref('');
const socketOutput = ref('');

// Function to get geolocation
const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      locationText.value = `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`;
    });
  } else {
    locationText.value = "Geolocation is not supported.";
  }
};

// Function to save data to LocalStorage
const saveData = () => {
  localStorage.setItem('username', 'JohnDoe');
};

// Function to load data from LocalStorage
const loadData = () => {
  storageOutput.value = localStorage.getItem('username');
};

// Function to start a web worker
const startWorker = () => {
  const worker = new Worker(URL.createObjectURL(new Blob([`
    onmessage = function(e) {
      postMessage(e.data * 2);
    }
  `])));

  worker.postMessage(10);
  worker.onmessage = function(e) {
    workerOutput.value = 'Worker Output: ' + e.data;
  };
};

// Function to connect to WebSocket
const connectSocket = () => {
  const socket = new WebSocket('wss://echo.websocket.org'); // Example WebSocket server
  socket.onopen = function() {
    socket.send('Hello Server!');
  };
  socket.onmessage = function(event) {
    socketOutput.value = 'Message from server: ' + event.data;
  };
};

// Function to send a notification
const sendNotification = () => {
  if (Notification.permission === "granted") {
    new Notification("Hello!", { body: "This is a notification." });
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        new Notification("Hello!", { body: "This is a notification." });
      }
    });
  }
};

// Canvas setup
onMounted(() => {
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'blue';
  ctx.fillRect(0, 0, 200, 100);
});
</script>

<template>
  <div class="d-flex flex-container">
    <Sidebar />
    <div class="flex-fill p-3 content">
      <h1>6. HTML5 APIs and Advanced Features</h1>
      <p>HTML5 APIs enhance web applications with advanced features, improving user experience and functionality.</p>

      <h2>Geolocation API</h2>
      <button @click="getLocation">Get Location</button>
      <p>{{ locationText }}</p>

      <h2>Web Storage</h2>
      <button @click="saveData">Save Data</button>
      <button @click="loadData">Load Data</button>
      <p>{{ storageOutput }}</p>

      <h2>Web Workers</h2>
      <button @click="startWorker">Start Worker</button>
      <p>{{ workerOutput }}</p>

      <h2>Canvas API</h2>
      <canvas id="myCanvas" width="200" height="100" style="border:1px solid #000;"></canvas>

      <h2>WebSockets</h2>
      <button @click="connectSocket">Connect WebSocket</button>
      <p>{{ socketOutput }}</p>

      <h2>Notifications API</h2>
      <button @click="sendNotification">Send Notification</button>
    </div>
  </div>
</template>

<style scoped>
.d-flex {
  display: flex;
  flex-wrap: wrap;
}

.flex-container {
  width: 100%;
}

.flex-fill {
  flex: 1;
}

.content {
  margin-left: 270px; /* Adjust based on sidebar width */
  padding: 15px;
  max-width: 800px; /* Set max width for the content */
  overflow-wrap: break-word; /* Ensure long text wraps */
}

h1, h2, h3 {
  margin-top: 20px;
}

pre {
  background-color: #f8f8f8;
  padding: 10px;
  border-radius: 5px;
  overflow-x: auto; /* Allow horizontal scrolling if needed */
}

/* Responsive Styles */
@media (max-width: 768px) {
  .flex-container {
    flex-direction: column;
  }

  .content {
    margin-left: 0;
    padding: 10px;
    max-width: 100%; /* Allow full width on smaller screens */
  }
}
</style>
