import{_ as a,c as e,a as d,b as i,o,S as l}from"./index-CWlCYwLL.js";const n={class:"d-flex flex-container"},r={__name:"Html11",setup(s){return(c,t)=>(o(),e("div",n,[d(l),t[0]||(t[0]=i(`<div class="flex-fill p-4 content html11-pad" data-v-aaafd1ed><h1 data-v-aaafd1ed>11. Browser Compatibility and Best Practices</h1><hr data-v-aaafd1ed><h2 data-v-aaafd1ed>Overview</h2><p data-v-aaafd1ed>This section discusses strategies for ensuring browser compatibility and adherence to best practices in web development.</p><h3 data-v-aaafd1ed>Key Practices:</h3><ul data-v-aaafd1ed><li data-v-aaafd1ed>Feature Detection <ul data-v-aaafd1ed><li data-v-aaafd1ed>Using <code data-v-aaafd1ed>Modernizr</code></li></ul></li><li data-v-aaafd1ed>Polyfills for Unsupported Features</li><li data-v-aaafd1ed>HTML Validation (W3C Validator)</li><li data-v-aaafd1ed>Mobile-First Design <ul data-v-aaafd1ed><li data-v-aaafd1ed>Meta Viewport Tag <pre data-v-aaafd1ed>&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</pre></li></ul></li></ul><h3 data-v-aaafd1ed>Sample HTML Structure:</h3><pre data-v-aaafd1ed>&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;title&gt;Modern Web Development Features&lt;/title&gt;
    &lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;

    &lt;!-- Feature Detection --&gt;
    &lt;script&gt;
        if (Modernizr.canvas) {
            console.log(&#39;Canvas is supported&#39;);
        } else {
            console.log(&#39;Canvas is not supported&#39;);
        }
    &lt;/script&gt;

    &lt;!-- Polyfills for Unsupported Features --&gt;
    &lt;script&gt;
        if (!Modernizr.fetch) {
            var script = document.createElement(&#39;script&#39;);
            script.src = &#39;https://cdnjs.cloudflare.com/ajax/libs/fetch/3.0.0/fetch.min.js&#39;;
            document.head.appendChild(script);
        }
    &lt;/script&gt;

    &lt;!-- HTML Validation (W3C Validator) --&gt;
    &lt;p&gt;Use the W3C Validator to check the validity of your HTML code: &lt;a href=&quot;https://validator.w3.org/&quot;&gt;W3C Validator&lt;/a&gt;&lt;/p&gt;

    &lt;!-- Mobile-First Design --&gt;
    &lt;!-- Meta Viewport Tag --&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;

&lt;/body&gt;
&lt;/html&gt;
      </pre><h3 data-v-aaafd1ed>Feature Explanations:</h3><h4 data-v-aaafd1ed>Feature Detection</h4><p data-v-aaafd1ed>Utilizes Modernizr to check for support of various HTML5 features in the browser.</p><h4 data-v-aaafd1ed>Polyfills for Unsupported Features</h4><p data-v-aaafd1ed>Includes scripts to provide functionality for features not natively supported by the browser.</p><h4 data-v-aaafd1ed>HTML Validation (W3C Validator)</h4><p data-v-aaafd1ed>Utilize the <a href="https://validator.w3.org/" data-v-aaafd1ed>W3C Validator</a> to ensure your HTML code is valid.</p><h4 data-v-aaafd1ed>Mobile-First Design</h4><p data-v-aaafd1ed>Focuses on designing for mobile devices first, using the viewport meta tag for proper scaling.</p></div>`,1))]))}},f=a(r,[["__scopeId","data-v-aaafd1ed"]]);export{f as default};
