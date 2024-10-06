<script setup>
import Sidebar from './Sidebar.vue'; // Importing Sidebar from the same folder
</script>

<template>
  <div class="d-flex flex-container">
    <Sidebar />
    <div class="flex-fill p-4 content">
        <h1>2. Basic HTML Elements</h1>
      <hr>
      <h2>Text Elements</h2>
      <p>HTML provides several elements for structuring and formatting text content.</p>

      <h3>Headings (&lt;h1&gt; - &lt;h6&gt;)</h3>
      <p>Headings are used to define titles and subtitles in a hierarchical structure. The &lt;h1&gt; element defines the most important heading, and &lt;h6&gt; defines the least important.</p>
      <h3>Example:</h3>
      <pre>
&lt;h1&gt;Main Heading&lt;/h1&gt;
&lt;h3&gt;Subheading&lt;/h3&gt;
&lt;h3&gt;Sub-subheading&lt;/h3&gt;
      </pre>

      <h3>Paragraphs (&lt;p&gt;)</h3>
      <p>Paragraphs are defined using the &lt;p&gt; tag and are used to group blocks of text.</p>
      <h3>Example:</h3>
      <pre>
&lt;p&gt;This is a paragraph of text. Paragraphs are typically used to contain longer blocks of text, such as descriptions, articles, or any other form of textual content.&lt;/p&gt;
      </pre>

      <h3>Line Breaks (&lt;br&gt;)</h3>
      <p>The &lt;br&gt; tag creates a line break, causing text to continue on the next line. This tag is self-closing and does not have an end tag.</p>
      <h3>Example:</h3>
      <pre>
&lt;p&gt;This is a sentence.&lt;br&gt;This is on a new line.&lt;/p&gt;
      </pre>

      <h3>Horizontal Rules (&lt;hr&gt;)</h3>
      <p>The &lt;hr&gt; tag inserts a horizontal line across the page, used to separate content sections visually.</p>
      <h3>Example:</h3>
      <pre>
&lt;p&gt;Section 1&lt;/p&gt;
&lt;hr&gt;
&lt;p&gt;Section 2&lt;/p&gt;
      </pre>

   
    </div>
  </div>
</template>

<style scoped>
/* Styles specific to the HTML page can go here */
</style>
