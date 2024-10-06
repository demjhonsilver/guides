<script setup>
import Sidebar from './Sidebar.vue'; // Importing Sidebar from the same folder
</script>

<template>
  <div class="d-flex flex-container">
    <Sidebar />
    <div class="flex-fill p-4 content html9-pad">
      <h1>9. Meta Information</h1>
      <hr>
      
      <h2>Overview</h2>
      <p>Meta information enhances your webpage's SEO, responsiveness, and social sharing capabilities.</p>

      <h3>Meta Tags</h3>
      <ul>
        <li>&lt;meta&gt; Tags (Character Set, Viewport, SEO)</li>
        <li>&lt;title&gt; Tag (Document Title)</li>
        <li>&lt;link&gt; Tag (Stylesheets, Icons)</li>
        <li>Favicons</li>
        <li>Open Graph Meta Tags (Social Sharing)</li>
        <li>Schema Markup (Structured Data for SEO)</li>
      </ul>

      <h3>Sample HTML Structure:</h3>
      <pre>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8"&gt; &lt;!-- Character Set --&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt; &lt;!-- Viewport for Responsive Design --&gt;
    &lt;meta name="description" content="This is a sample webpage that demonstrates various meta tags."&gt; &lt;!-- SEO Description --&gt;
    &lt;meta name="keywords" content="HTML, Meta Tags, Accessibility, SEO"&gt; &lt;!-- SEO Keywords --&gt;
    &lt;meta name="author" content="Your Name"&gt; &lt;!-- Author Information --&gt;
    &lt;meta property="og:title" content="Sample Webpage for Meta Information"&gt; &lt;!-- Open Graph Title --&gt;
    &lt;meta property="og:description" content="Learn about different types of meta information used in HTML."&gt; &lt;!-- Open Graph Description --&gt;
    &lt;meta property="og:image" content="image.jpg"&gt; &lt;!-- Open Graph Image --&gt;
    &lt;meta property="og:url" content="http://example.com/sample-page"&gt; &lt;!-- Open Graph URL --&gt;
    
    &lt;title&gt;Sample Webpage for Meta Information&lt;/title&gt; &lt;!-- Document Title --&gt;
    
    &lt;link rel="stylesheet" href="styles.css"&gt; &lt;!-- Stylesheet Link --&gt;
    &lt;link rel="icon" href="favicon.ico" type="image/x-icon"&gt; &lt;!-- Favicon --&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;header&gt;&lt;h1&gt;Welcome to Our Sample Webpage&lt;/h1&gt;&lt;/header&gt;
    &lt;main&gt;&lt;section&gt;&lt;h2&gt;About Meta Information&lt;/h2&gt;&lt;p&gt;Meta tags provide metadata about the HTML document, which can be used for SEO, social sharing, and more.&lt;/p&gt;&lt;/section&gt;&lt;/main&gt;
    &lt;footer&gt;&lt;p&gt;&copy; 2024 Sample Webpage. All rights reserved.&lt;/p&gt;&lt;/footer&gt;
  &lt;/body&gt;
&lt;/html&gt;
      </pre>

      <h3>Explanation of Each Meta Information Component:</h3>
      <h4>&lt;meta&gt; Tags:</h4>
      <ul>
        <li>Character Set: &lt;meta charset="UTF-8"&gt; specifies the character encoding.</li>
        <li>Viewport: &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt; ensures responsive design.</li>
        <li>SEO Description: &lt;meta name="description" content="..."&gt; summarizes the page's content for search engines.</li>
        <li>SEO Keywords: &lt;meta name="keywords" content="..."&gt; lists relevant keywords.</li>
        <li>Author Information: &lt;meta name="author" content="Your Name"&gt; specifies the author.</li>
      </ul>

      <h4>&lt;title&gt; Tag:</h4>
      <p>The &lt;title&gt; tag sets the document title for the browser tab and search engines.</p>

      <h4>&lt;link&gt; Tag:</h4>
      <ul>
        <li>Stylesheets: &lt;link rel="stylesheet" href="styles.css"&gt; links to an external CSS stylesheet.</li>
        <li>Icons: &lt;link rel="icon" href="favicon.ico" type="image/x-icon"&gt; specifies the favicon.</li>
      </ul>

      <h4>Favicons:</h4>
      <p>Favicons are small icons associated with a webpage.</p>

      <h4>Open Graph Meta Tags:</h4>
      <p>Open Graph tags control how the webpage is represented on social media.</p>

      <h4>Schema Markup (Structured Data for SEO):</h4>
      <p>Schema markup can be included using &lt;script type="application/ld+json"&gt; to provide structured data.</p>

      <h3>Example of Schema Markup:</h3>
      <pre>
&lt;script type="application/ld+json"&gt;
{
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Sample Webpage for Meta Information",
    "description": "Learn about different types of meta information used in HTML.",
    "url": "http://example.com/sample-page"
}
&lt;/script&gt;
      </pre>

      <p>This example demonstrates various meta information elements that enhance the document's SEO, responsiveness, and social media sharing capabilities.</p>
    </div>
  </div>
</template>

<style scoped>
/* Styles specific to the HTML page can go here */
.html9-pad {
  margin-left: 270px;
}

@media (max-width: 1000px) {
  .html9-pad {
    width: 40%;
  margin-left: 250px;
 }
}

@media (max-width: 768px) {
  .html9-pad {
    width: 80%;
  margin-left: 50px;
 }
}

</style>
