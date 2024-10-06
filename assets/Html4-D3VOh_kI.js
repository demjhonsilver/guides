import{_ as a,c as e,a as o,b as u,o as n,S as l}from"./index-CWlCYwLL.js";const d={class:"d-flex flex-container"},r={__name:"Html4",setup(p){return(q,t)=>(n(),e("div",d,[o(l),t[0]||(t[0]=u(`<div class="flex-fill p-4 content html4-pad" data-v-a9f1da0a><h1 data-v-a9f1da0a>4. HTML Forms and Input Elements</h1><p data-v-a9f1da0a>Forms are essential for collecting user input in HTML. They allow you to create interactive web applications by sending data to a server.</p><h2 data-v-a9f1da0a>Basic Form Structure</h2><h3 data-v-a9f1da0a>&lt;form&gt; Element (Attributes: action, method)</h3><p data-v-a9f1da0a>The &lt;form&gt; element wraps all the input fields and sends the data to a server when submitted.</p><ul data-v-a9f1da0a><li data-v-a9f1da0a><strong data-v-a9f1da0a>action</strong>: The URL to which the form data is sent.</li><li data-v-a9f1da0a><strong data-v-a9f1da0a>method</strong>: The HTTP method used for sending data (GET or POST).</li></ul><pre data-v-a9f1da0a>&lt;form action=&quot;/submit-form&quot; method=&quot;POST&quot;&gt;
  &lt;input type=&quot;text&quot; name=&quot;username&quot; placeholder=&quot;Enter your username&quot;&gt;
  &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;
&lt;/form&gt;
      </pre><h2 data-v-a9f1da0a>Input Elements</h2><p data-v-a9f1da0a>Common Input Elements: &lt;input&gt;, &lt;textarea&gt;, &lt;button&gt;</p><p data-v-a9f1da0a>The &lt;input&gt; element is the most commonly used form control, while &lt;textarea&gt; allows multi-line input.</p><pre data-v-a9f1da0a>&lt;form&gt;
  &lt;input type=&quot;text&quot; name=&quot;username&quot; placeholder=&quot;Username&quot;&gt;
  &lt;input type=&quot;email&quot; name=&quot;email&quot; placeholder=&quot;Email&quot;&gt;
  &lt;input type=&quot;password&quot; name=&quot;password&quot; placeholder=&quot;Password&quot;&gt;
  &lt;textarea name=&quot;message&quot; placeholder=&quot;Your message here&quot;&gt;&lt;/textarea&gt;
  &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;
&lt;/form&gt;
      </pre><h2 data-v-a9f1da0a>Input Types</h2><h3 data-v-a9f1da0a>Text, Email, Password Inputs</h3><p data-v-a9f1da0a>These are standard input types used in forms.</p><pre data-v-a9f1da0a>&lt;input type=&quot;text&quot;&gt;: For single-line text.
&lt;input type=&quot;email&quot;&gt;: For email addresses (includes validation).
&lt;input type=&quot;password&quot;&gt;: For password fields (hides the input).
      </pre><h3 data-v-a9f1da0a>Radio Buttons and Checkboxes</h3><p data-v-a9f1da0a>Radio Buttons allow users to select one option from a group, while Checkboxes allow multiple selections.</p><pre data-v-a9f1da0a>&lt;form&gt;
  &lt;input type=&quot;radio&quot; name=&quot;gender&quot; value=&quot;male&quot;&gt; Male
  &lt;input type=&quot;radio&quot; name=&quot;gender&quot; value=&quot;female&quot;&gt; Female
  &lt;input type=&quot;checkbox&quot; name=&quot;subscribe&quot; value=&quot;newsletter&quot;&gt; Subscribe to newsletter
&lt;/form&gt;
      </pre><h2 data-v-a9f1da0a>File Upload</h2><pre data-v-a9f1da0a>&lt;form&gt;
  &lt;input type=&quot;file&quot; name=&quot;upload-file&quot;&gt;
  &lt;button type=&quot;submit&quot;&gt;Upload&lt;/button&gt;
&lt;/form&gt;
      </pre><h2 data-v-a9f1da0a>Hidden Inputs</h2><pre data-v-a9f1da0a>&lt;form&gt;
  &lt;input type=&quot;hidden&quot; name=&quot;userId&quot; value=&quot;12345&quot;&gt;
  &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;
&lt;/form&gt;
      </pre><h2 data-v-a9f1da0a>Input Types (HTML5-specific)</h2><h3 data-v-a9f1da0a>Date, Time, Week, Month</h3><pre data-v-a9f1da0a>&lt;input type=&quot;date&quot;&gt;: Select a date.
&lt;input type=&quot;time&quot;&gt;: Select a time.
&lt;input type=&quot;week&quot;&gt;: Select a week.
&lt;input type=&quot;month&quot;&gt;: Select a month.
      </pre><h3 data-v-a9f1da0a>Color Picker</h3><pre data-v-a9f1da0a>&lt;input type=&quot;color&quot; name=&quot;favcolor&quot; value=&quot;#ff0000&quot;&gt;
      </pre><h3 data-v-a9f1da0a>Number and Range Inputs</h3><pre data-v-a9f1da0a>&lt;form&gt;
  &lt;input type=&quot;number&quot; name=&quot;quantity&quot; min=&quot;1&quot; max=&quot;10&quot;&gt;
  &lt;input type=&quot;range&quot; name=&quot;volume&quot; min=&quot;0&quot; max=&quot;100&quot;&gt;
&lt;/form&gt;
      </pre><h3 data-v-a9f1da0a>Search Input</h3><pre data-v-a9f1da0a>&lt;form&gt;
  &lt;input type=&quot;search&quot; name=&quot;query&quot; placeholder=&quot;Search...&quot;&gt;
&lt;/form&gt;
      </pre><h2 data-v-a9f1da0a>Form Validation</h2><h3 data-v-a9f1da0a>Required Fields</h3><pre data-v-a9f1da0a>&lt;form&gt;
  &lt;input type=&quot;text&quot; name=&quot;username&quot; required&gt;
  &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;
&lt;/form&gt;
      </pre><h3 data-v-a9f1da0a>Pattern Matching</h3><pre data-v-a9f1da0a>&lt;form&gt;
  &lt;input type=&quot;text&quot; name=&quot;username&quot; pattern=&quot;[A-Za-z0-9]{5,}&quot; title=&quot;At least 5 characters&quot;&gt;
  &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;
&lt;/form&gt;
      </pre><h3 data-v-a9f1da0a>Input Constraints</h3><pre data-v-a9f1da0a>&lt;form&gt;
  &lt;input type=&quot;number&quot; name=&quot;age&quot; min=&quot;18&quot; max=&quot;100&quot; step=&quot;1&quot;&gt;
  &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;
&lt;/form&gt;
      </pre></div>`,1))]))}},s=a(r,[["__scopeId","data-v-a9f1da0a"]]);export{s as default};
