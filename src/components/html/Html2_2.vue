<script setup>
import Sidebar from './Sidebar.vue'; // Importing Sidebar from the same folder
</script>

<template>
  <div class="d-flex flex-container">
    <Sidebar />
    <div class="flex-fill p-4 content html2-2-pad">

      <h1>2. Basic HTML Elements</h1>
      <hr>
      <h2>Lists</h2>


      <p>HTML provides several types of lists to structure content.</p>

      <h3>Ordered Lists (&lt;ol&gt;)</h3>
      <p>An ordered list (&lt;ol&gt;) creates a numbered list of items. Each list item is contained within the &lt;li&gt; (list item) tag.</p>
      <h4>Example:</h4>
      <pre>
&lt;ol&gt;
  &lt;li&gt;First item&lt;/li&gt;
  &lt;li&gt;Second item&lt;/li&gt;
  &lt;li&gt;Third item&lt;/li&gt;
&lt;/ol&gt;
      </pre>

      <h3>Unordered Lists (&lt;ul&gt;)</h3>
      <p>An unordered list (&lt;ul&gt;) creates a bulleted list of items.</p>
      <h4>Example:</h4>
      <pre>
&lt;ul&gt;
  &lt;li&gt;Item one&lt;/li&gt;
  &lt;li&gt;Item two&lt;/li&gt;
  &lt;li&gt;Item three&lt;/li&gt;
&lt;/ul&gt;
      </pre>

      <h3>Definition Lists (&lt;dl&gt;, &lt;dt&gt;, &lt;dd&gt;)</h3>
      <p>A definition list (&lt;dl&gt;) is used to define terms and their descriptions. Inside, the &lt;dt&gt; tag defines the term, and the &lt;dd&gt; tag defines its description.</p>
      <h4>Example:</h4>
      <pre>
&lt;dl&gt;
  &lt;dt&gt;HTML&lt;/dt&gt;
  &lt;dd&gt;A markup language used to structure web pages.&lt;/dd&gt;
  
  &lt;dt&gt;CSS&lt;/dt&gt;
  &lt;dd&gt;A stylesheet language used for describing the look and formatting of a document written in HTML.&lt;/dd&gt;
&lt;/dl&gt;
      </pre>

   
    </div>
  </div>
</template>

<style scoped>
/* Styles specific to the HTML page can go here */
.html2-2-pad {
  margin-left: 270px;
}

@media (max-width: 1000px) {
.html2-2-pad{
    width: 40%;
  margin-left: 250px;
 }
}

@media (max-width: 768px) {
.html2-2-pad {
    width: 80%;
  margin-left: 50px;
 }
}
</style>
