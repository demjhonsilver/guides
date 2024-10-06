<script setup>
import Sidebar from './Sidebar.vue'; // Importing Sidebar from the same folder
</script>

<template>
  <div class="d-flex flex-container">
    <Sidebar />
    <div class="flex-fill p-4 content">
      <h1>10. Modern HTML Features</h1>
      <hr>

      <h2>Overview</h2>
      <p>This section covers modern HTML features that enhance web development.</p>

      <h3>Key Features:</h3>
      <ul>
        <li>Custom Data Attributes (`data-*`)</li>
        <li>&lt;template&gt; Element
          <ul>
            <li>Defining Template Content</li>
            <li>Using JavaScript to Insert Template</li>
          </ul>
        </li>
        <li>Progressive Web Apps (PWA) Support
          <ul>
            <li>Manifest Files</li>
            <li>Service Workers</li>
          </ul>
        </li>
        <li>&lt;dialog&gt; Element
          <ul>
            <li>Native Modals in HTML</li>
          </ul>
        </li>
        <li>Native Lazy Loading (`loading="lazy"`)</li>
        <li>Web Components
          <ul>
            <li>Custom Elements</li>
            <li>Shadow DOM</li>
            <li>HTML Imports (Deprecated)</li>
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
    &lt;title&gt;Web Development Features&lt;/title&gt;
    &lt;link rel="manifest" href="/manifest.json"&gt;
  &lt;/head&gt;
  &lt;body&gt;

    &lt;!-- Custom Data Attributes (data-*) --&gt;
    &lt;div data-custom="example"&gt;Custom Data Attribute Example&lt;/div&gt;

    &lt;!-- &lt;template&gt; Element --&gt;
    &lt;template id="my-template"&gt;
        &lt;p&gt;This is template content.&lt;/p&gt;
    &lt;/template&gt;
    &lt;div id="template-container"&gt;&lt;/div&gt;
    &lt;script&gt;
        const template = document.getElementById('my-template');
        const clone = document.importNode(template.content, true);
        document.getElementById('template-container').appendChild(clone);
    &lt;/script&gt;

    &lt;!-- Progressive Web Apps (PWA) Support --&gt;
    &lt;script&gt;
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/service-worker.js')
                .then(registration =&gt; {
                    console.log('Service Worker registered with scope:', registration.scope);
                })
                .catch(error =&gt; {
                    console.log('Service Worker registration failed:', error);
                });
        }
    &lt;/script&gt;

    &lt;!-- &lt;dialog&gt; Element --&gt;
    &lt;dialog id="my-dialog"&gt;
        &lt;p&gt;Native Modal Example&lt;/p&gt;
        &lt;button onclick="document.getElementById('my-dialog').close()"&gt;Close&lt;/button&gt;
    &lt;/dialog&gt;
    &lt;button onclick="document.getElementById('my-dialog').showModal()"&gt;Open Dialog&lt;/button&gt;

    &lt;!-- Native Lazy Loading (loading="lazy") --&gt;
    &lt;img src="image.png" alt="Lazy Loaded Image" loading="lazy"&gt;

    &lt;!-- Web Components --&gt;
    &lt;script&gt;
        class MyCustomElement extends HTMLElement {
            constructor() {
                super();
                this.attachShadow({ mode: 'open' });
                this.shadowRoot.innerHTML = `&lt;p&gt;Custom Element Content&lt;/p&gt;`;
            }
        }
        customElements.define('my-custom-element', MyCustomElement);
    &lt;/script&gt;
    &lt;my-custom-element&gt;&lt;/my-custom-element&gt;

    &lt;!-- Shadow DOM --&gt;
    &lt;script&gt;
        class ShadowDomExample extends HTMLElement {
            constructor() {
                super();
                const shadow = this.attachShadow({ mode: 'open' });
                shadow.innerHTML = `&lt;p&gt;Shadow DOM Content&lt;/p&gt;`;
            }
        }
        customElements.define('shadow-dom-example', ShadowDomExample);
    &lt;/script&gt;
    &lt;shadow-dom-example&gt;&lt;/shadow-dom-example&gt;

    &lt;!-- HTML Imports (Deprecated) --&gt;
    &lt;!-- &lt;link rel="import" href="component.html"&gt; --&gt;

  &lt;/body&gt;
&lt;/html&gt;
      </pre>

      <h3>Feature Explanations:</h3>

      <h4>Custom Data Attributes (`data-*`)</h4>
      <p>Allows embedding custom data attributes in HTML elements, useful for storing extra information without affecting the element's behavior.</p>
      <pre>&lt;div data-custom="example"&gt;Custom Data Attribute Example&lt;/div&gt;</pre>

      <h4>&lt;template&gt; Element</h4>
      <p>Defines reusable HTML fragments not rendered until explicitly inserted into the document.</p>
      <pre>
&lt;template id="my-template"&gt;
    &lt;p&gt;This is template content.&lt;/p&gt;
&lt;/template&gt;</pre>

      <h4>Using JavaScript to Insert Template</h4>
      <pre>
&lt;script&gt;
    const template = document.getElementById('my-template');
    const clone = document.importNode(template.content, true);
    document.getElementById('template-container').appendChild(clone);
&lt;/script&gt;</pre>

      <h4>Progressive Web Apps (PWA) Support</h4>
      <p>Enhances web applications with offline support and push notifications.</p>
      <pre>&lt;link rel="manifest" href="/manifest.json"&gt;</pre>

      <h4>Service Workers</h4>
      <p>JavaScript files running in the background for offline capabilities.</p>
      <pre>
&lt;script&gt;
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration =&gt; {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error =&gt; {
                console.log('Service Worker registration failed:', error);
            });
    }
&lt;/script&gt;</pre>

      <h4>&lt;dialog&gt; Element</h4>
      <p>Provides a native way to create modal dialogs in HTML.</p>
      <pre>
&lt;dialog id="my-dialog"&gt;
    &lt;p&gt;Native Modal Example&lt;/p&gt;
    &lt;button onclick="document.getElementById('my-dialog').close()"&gt;Close&lt;/button&gt;
&lt;/dialog&gt;
&lt;button onclick="document.getElementById('my-dialog').showModal()"&gt;Open Dialog&lt;/button&gt;</pre>

      <h4>Native Lazy Loading (`loading="lazy"`)</h4>
      <p>Defers loading of offscreen images, improving page load performance.</p>
      <pre>&lt;img src="large-image.jpg" alt="Lazy Loaded Image" loading="lazy"&gt;</pre>

      <h4>Web Components</h4>
      <p>Allow creation of reusable and encapsulated custom elements.</p>

      <h4>Custom Elements</h4>
      <pre>
&lt;script&gt;
    class MyCustomElement extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: 'open' });
            this.shadowRoot.innerHTML = `&lt;p&gt;Custom Element Content&lt;/p&gt;`;
        }
    }
    customElements.define('my-custom-element', MyCustomElement);
&lt;/script&gt;</pre>

      <h4>Shadow DOM</h4>
      <p>Encapsulates the internal structure of a web component.</p>
      <pre>
&lt;script&gt;
    class ShadowDomExample extends HTMLElement {
        constructor() {
            super();
            const shadow = this.attachShadow({ mode: 'open' });
            shadow.innerHTML = `&lt;p&gt;Shadow DOM Content&lt;/p&gt;`;
        }
    }
    customElements.define('shadow-dom-example', ShadowDomExample);
&lt;/script&gt;</pre>



    </div>
  </div>
</template>

<style scoped>
/* Styles specific to the HTML page can go here */
</style>
