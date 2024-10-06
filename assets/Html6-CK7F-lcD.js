import{d as a,c as i,a as s,e as n,f as o,o as l,S as r}from"./index-Cx8zt168.js";const c={class:"d-flex flex-container"},p={__name:"Html6",setup(d){return a(()=>{const e=document.getElementById("myCanvas").getContext("2d");e.fillStyle="blue",e.fillRect(0,0,200,100)}),(t,e)=>(l(),i("div",c,[s(r),e[0]||(e[0]=n("div",{class:"flex-fill p-3 content"},[n("h1",null,"6. HTML5 APIs and Advanced Features"),n("p",null,"HTML5 APIs enhance web applications with advanced features, improving user experience and functionality."),n("h2",null,"Geolocation API"),n("p",null,"The Geolocation API allows web applications to access the geographical location of the user."),n("h3",null,"Retrieving User Location"),n("pre",null,`if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(position => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(\`Latitude: \${latitude}, Longitude: \${longitude}\`);
  });
} else {
  console.log("Geolocation is not supported by this browser.");
}
      `),n("p",null,"Explanation: This code checks if geolocation is supported and retrieves the user's current position, logging the latitude and longitude."),n("h3",null,"Using GPS, Wi-Fi, or IP Address"),n("pre",null,`navigator.geolocation.getCurrentPosition(position => {
  console.log(position);
}, error => {
  console.error("Error occurred. Error code: " + error.code);
});
      `),n("p",null,"Explanation: This code retrieves location data and handles potential errors gracefully."),n("h2",null,"Web Storage"),n("p",null,"Web Storage provides a way to store data in the user's browser."),n("h3",null,"LocalStorage (Persistent Data)"),n("pre",null,`localStorage.setItem('username', 'JohnDoe');
console.log(localStorage.getItem('username')); // JohnDoe
      `),n("p",null,"Explanation: This code stores a username in LocalStorage, which remains available after the browser is closed."),n("h3",null,"SessionStorage (Temporary Data)"),n("pre",null,`sessionStorage.setItem('sessionData', 'Temporary Information');
console.log(sessionStorage.getItem('sessionData')); // Temporary Information
      `),n("p",null,"Explanation: This code saves temporary session data that clears after the browser tab is closed."),n("h2",null,"Web Workers"),n("p",null,"Web Workers allow you to run JavaScript in the background, freeing the main thread."),n("h3",null,"Background JavaScript Execution"),n("pre",null,`const worker = new Worker('worker.js'); // worker.js contains the worker code
worker.onmessage = function(e) {
  console.log('Message from worker: ' + e.data);
};
worker.postMessage('Start working!');
      `),n("p",null,"Explanation: This code starts a Web Worker that processes tasks in the background."),n("h3",null,"Performance Improvements"),n("pre",null,`// worker.js
self.onmessage = function(e) {
  const result = e.data * 2; // Example calculation
  self.postMessage(result);
};
      `),n("p",null,"Explanation: This worker doubles a number from the main thread, returning the result without blocking the UI."),n("h2",null,"Canvas API"),n("p",null,"The Canvas API provides a means to draw graphics via JavaScript."),n("h3",null,"Drawing Graphics with <canvas>"),n("pre",null,[o(""),n("canvas",{id:"myCanvas",width:"200",height:"100",style:{border:"1px solid #000"}}),o(`
      `)]),n("p",null,"Explanation: This code creates a canvas where a blue rectangle will be drawn."),n("h3",null,"2D and 3D Graphics Context"),n("pre",null,`const gl = canvas.getContext('webgl'); // For 3D graphics
if (!gl) {
  console.log('WebGL not supported');
}
      `),n("p",null,"Explanation: This checks for WebGL support for rendering 3D graphics."),n("h2",null,"Drag and Drop API"),n("p",null,"The Drag and Drop API allows users to drag and drop elements."),n("h3",null,"Enabling Drag and Drop Functionality"),n("pre",null,[o(""),n("div",{id:"drag",draggable:"true"},"Drag me!"),o(`
`),n("div",{id:"drop",ondrop:"drop(event)",ondragover:"allowDrop(event)"}),o(`
      `)]),n("h2",null,"WebSockets"),n("p",null,"WebSockets provide a full-duplex communication channel over a single long-lived connection."),n("h3",null,"Real-Time Communication"),n("pre",null,`const socket = new WebSocket('ws://example.com/socket');
socket.onopen = function() {
  console.log('WebSocket is open now.');
  socket.send('Hello Server!');
};
socket.onmessage = function(event) {
  console.log('Message from server: ' + event.data);
};
      `),n("p",null,"Explanation: This establishes a WebSocket connection for sending and receiving messages."),n("h2",null,"Notifications API"),n("p",null,"The Notifications API allows web applications to send notifications to users."),n("h3",null,"Browser Push Notifications"),n("pre",null,`if (Notification.permission === "granted") {
  new Notification("Hello!", { body: "This is a notification." });
} else if (Notification.permission !== "denied") {
  Notification.requestPermission().then(permission => {
    if (permission === "granted") {
      new Notification("Hello!", { body: "This is a notification." });
    }
  });
}
      `),n("p",null,"Explanation: This code checks notification permission and displays one if granted."),n("h3",null,"Full code")],-1)),e[1]||(e[1]=n("div",{class:"xa"},[n("pre",null,[n("code",null,`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML5 APIs and Features</title>
  </head>
  <body>
    <h1>Geolocation API</h1>
    <button id="getLocation">Get Location</button>
    <p id="location"></p>

    <h1>Web Storage</h1>
    <button id="saveData">Save Data</button>
    <button id="loadData">Load Data</button>
    <p id="storageOutput"></p>

    <h1>Web Workers</h1>
    <button id="startWorker">Start Worker</button>
    <p id="workerOutput"></p>

    <h1>Canvas API</h1>
    <canvas id="myCanvas" width="200" height="100" style="border:1px solid #000;"></canvas>

    <h1>Drag and Drop API</h1>
    <div id="drag" draggable="true" style="width: 100px; height: 50px; background: red;">Drag me!</div>
    <div id="drop" style="width: 200px; height: 200px; border: 1px dashed black; margin-top: 10px;">
        Drop here!
    </div>

    <h1>WebSockets</h1>
    <button id="connectSocket">Connect WebSocket</button>
    <p id="socketOutput"></p>

    <h1>Notifications API</h1>
    <button id="notifyBtn">Send Notification</button>
  </body>
</html>
`)])],-1))]))}};export{p as default};
