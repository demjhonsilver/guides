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

      <h3>Lists</h3>
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

      <h3>Links and Navigation</h3>

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

      <h3>Tables</h3>
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
</style>
