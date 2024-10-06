<script setup>
import Sidebar from './Sidebar.vue'; // Importing Sidebar from the same folder
</script>

<template>
  <div class="d-flex flex-container">
    <Sidebar />
    <div class="flex-fill p-4 content html8-pad">
      <h1>HTML Accessibility</h1>
      <hr>

      <h2>1. Alt Text for Images (alt attribute)</h2>
      <p>Providing alternative text for images ensures that users with visual impairments can understand the content.</p>
      <pre>&lt;img src="image.jpg" alt="A beautiful sunset over the mountains"&gt;</pre>
      <p>Explanation: The alt attribute describes the image, which is read by screen readers, enhancing accessibility.</p>

      <h2>2. ARIA (Accessible Rich Internet Applications) Attributes</h2>
      <p>ARIA attributes help improve accessibility for complex web applications, providing additional semantic information.</p>
      <pre>&lt;button aria-label="Close" onclick="closeModal()"&gt;X&lt;/button&gt;</pre>
      <p>Explanation: The aria-label attribute gives context to the button for screen reader users, indicating its function.</p>

      <h2>3. Keyboard Navigation</h2>
      <p>Ensuring that all interactive elements are accessible via keyboard navigation is crucial for users with mobility impairments.</p>
      <pre>&lt;a href="#section" tabindex="0"&gt;Skip to Content&lt;/a&gt;</pre>
      <p>Explanation: The tabindex attribute allows the link to be focused using the keyboard, facilitating easy navigation.</p>

      <h2>4. &lt;label&gt; Tag for Form Inputs</h2>
      <p>Using &lt;label&gt; tags improves accessibility by clearly associating labels with their corresponding form inputs.</p>
      <pre>&lt;label for="username"&gt;Username:&lt;/label&gt;<br>
&lt;input type="text" id="username" name="username"&gt;</pre>
      <p>Explanation: Clicking the label focuses the input field, which is helpful for all users, including those with disabilities.</p>

      <h2>5. Using &lt;fieldset&gt; and &lt;legend&gt; for Form Grouping</h2>
      <p>Grouping related form elements with &lt;fieldset&gt; and &lt;legend&gt; enhances accessibility and improves the user experience.</p>
      <pre>
&lt;fieldset&gt;
    &lt;legend&gt;Personal Information&lt;/legend&gt;
    &lt;label for="name"&gt;Name:&lt;/label&gt;
    &lt;input type="text" id="name" name="name"&gt;<br>
    
    &lt;label for="email"&gt;Email:&lt;/label&gt;
    &lt;input type="email" id="email" name="email"&gt;
&lt;/fieldset&gt;</pre>
      <p>Explanation: The &lt;legend&gt; provides context for the grouped fields, making it easier for screen readers to convey the information.</p>

      <h2>6. Semantic HTML for Screen Readers</h2>
      <p>Using semantic HTML elements (like &lt;header&gt;, &lt;nav&gt;, &lt;article&gt;, etc.) enhances the accessibility of your content.</p>
      <pre>
&lt;article&gt;
    &lt;header&gt;
        &lt;h1&gt;Article Title&lt;/h1&gt;
    &lt;/header&gt;
    &lt;p&gt;This is the content of the article.&lt;/p&gt;
&lt;/article&gt;</pre>
      <p>Explanation: Semantic elements provide meaning to the structure, allowing screen readers to better interpret and navigate the content.</p>
      <h3>Full code</h3>
   
   
    </div>





    <div class="xa8">
        <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;HTML Accessibility Example&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;

    &lt;header&gt;
        &lt;h1&gt;Welcome to Our Website&lt;/h1&gt;
        &lt;nav&gt;
            &lt;ul&gt;
                &lt;li&gt;&lt;a href="#about" tabindex="0"&gt;About&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href="#services" tabindex="0"&gt;Services&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href="#contact" tabindex="0"&gt;Contact&lt;/a&gt;&lt;/li&gt;
            &lt;/ul&gt;
        &lt;/nav&gt;
    &lt;/header&gt;

    &lt;main&gt;
        &lt;section id="about"&gt;
            &lt;h2&gt;About Us&lt;/h2&gt;
            &lt;img src="sunset.jpg" alt="A beautiful sunset over the mountains"&gt;
            &lt;p&gt;We are dedicated to providing the best service possible.&lt;/p&gt;
        &lt;/section&gt;

        &lt;section id="services"&gt;
            &lt;h2&gt;Our Services&lt;/h2&gt;
            &lt;p&gt;We offer a variety of services to meet your needs.&lt;/p&gt;
            &lt;button aria-label="More information about our services"&gt;Learn More&lt;/button&gt;
        &lt;/section&gt;

        &lt;section id="contact"&gt;
            &lt;h2&gt;Contact Us&lt;/h2&gt;
            &lt;form&gt;
                &lt;fieldset&gt;
                    &lt;legend&gt;Personal Information&lt;/legend&gt;
                    &lt;label for="name"&gt;Name:&lt;/label&gt;
                    &lt;input type="text" id="name" name="name" required&gt;
                    
                    &lt;label for="email"&gt;Email:&lt;/label&gt;
                    &lt;input type="email" id="email" name="email" required&gt;
                &lt;/fieldset&gt;
                
                &lt;button type="submit"&gt;Submit&lt;/button&gt;
            &lt;/form&gt;
        &lt;/section&gt;
    &lt;/main&gt;

    &lt;footer&gt;
        &lt;p&gt;&copy; 2024 Our Website. All rights reserved.&lt;/p&gt;
    &lt;/footer&gt;

  &lt;/body&gt;
&lt;/html&gt;
</code></pre>
</div>




  </div>
</template>

<style scoped>
.xa8 {
    margin-left: 300px;
    width: 100%;
}

.html8-pad {
  margin-left: 270px;
}

@media (max-width: 1115px) {
s
.xa8 {
   margin-left: 300px;
   width: 50%;
}
}

@media (max-width: 1000px) {
  .html8-pad {
    width: 40%;
  margin-left: 250px;
 }
}

@media (max-width: 768px) {
  .html8-pad {
    width: 80%;
  margin-left: 50px;
 }
 .xa8 {
  margin-left: 50px;
    width: 80%;
 }
}

</style>