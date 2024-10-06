<script setup>
import Sidebar from './Sidebar.vue'; // Importing Sidebar from the same folder
</script>

<template>
  <div class="d-flex flex-container">
    <Sidebar />
    <div class="flex-fill p-4 content html2-4-pad">
        <h1>2. Basic HTML Elements</h1>
      <hr>


      <h2>Tables</h2>
      <p>HTML tables allow you to organize data in rows and columns.</p>

      <h3>Basic Table Structure (&lt;table&gt;, &lt;tr&gt;, &lt;th&gt;, &lt;td&gt;)</h3>
      <p>&lt;table&gt;: Defines the table.<br>
         &lt;tr&gt;: Defines a row in the table.<br>
         &lt;th&gt;: Defines a table header.<br>
         &lt;td&gt;: Defines a table cell.<br>
         &lt;tbody&gt;: Defines a table body.</p>
      <h4>Example:</h4>
      <pre>
&lt;table&gt;
  &lt;tr&gt;
    &lt;th&gt;Name&lt;/th&gt;
    &lt;th&gt;Age&lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Alice&lt;/td&gt;
    &lt;td&gt;25&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Bob&lt;/td&gt;
    &lt;td&gt;30&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;
      </pre>

      <h3>Table Headers and Footers (&lt;thead&gt;, &lt;tfoot&gt;)</h3>
      <p>&lt;thead&gt;: Contains the header rows of a table.<br>
         &lt;tfoot&gt;: Contains the footer rows of a table, typically for summaries.</p>
      <h4>Example:</h4>
      <pre>
&lt;table&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;Product&lt;/th&gt;
      &lt;th&gt;Price&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tfoot&gt;
    &lt;tr&gt;
      &lt;td&gt;Total&lt;/td&gt;
      &lt;td&gt;$100&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tfoot&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;Item 1&lt;/td&gt;
      &lt;td&gt;$50&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;Item 2&lt;/td&gt;
      &lt;td&gt;$50&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;
      </pre>

      <h3>Merging Cells (colspan, rowspan)</h3>
      <p>colspan: Merges cells across columns.<br>
         rowspan: Merges cells across rows.</p>
      <h4>Example (colspan):</h4>
      <pre>
&lt;table&gt;
  &lt;tr&gt;
    &lt;th colspan="2"&gt;Merged Header&lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Row 1, Col 1&lt;/td&gt;
    &lt;td&gt;Row 1, Col 2&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;
      </pre>

      <h4>Example (rowspan):</h4>
      <pre>
&lt;table&gt;
  &lt;tr&gt;
    &lt;td rowspan="2"&gt;Merged Cell&lt;/td&gt;
    &lt;td&gt;Row 1, Col 2&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Row 2, Col 2&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;
      </pre>
    </div>
  </div>
</template>

<style scoped>
/* Styles specific to the HTML page can go here */
.html2-4-pad {
  margin-left: 270px;
}

@media (max-width: 1000px) {
.html2-4-pad{
    width: 40%;
  margin-left: 250px;
 }
}

@media (max-width: 768px) {
.html2-4-pad {
    width: 80%;
  margin-left: 50px;
 }
}

</style>