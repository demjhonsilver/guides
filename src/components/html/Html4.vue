<script setup>
import Sidebar from './Sidebar.vue'; // Importing Sidebar from the same folder
</script>

<template>
  <div class="d-flex flex-container">
    <Sidebar />
    <div class="flex-fill p-4 content html4-pad">
      <h1>4. HTML Forms and Input Elements</h1>
      <p>Forms are essential for collecting user input in HTML. They allow you to create interactive web applications by sending data to a server.</p>

      <h2>Basic Form Structure</h2>
      <h3>&lt;form&gt; Element (Attributes: action, method)</h3>
      <p>The &lt;form&gt; element wraps all the input fields and sends the data to a server when submitted.</p>
      <ul>
        <li><strong>action</strong>: The URL to which the form data is sent.</li>
        <li><strong>method</strong>: The HTTP method used for sending data (GET or POST).</li>
      </ul>
      <pre>
&lt;form action="/submit-form" method="POST"&gt;
  &lt;input type="text" name="username" placeholder="Enter your username"&gt;
  &lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;
      </pre>

      <h2>Input Elements</h2>
      <p>Common Input Elements: &lt;input&gt;, &lt;textarea&gt;, &lt;button&gt;</p>
      <p>The &lt;input&gt; element is the most commonly used form control, while &lt;textarea&gt; allows multi-line input.</p>
      <pre>
&lt;form&gt;
  &lt;input type="text" name="username" placeholder="Username"&gt;
  &lt;input type="email" name="email" placeholder="Email"&gt;
  &lt;input type="password" name="password" placeholder="Password"&gt;
  &lt;textarea name="message" placeholder="Your message here"&gt;&lt;/textarea&gt;
  &lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;
      </pre>

      <h2>Input Types</h2>
      <h3>Text, Email, Password Inputs</h3>
      <p>These are standard input types used in forms.</p>
      <pre>
&lt;input type="text"&gt;: For single-line text.
&lt;input type="email"&gt;: For email addresses (includes validation).
&lt;input type="password"&gt;: For password fields (hides the input).
      </pre>

      <h3>Radio Buttons and Checkboxes</h3>
      <p>Radio Buttons allow users to select one option from a group, while Checkboxes allow multiple selections.</p>
      <pre>
&lt;form&gt;
  &lt;input type="radio" name="gender" value="male"&gt; Male
  &lt;input type="radio" name="gender" value="female"&gt; Female
  &lt;input type="checkbox" name="subscribe" value="newsletter"&gt; Subscribe to newsletter
&lt;/form&gt;
      </pre>

      <h2>File Upload</h2>
      <pre>
&lt;form&gt;
  &lt;input type="file" name="upload-file"&gt;
  &lt;button type="submit"&gt;Upload&lt;/button&gt;
&lt;/form&gt;
      </pre>

      <h2>Hidden Inputs</h2>
      <pre>
&lt;form&gt;
  &lt;input type="hidden" name="userId" value="12345"&gt;
  &lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;
      </pre>

      <h2>Input Types (HTML5-specific)</h2>
      <h3>Date, Time, Week, Month</h3>
      <pre>
&lt;input type="date"&gt;: Select a date.
&lt;input type="time"&gt;: Select a time.
&lt;input type="week"&gt;: Select a week.
&lt;input type="month"&gt;: Select a month.
      </pre>

      <h3>Color Picker</h3>
      <pre>
&lt;input type="color" name="favcolor" value="#ff0000"&gt;
      </pre>

      <h3>Number and Range Inputs</h3>
      <pre>
&lt;form&gt;
  &lt;input type="number" name="quantity" min="1" max="10"&gt;
  &lt;input type="range" name="volume" min="0" max="100"&gt;
&lt;/form&gt;
      </pre>

      <h3>Search Input</h3>
      <pre>
&lt;form&gt;
  &lt;input type="search" name="query" placeholder="Search..."&gt;
&lt;/form&gt;
      </pre>

      <h2>Form Validation</h2>
      <h3>Required Fields</h3>
      <pre>
&lt;form&gt;
  &lt;input type="text" name="username" required&gt;
  &lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;
      </pre>

      <h3>Pattern Matching</h3>
      <pre>
&lt;form&gt;
  &lt;input type="text" name="username" pattern="[A-Za-z0-9]{5,}" title="At least 5 characters"&gt;
  &lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;
      </pre>

      <h3>Input Constraints</h3>
      <pre>
&lt;form&gt;
  &lt;input type="number" name="age" min="18" max="100" step="1"&gt;
  &lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;
      </pre>
    </div>
  </div>
</template>

<style scoped>
/* Styles specific to the HTML page can go here */
.html4-pad {
  margin-left: 270px;
}

@media (max-width: 1000px) {
  .html4-pad {
    width: 40%;
  margin-left: 250px;
 }
}

@media (max-width: 768px) {
  .html4-pad {
    width: 80%;
  margin-left: 50px;
 }
}

</style>