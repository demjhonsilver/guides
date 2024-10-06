<script setup>
import Sidebar from './Sidebar.vue'; // Importing Sidebar from the same folder
</script>

<template>
  <div class="d-flex flex-container">
    <Sidebar />
    <div class="flex-fill p-4 content html5-pad">
      <h1>5. HTML5 Semantic Elements</h1>
      <p>Semantic elements are those that clearly describe their meaning to both the browser and the developer. They help in organizing content and improving accessibility.</p>

      <h2>&lt;header&gt; (Page or Section Headers)</h2>
      <p>The &lt;header&gt; element is used to define introductory content or navigational links for a page or a section. It typically contains headings, logos, or introductory content.</p>
      <pre>
&lt;header&gt;
  &lt;h1&gt;My Website&lt;/h1&gt;
  &lt;nav&gt;
    &lt;ul&gt;
      &lt;li&gt;&lt;a href="#home"&gt;Home&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="#about"&gt;About&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="#contact"&gt;Contact&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/nav&gt;
&lt;/header&gt;
      </pre>

      <h2>&lt;footer&gt; (Page or Section Footers)</h2>
      <p>The &lt;footer&gt; element defines the footer for a page or section, typically containing information about the author, copyright information, or related documents.</p>
      <pre>
&lt;footer&gt;
  &lt;p&gt;&copy; 2024 My Website&lt;/p&gt;
  &lt;a href="#privacy-policy"&gt;Privacy Policy&lt;/a&gt;
&lt;/footer&gt;
      </pre>

      <h2>&lt;section&gt; (Generic Content Sections)</h2>
      <p>The &lt;section&gt; element defines thematic grouping of content, typically with a heading.</p>
      <pre>
&lt;section&gt;
  &lt;h2&gt;About Us&lt;/h2&gt;
  &lt;p&gt;We are a company dedicated to providing quality services.&lt;/p&gt;
&lt;/section&gt;
      </pre>

      <h2>&lt;article&gt; (Self-contained Content)</h2>
      <p>The &lt;article&gt; element represents a self-contained piece of content that could be distributed independently, such as a blog post or news article.</p>
      <pre>
&lt;article&gt;
  &lt;h2&gt;Breaking News&lt;/h2&gt;
  &lt;p&gt;This is a summary of the breaking news story.&lt;/p&gt;
&lt;/article&gt;
      </pre>

      <h2>&lt;aside&gt; (Complementary Content)</h2>
      <p>The &lt;aside&gt; element is for content related to the main content but considered separate, like sidebars or pull quotes.</p>
      <pre>
&lt;aside&gt;
  &lt;h3&gt;Related Articles&lt;/h3&gt;
  &lt;ul&gt;
    &lt;li&gt;&lt;a href="#article1"&gt;Article 1&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#article2"&gt;Article 2&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/aside&gt;
      </pre>

      <h2>&lt;main&gt; (Primary Page Content)</h2>
      <p>The &lt;main&gt; element encapsulates the main content of a document, excluding headers, footers, and sidebars.</p>
      <pre>
&lt;main&gt;
  &lt;h2&gt;Main Content Heading&lt;/h2&gt;
  &lt;p&gt;This is the primary content of the webpage.&lt;/p&gt;
&lt;/main&gt;
      </pre>

      <h2>&lt;figure&gt; and &lt;figcaption&gt; (Figures and Captions)</h2>
      <p>The &lt;figure&gt; element encapsulates content like images or diagrams, along with an optional &lt;figcaption&gt; for a caption.</p>
      <pre>
&lt;figure&gt;
  &lt;img src="image.jpg" alt="A descriptive image"&gt;
  &lt;figcaption&gt;This is the caption for the image.&lt;/figcaption&gt;
&lt;/figure&gt;
      </pre>

      <h2>&lt;time&gt; (Dates and Times)</h2>
      <p>The &lt;time&gt; element represents a specific period in time, including a machine-readable format.</p>
      <pre>
&lt;time datetime="2024-09-29"&gt;September 29, 2024&lt;/time&gt;
      </pre>
    </div>
  </div>
</template>

<style scoped>
/* Styles specific to the HTML page can go here */
.html5-pad {
  margin-left: 270px;
}

@media (max-width: 1000px) {
  .html5-pad {
    width: 40%;
  margin-left: 250px;
 }
}

@media (max-width: 768px) {
  .html5-pad {
    width: 80%;
  margin-left: 50px;
 }
}

</style>