<script setup>
import Sidebar from './Sidebar.vue'; // Importing Sidebar from the same folder
</script>

<template>
  <div class="d-flex flex-container">
    <Sidebar />
    <div class="flex-fill p-4 content html11-pad">
      <h1>11. Browser Compatibility and Best Practices</h1>
      <hr>

      <h2>Overview</h2>
      <p>This section discusses strategies for ensuring browser compatibility and adherence to best practices in web development.</p>

      <h3>Key Practices:</h3>
      <ul>
        <li>Feature Detection
          <ul>
            <li>Using <code>Modernizr</code></li>
          </ul>
        </li>
        <li>Polyfills for Unsupported Features</li>
        <li>HTML Validation (W3C Validator)</li>
        <li>Mobile-First Design
          <ul>
            <li>Meta Viewport Tag
              <pre>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</pre>
            </li>
          </ul>
        </li>
      </ul>

      <h3>Sample HTML Structure:</h3>
      <pre>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Modern Web Development Features&lt;/title&gt;
    &lt;script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;

    &lt;!-- Feature Detection --&gt;
    &lt;script&gt;
        if (Modernizr.canvas) {
            console.log('Canvas is supported');
        } else {
            console.log('Canvas is not supported');
        }
    &lt;/script&gt;

    &lt;!-- Polyfills for Unsupported Features --&gt;
    &lt;script&gt;
        if (!Modernizr.fetch) {
            var script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/fetch/3.0.0/fetch.min.js';
            document.head.appendChild(script);
        }
    &lt;/script&gt;

    &lt;!-- HTML Validation (W3C Validator) --&gt;
    &lt;p&gt;Use the W3C Validator to check the validity of your HTML code: &lt;a href="https://validator.w3.org/"&gt;W3C Validator&lt;/a&gt;&lt;/p&gt;

    &lt;!-- Mobile-First Design --&gt;
    &lt;!-- Meta Viewport Tag --&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;

&lt;/body&gt;
&lt;/html&gt;
      </pre>

      <h3>Feature Explanations:</h3>

      <h4>Feature Detection</h4>
      <p>Utilizes Modernizr to check for support of various HTML5 features in the browser.</p>

      <h4>Polyfills for Unsupported Features</h4>
      <p>Includes scripts to provide functionality for features not natively supported by the browser.</p>

      <h4>HTML Validation (W3C Validator)</h4>
      <p>Utilize the <a href="https://validator.w3.org/">W3C Validator</a> to ensure your HTML code is valid.</p>

      <h4>Mobile-First Design</h4>
      <p>Focuses on designing for mobile devices first, using the viewport meta tag for proper scaling.</p>
    </div>
  </div>
</template>
<style scoped>
/* Styles specific to the HTML page can go here */
.html-pad11 {
  margin-left: 270px;
}

@media (max-width: 1000px) {
  .html11-pad {
    width: 40%;
  margin-left: 250px;
 }
}

@media (max-width: 768px) {
  .html11-pad {
    width: 80%;
  margin-left: 50px;
 }
}

</style>
