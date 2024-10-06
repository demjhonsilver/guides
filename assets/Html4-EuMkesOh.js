import{_ as e,c as o,a as u,b as a,o as n,S as l}from"./index-Cx8zt168.js";const r={class:"d-flex flex-container"},c={__name:"Html4",setup(p){return(q,t)=>(n(),o("div",r,[u(l),t[0]||(t[0]=a(`<div class="flex-fill p-4 content" data-v-6c407ec4><h1 data-v-6c407ec4>4. HTML Forms and Input Elements</h1><p data-v-6c407ec4>Forms are essential for collecting user input in HTML. They allow you to create interactive web applications by sending data to a server.</p><h2 data-v-6c407ec4>Basic Form Structure</h2><h3 data-v-6c407ec4>&lt;form&gt; Element (Attributes: action, method)</h3><p data-v-6c407ec4>The &lt;form&gt; element wraps all the input fields and sends the data to a server when submitted.</p><ul data-v-6c407ec4><li data-v-6c407ec4><strong data-v-6c407ec4>action</strong>: The URL to which the form data is sent.</li><li data-v-6c407ec4><strong data-v-6c407ec4>method</strong>: The HTTP method used for sending data (GET or POST).</li></ul><pre data-v-6c407ec4>&lt;form action=&quot;/submit-form&quot; method=&quot;POST&quot;&gt;
  &lt;input type=&quot;text&quot; name=&quot;username&quot; placeholder=&quot;Enter your username&quot;&gt;
  &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;
&lt;/form&gt;
      </pre><h2 data-v-6c407ec4>Input Elements</h2><p data-v-6c407ec4>Common Input Elements: &lt;input&gt;, &lt;textarea&gt;, &lt;button&gt;</p><p data-v-6c407ec4>The &lt;input&gt; element is the most commonly used form control, while &lt;textarea&gt; allows multi-line input.</p><pre data-v-6c407ec4>&lt;form&gt;
  &lt;input type=&quot;text&quot; name=&quot;username&quot; placeholder=&quot;Username&quot;&gt;
  &lt;input type=&quot;email&quot; name=&quot;email&quot; placeholder=&quot;Email&quot;&gt;
  &lt;input type=&quot;password&quot; name=&quot;password&quot; placeholder=&quot;Password&quot;&gt;
  &lt;textarea name=&quot;message&quot; placeholder=&quot;Your message here&quot;&gt;&lt;/textarea&gt;
  &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;
&lt;/form&gt;
      </pre><h2 data-v-6c407ec4>Input Types</h2><h3 data-v-6c407ec4>Text, Email, Password Inputs</h3><p data-v-6c407ec4>These are standard input types used in forms.</p><pre data-v-6c407ec4>&lt;input type=&quot;text&quot;&gt;: For single-line text.
&lt;input type=&quot;email&quot;&gt;: For email addresses (includes validation).
&lt;input type=&quot;password&quot;&gt;: For password fields (hides the input).
      </pre><h3 data-v-6c407ec4>Radio Buttons and Checkboxes</h3><p data-v-6c407ec4>Radio Buttons allow users to select one option from a group, while Checkboxes allow multiple selections.</p><pre data-v-6c407ec4>&lt;form&gt;
  &lt;input type=&quot;radio&quot; name=&quot;gender&quot; value=&quot;male&quot;&gt; Male
  &lt;input type=&quot;radio&quot; name=&quot;gender&quot; value=&quot;female&quot;&gt; Female
  &lt;input type=&quot;checkbox&quot; name=&quot;subscribe&quot; value=&quot;newsletter&quot;&gt; Subscribe to newsletter
&lt;/form&gt;
      </pre><h2 data-v-6c407ec4>File Upload</h2><pre data-v-6c407ec4>&lt;form&gt;
  &lt;input type=&quot;file&quot; name=&quot;upload-file&quot;&gt;
  &lt;button type=&quot;submit&quot;&gt;Upload&lt;/button&gt;
&lt;/form&gt;
      </pre><h2 data-v-6c407ec4>Hidden Inputs</h2><pre data-v-6c407ec4>&lt;form&gt;
  &lt;input type=&quot;hidden&quot; name=&quot;userId&quot; value=&quot;12345&quot;&gt;
  &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;
&lt;/form&gt;
      </pre><h2 data-v-6c407ec4>Input Types (HTML5-specific)</h2><h3 data-v-6c407ec4>Date, Time, Week, Month</h3><pre data-v-6c407ec4>&lt;input type=&quot;date&quot;&gt;: Select a date.
&lt;input type=&quot;time&quot;&gt;: Select a time.
&lt;input type=&quot;week&quot;&gt;: Select a week.
&lt;input type=&quot;month&quot;&gt;: Select a month.
      </pre><h3 data-v-6c407ec4>Color Picker</h3><pre data-v-6c407ec4>&lt;input type=&quot;color&quot; name=&quot;favcolor&quot; value=&quot;#ff0000&quot;&gt;
      </pre><h3 data-v-6c407ec4>Number and Range Inputs</h3><pre data-v-6c407ec4>&lt;form&gt;
  &lt;input type=&quot;number&quot; name=&quot;quantity&quot; min=&quot;1&quot; max=&quot;10&quot;&gt;
  &lt;input type=&quot;range&quot; name=&quot;volume&quot; min=&quot;0&quot; max=&quot;100&quot;&gt;
&lt;/form&gt;
      </pre><h3 data-v-6c407ec4>Search Input</h3><pre data-v-6c407ec4>&lt;form&gt;
  &lt;input type=&quot;search&quot; name=&quot;query&quot; placeholder=&quot;Search...&quot;&gt;
&lt;/form&gt;
      </pre><h2 data-v-6c407ec4>Form Validation</h2><h3 data-v-6c407ec4>Required Fields</h3><pre data-v-6c407ec4>&lt;form&gt;
  &lt;input type=&quot;text&quot; name=&quot;username&quot; required&gt;
  &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;
&lt;/form&gt;
      </pre><h3 data-v-6c407ec4>Pattern Matching</h3><pre data-v-6c407ec4>&lt;form&gt;
  &lt;input type=&quot;text&quot; name=&quot;username&quot; pattern=&quot;[A-Za-z0-9]{5,}&quot; title=&quot;At least 5 characters&quot;&gt;
  &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;
&lt;/form&gt;
      </pre><h3 data-v-6c407ec4>Input Constraints</h3><pre data-v-6c407ec4>&lt;form&gt;
  &lt;input type=&quot;number&quot; name=&quot;age&quot; min=&quot;18&quot; max=&quot;100&quot; step=&quot;1&quot;&gt;
  &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;
&lt;/form&gt;
      </pre></div>`,1))]))}},s=e(c,[["__scopeId","data-v-6c407ec4"]]);export{s as default};
