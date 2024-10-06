<script setup>
import Sidebar from './Sidebar.vue'; // Importing Sidebar from the same folder
</script>

<template>
  <div class="d-flex flex-container">
    <Sidebar />
    <div class="flex-fill p-4 content">

      <h1>2. Basic HTML Elements</h1>
      <hr>
      <h2>Links and Navigation</h2>

      <h3>Hyperlinks (&lt;a&gt;)</h3>
      <p>Hyperlinks (&lt;a&gt;) are used to link to other web pages, sections within a page, or external resources. The href attribute specifies the target URL.</p>
      <h4>Example:</h4>
      <pre>
&lt;a href="https://www.example.com"&gt;Visit Example&lt;/a&gt;
      </pre>

      <h3>Navigation (&lt;nav&gt;)</h3>
      <p>The &lt;nav&gt; element is used to define a section of navigation links. It semantically indicates that the links within are for navigating the website.</p>
      <h4>Example:</h4>
      <pre>
&lt;nav&gt;
  &lt;a href="#home"&gt;Home&lt;/a&gt; |
  &lt;a href="#about"&gt;About&lt;/a&gt; |
  &lt;a href="#contact"&gt;Contact&lt;/a&gt;
&lt;/nav&gt;
      </pre>

    </div>
  </div>
</template>

<style scoped>
/* Styles specific to the HTML page can go here */
</style>