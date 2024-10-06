<script setup>
import Sidebar from './Sidebar.vue'; // Importing Sidebar from the same folder
</script>

<template>
  <div class="d-flex flex-container">
    <Sidebar />
    <div class="flex-fill p-4" style="margin-left: 270px;">
      <h1>What is HTML?</h1>
      <hr>
      <p>HTML (HyperText Markup Language) is the standard language used to create and structure content on the web. It defines the meaning and structure of web content through a system of tags, which tell the browser how to display text, images, and multimedia.</p>

      <h2>Tags, Elements, Attributes</h2>
      <p><strong>Tags:</strong> Tags are used to define HTML elements. A tag is enclosed in angle brackets, like &lt;tag&gt;.</p>
      <p><strong>Elements:</strong> An element consists of an opening tag, content (optional), and a closing tag.</p>
      <p><strong>Attributes:</strong> Attributes provide additional information about HTML elements.</p>
      
      <h3>Example:</h3>
      <p>&lt;p&gt;This is a paragraph element.&lt;/p&gt; (Tags, Elements)</p>
      <p>&lt;img src="image.jpg" alt="Image description" width="500" /&gt; (Attributes)</p>

      <h2>DOCTYPE Declaration</h2>
      <p>The DOCTYPE declaration is a required instruction that tells the browser what version of HTML the page is written in. In HTML5, it looks like this:</p>
      <pre>&lt;!DOCTYPE html&gt;</pre>

      <h2>Basic HTML Structure</h2>
      <p>Example:</p>
      <pre>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Document Title&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;This is a heading&lt;/h1&gt;
    &lt;p&gt;This is a paragraph.&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;
      </pre>

      <h2>Semantic HTML vs Non-Semantic HTML</h2>
      <p>Semantic HTML introduces elements that provide meaningful structure to the content. These tags help both search engines and developers understand the role of different parts of the web page.</p>

      <h3>Examples of Semantic HTML:</h3>
      <ul>
        <li>&lt;header&gt;: Represents the header of a webpage or section.</li>
        <li>&lt;article&gt;: Represents a self-contained piece of content, such as a blog post.</li>
        <li>&lt;footer&gt;: Represents the footer of a webpage or section.</li>
        <li>&lt;nav&gt;: Represents navigation links.</li>
        <li>&lt;section&gt;: Represents a section of content.</li>
      </ul>

      <h3>Examples of Non-Semantic HTML:</h3>
      <p>Non-semantic tags like &lt;div&gt; and &lt;span&gt; do not convey meaning and are used primarily for layout and styling purposes.</p>

      <pre>
&lt;!-- Semantic HTML --&gt;
&lt;article&gt;
  &lt;header&gt;
    &lt;h1&gt;Article Title&lt;/h1&gt;
  &lt;/header&gt;
  &lt;p&gt;This is the article content.&lt;/p&gt;
  &lt;footer&gt;Published on 2023&lt;/footer&gt;
&lt;/article&gt;

&lt;!-- Non-Semantic HTML --&gt;
&lt;div&gt;
  &lt;div&gt;Title&lt;/div&gt;
  &lt;div&gt;This is the article content.&lt;/div&gt;
  &lt;div&gt;Published on 2023&lt;/div&gt;
&lt;/div&gt;
      </pre>

      <h2>Self-closing Tags</h2>
      <p>Some HTML elements do not have content or a closing tag. These are called self-closing tags or void elements. They include the following elements:</p>
      <ul>
        <li>&lt;img&gt;: Embeds an image.</li>
        <li>&lt;br&gt;: Inserts a line break.</li>
        <li>&lt;hr&gt;: Inserts a horizontal rule.</li>
        <li>&lt;input&gt;: Defines an input field.</li>
      </ul>

      <h3>Example of Self-closing Tags:</h3>
      <pre>
&lt;img src="logo.png" alt="Website Logo" /&gt;
&lt;br /&gt;
&lt;hr /&gt;
&lt;input type="text" name="username" /&gt;
      </pre>

      <h2>Full Example:</h2>
      <pre>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;Document Title&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;This is a heading&lt;/h1&gt;
    &lt;p&gt;This is a paragraph.&lt;/p&gt;
    &lt;img src="logo.png" alt="Website Logo" /&gt;
    &lt;br /&gt;
    &lt;hr /&gt;
    &lt;input type="text" name="username" /&gt;
  &lt;/body&gt;
&lt;/html&gt;
      </pre>
    </div>
  </div>
</template>

<style scoped>
/* Styles specific to the HTML page can go here */
</style>
