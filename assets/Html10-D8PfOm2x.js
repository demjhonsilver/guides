import{_ as e,c as a,a as n,b as o,o as l,S as i}from"./index-CWlCYwLL.js";const r={class:"d-flex flex-container"},s={__name:"Html10",setup(d){return(m,t)=>(l(),a("div",r,[n(i),t[0]||(t[0]=o(`<div class="flex-fill p-4 content html10-pad" data-v-a979b4f5><h1 data-v-a979b4f5>10. Modern HTML Features</h1><hr data-v-a979b4f5><h2 data-v-a979b4f5>Overview</h2><p data-v-a979b4f5>This section covers modern HTML features that enhance web development.</p><h3 data-v-a979b4f5>Key Features:</h3><ul data-v-a979b4f5><li data-v-a979b4f5>Custom Data Attributes (\`data-*\`)</li><li data-v-a979b4f5>&lt;template&gt; Element <ul data-v-a979b4f5><li data-v-a979b4f5>Defining Template Content</li><li data-v-a979b4f5>Using JavaScript to Insert Template</li></ul></li><li data-v-a979b4f5>Progressive Web Apps (PWA) Support <ul data-v-a979b4f5><li data-v-a979b4f5>Manifest Files</li><li data-v-a979b4f5>Service Workers</li></ul></li><li data-v-a979b4f5>&lt;dialog&gt; Element <ul data-v-a979b4f5><li data-v-a979b4f5>Native Modals in HTML</li></ul></li><li data-v-a979b4f5>Native Lazy Loading (\`loading=&quot;lazy&quot;\`)</li><li data-v-a979b4f5>Web Components <ul data-v-a979b4f5><li data-v-a979b4f5>Custom Elements</li><li data-v-a979b4f5>Shadow DOM</li><li data-v-a979b4f5>HTML Imports (Deprecated)</li></ul></li></ul><h3 data-v-a979b4f5>Sample HTML Structure:</h3><pre data-v-a979b4f5>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;title&gt;Web Development Features&lt;/title&gt;
    &lt;link rel=&quot;manifest&quot; href=&quot;/manifest.json&quot;&gt;
  &lt;/head&gt;
  &lt;body&gt;

    &lt;!-- Custom Data Attributes (data-*) --&gt;
    &lt;div data-custom=&quot;example&quot;&gt;Custom Data Attribute Example&lt;/div&gt;

    &lt;!-- &lt;template&gt; Element --&gt;
    &lt;template id=&quot;my-template&quot;&gt;
        &lt;p&gt;This is template content.&lt;/p&gt;
    &lt;/template&gt;
    &lt;div id=&quot;template-container&quot;&gt;&lt;/div&gt;
    &lt;script&gt;
        const template = document.getElementById(&#39;my-template&#39;);
        const clone = document.importNode(template.content, true);
        document.getElementById(&#39;template-container&#39;).appendChild(clone);
    &lt;/script&gt;

    &lt;!-- Progressive Web Apps (PWA) Support --&gt;
    &lt;script&gt;
        if (&#39;serviceWorker&#39; in navigator) {
            navigator.serviceWorker.register(&#39;/service-worker.js&#39;)
                .then(registration =&gt; {
                    console.log(&#39;Service Worker registered with scope:&#39;, registration.scope);
                })
                .catch(error =&gt; {
                    console.log(&#39;Service Worker registration failed:&#39;, error);
                });
        }
    &lt;/script&gt;

    &lt;!-- &lt;dialog&gt; Element --&gt;
    &lt;dialog id=&quot;my-dialog&quot;&gt;
        &lt;p&gt;Native Modal Example&lt;/p&gt;
        &lt;button onclick=&quot;document.getElementById(&#39;my-dialog&#39;).close()&quot;&gt;Close&lt;/button&gt;
    &lt;/dialog&gt;
    &lt;button onclick=&quot;document.getElementById(&#39;my-dialog&#39;).showModal()&quot;&gt;Open Dialog&lt;/button&gt;

    &lt;!-- Native Lazy Loading (loading=&quot;lazy&quot;) --&gt;
    &lt;img src=&quot;image.png&quot; alt=&quot;Lazy Loaded Image&quot; loading=&quot;lazy&quot;&gt;

    &lt;!-- Web Components --&gt;
    &lt;script&gt;
        class MyCustomElement extends HTMLElement {
            constructor() {
                super();
                this.attachShadow({ mode: &#39;open&#39; });
                this.shadowRoot.innerHTML = \`&lt;p&gt;Custom Element Content&lt;/p&gt;\`;
            }
        }
        customElements.define(&#39;my-custom-element&#39;, MyCustomElement);
    &lt;/script&gt;
    &lt;my-custom-element&gt;&lt;/my-custom-element&gt;

    &lt;!-- Shadow DOM --&gt;
    &lt;script&gt;
        class ShadowDomExample extends HTMLElement {
            constructor() {
                super();
                const shadow = this.attachShadow({ mode: &#39;open&#39; });
                shadow.innerHTML = \`&lt;p&gt;Shadow DOM Content&lt;/p&gt;\`;
            }
        }
        customElements.define(&#39;shadow-dom-example&#39;, ShadowDomExample);
    &lt;/script&gt;
    &lt;shadow-dom-example&gt;&lt;/shadow-dom-example&gt;

    &lt;!-- HTML Imports (Deprecated) --&gt;
    &lt;!-- &lt;link rel=&quot;import&quot; href=&quot;component.html&quot;&gt; --&gt;

  &lt;/body&gt;
&lt;/html&gt;
      </pre><h3 data-v-a979b4f5>Feature Explanations:</h3><h4 data-v-a979b4f5>Custom Data Attributes (\`data-*\`)</h4><p data-v-a979b4f5>Allows embedding custom data attributes in HTML elements, useful for storing extra information without affecting the element&#39;s behavior.</p><pre data-v-a979b4f5>&lt;div data-custom=&quot;example&quot;&gt;Custom Data Attribute Example&lt;/div&gt;</pre><h4 data-v-a979b4f5>&lt;template&gt; Element</h4><p data-v-a979b4f5>Defines reusable HTML fragments not rendered until explicitly inserted into the document.</p><pre data-v-a979b4f5>&lt;template id=&quot;my-template&quot;&gt;
    &lt;p&gt;This is template content.&lt;/p&gt;
&lt;/template&gt;</pre><h4 data-v-a979b4f5>Using JavaScript to Insert Template</h4><pre data-v-a979b4f5>&lt;script&gt;
    const template = document.getElementById(&#39;my-template&#39;);
    const clone = document.importNode(template.content, true);
    document.getElementById(&#39;template-container&#39;).appendChild(clone);
&lt;/script&gt;</pre><h4 data-v-a979b4f5>Progressive Web Apps (PWA) Support</h4><p data-v-a979b4f5>Enhances web applications with offline support and push notifications.</p><pre data-v-a979b4f5>&lt;link rel=&quot;manifest&quot; href=&quot;/manifest.json&quot;&gt;</pre><h4 data-v-a979b4f5>Service Workers</h4><p data-v-a979b4f5>JavaScript files running in the background for offline capabilities.</p><pre data-v-a979b4f5>&lt;script&gt;
    if (&#39;serviceWorker&#39; in navigator) {
        navigator.serviceWorker.register(&#39;/service-worker.js&#39;)
            .then(registration =&gt; {
                console.log(&#39;Service Worker registered with scope:&#39;, registration.scope);
            })
            .catch(error =&gt; {
                console.log(&#39;Service Worker registration failed:&#39;, error);
            });
    }
&lt;/script&gt;</pre><h4 data-v-a979b4f5>&lt;dialog&gt; Element</h4><p data-v-a979b4f5>Provides a native way to create modal dialogs in HTML.</p><pre data-v-a979b4f5>&lt;dialog id=&quot;my-dialog&quot;&gt;
    &lt;p&gt;Native Modal Example&lt;/p&gt;
    &lt;button onclick=&quot;document.getElementById(&#39;my-dialog&#39;).close()&quot;&gt;Close&lt;/button&gt;
&lt;/dialog&gt;
&lt;button onclick=&quot;document.getElementById(&#39;my-dialog&#39;).showModal()&quot;&gt;Open Dialog&lt;/button&gt;</pre><h4 data-v-a979b4f5>Native Lazy Loading (\`loading=&quot;lazy&quot;\`)</h4><p data-v-a979b4f5>Defers loading of offscreen images, improving page load performance.</p><pre data-v-a979b4f5>&lt;img src=&quot;large-image.jpg&quot; alt=&quot;Lazy Loaded Image&quot; loading=&quot;lazy&quot;&gt;</pre><h4 data-v-a979b4f5>Web Components</h4><p data-v-a979b4f5>Allow creation of reusable and encapsulated custom elements.</p><h4 data-v-a979b4f5>Custom Elements</h4><pre data-v-a979b4f5>&lt;script&gt;
    class MyCustomElement extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: &#39;open&#39; });
            this.shadowRoot.innerHTML = \`&lt;p&gt;Custom Element Content&lt;/p&gt;\`;
        }
    }
    customElements.define(&#39;my-custom-element&#39;, MyCustomElement);
&lt;/script&gt;</pre><h4 data-v-a979b4f5>Shadow DOM</h4><p data-v-a979b4f5>Encapsulates the internal structure of a web component.</p><pre data-v-a979b4f5>&lt;script&gt;
    class ShadowDomExample extends HTMLElement {
        constructor() {
            super();
            const shadow = this.attachShadow({ mode: &#39;open&#39; });
            shadow.innerHTML = \`&lt;p&gt;Shadow DOM Content&lt;/p&gt;\`;
        }
    }
    customElements.define(&#39;shadow-dom-example&#39;, ShadowDomExample);
&lt;/script&gt;</pre></div>`,1))]))}},g=e(s,[["__scopeId","data-v-a979b4f5"]]);export{g as default};
