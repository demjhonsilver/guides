<script setup>
import { onMounted } from 'vue';
import Sidebar from './Sidebar.vue'; // Importing Sidebar

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
      <p>The Geolocation API allows web applications to access the geographical location of the user.</p>
      <h3>Retrieving User Location</h3>
      <pre>
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(position => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
  });
} else {
  console.log("Geolocation is not supported by this browser.");
}
      </pre>
      <p>Explanation: This code checks if geolocation is supported and retrieves the user's current position, logging the latitude and longitude.</p>

      <h3>Using GPS, Wi-Fi, or IP Address</h3>
      <pre>
navigator.geolocation.getCurrentPosition(position => {
  console.log(position);
}, error => {
  console.error("Error occurred. Error code: " + error.code);
});
      </pre>
      <p>Explanation: This code retrieves location data and handles potential errors gracefully.</p>

      <h2>Web Storage</h2>
      <p>Web Storage provides a way to store data in the user's browser.</p>
      <h3>LocalStorage (Persistent Data)</h3>
      <pre>
localStorage.setItem('username', 'JohnDoe');
console.log(localStorage.getItem('username')); // JohnDoe
      </pre>
      <p>Explanation: This code stores a username in LocalStorage, which remains available after the browser is closed.</p>

      <h3>SessionStorage (Temporary Data)</h3>
      <pre>
sessionStorage.setItem('sessionData', 'Temporary Information');
console.log(sessionStorage.getItem('sessionData')); // Temporary Information
      </pre>
      <p>Explanation: This code saves temporary session data that clears after the browser tab is closed.</p>

      <h2>Web Workers</h2>
      <p>Web Workers allow you to run JavaScript in the background, freeing the main thread.</p>
      <h3>Background JavaScript Execution</h3>
      <pre>
const worker = new Worker('worker.js'); // worker.js contains the worker code
worker.onmessage = function(e) {
  console.log('Message from worker: ' + e.data);
};
worker.postMessage('Start working!');
      </pre>
      <p>Explanation: This code starts a Web Worker that processes tasks in the background.</p>

      <h3>Performance Improvements</h3>
      <pre>
// worker.js
self.onmessage = function(e) {
  const result = e.data * 2; // Example calculation
  self.postMessage(result);
};
      </pre>
      <p>Explanation: This worker doubles a number from the main thread, returning the result without blocking the UI.</p>

      <h2>Canvas API</h2>
      <p>The Canvas API provides a means to draw graphics via JavaScript.</p>
      <h3>Drawing Graphics with &lt;canvas&gt;</h3>
      <pre>
<canvas id="myCanvas" width="200" height="100" style="border: 1px solid #000;"></canvas>
      </pre>
      <p>Explanation: This code creates a canvas where a blue rectangle will be drawn.</p>

      <h3>2D and 3D Graphics Context</h3>
      <pre>
const gl = canvas.getContext('webgl'); // For 3D graphics
if (!gl) {
  console.log('WebGL not supported');
}
      </pre>
      <p>Explanation: This checks for WebGL support for rendering 3D graphics.</p>

      <h2>Drag and Drop API</h2>
      <p>The Drag and Drop API allows users to drag and drop elements.</p>
      <h3>Enabling Drag and Drop Functionality</h3>
      <pre>
<div id="drag" draggable="true">Drag me!</div>
<div id="drop" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
      </pre>

      <h2>WebSockets</h2>
      <p>WebSockets provide a full-duplex communication channel over a single long-lived connection.</p>
      <h3>Real-Time Communication</h3>
      <pre>
const socket = new WebSocket('ws://example.com/socket');
socket.onopen = function() {
  console.log('WebSocket is open now.');
  socket.send('Hello Server!');
};
socket.onmessage = function(event) {
  console.log('Message from server: ' + event.data);
};
      </pre>
      <p>Explanation: This establishes a WebSocket connection for sending and receiving messages.</p>

      <h2>Notifications API</h2>
      <p>The Notifications API allows web applications to send notifications to users.</p>
      <h3>Browser Push Notifications</h3>
      <pre>
if (Notification.permission === "granted") {
  new Notification("Hello!", { body: "This is a notification." });
} else if (Notification.permission !== "denied") {
  Notification.requestPermission().then(permission => {
    if (permission === "granted") {
      new Notification("Hello!", { body: "This is a notification." });
    }
  });
}
      </pre>
      <p>Explanation: This code checks notification permission and displays one if granted.</p>
    
    
      <h3>Full code</h3>
   
    </div>

  

  <div class="xa">
    <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;HTML5 APIs and Features&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Geolocation API&lt;/h1&gt;
    &lt;button id="getLocation"&gt;Get Location&lt;/button&gt;
    &lt;p id="location"&gt;&lt;/p&gt;

    &lt;h1&gt;Web Storage&lt;/h1&gt;
    &lt;button id="saveData"&gt;Save Data&lt;/button&gt;
    &lt;button id="loadData"&gt;Load Data&lt;/button&gt;
    &lt;p id="storageOutput"&gt;&lt;/p&gt;

    &lt;h1&gt;Web Workers&lt;/h1&gt;
    &lt;button id="startWorker"&gt;Start Worker&lt;/button&gt;
    &lt;p id="workerOutput"&gt;&lt;/p&gt;

    &lt;h1&gt;Canvas API&lt;/h1&gt;
    &lt;canvas id="myCanvas" width="200" height="100" style="border:1px solid #000;"&gt;&lt;/canvas&gt;

    &lt;h1&gt;Drag and Drop API&lt;/h1&gt;
    &lt;div id="drag" draggable="true" style="width: 100px; height: 50px; background: red;"&gt;Drag me!&lt;/div&gt;
    &lt;div id="drop" style="width: 200px; height: 200px; border: 1px dashed black; margin-top: 10px;"&gt;
        Drop here!
    &lt;/div&gt;

    &lt;h1&gt;WebSockets&lt;/h1&gt;
    &lt;button id="connectSocket"&gt;Connect WebSocket&lt;/button&gt;
    &lt;p id="socketOutput"&gt;&lt;/p&gt;

    &lt;h1&gt;Notifications API&lt;/h1&gt;
    &lt;button id="notifyBtn"&gt;Send Notification&lt;/button&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre>


</div>

    
  </div>
</template>

<style>
.xa {
    margin-left: 300px;
    width: 100%;
}
</style>