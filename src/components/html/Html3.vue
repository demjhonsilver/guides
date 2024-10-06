<script setup>
import Sidebar from './Sidebar.vue'; // Importing Sidebar from the same folder
</script>

<template>
  <div class="d-flex flex-container">
    <Sidebar />
    <div class="flex-fill p-4 content">
      <h1>3. Multimedia Elements</h1>
      <p>This section covers different multimedia elements you can use in HTML.</p>

      <h2>Images</h2>
      <h3>&lt;img&gt; Tag (Attributes: src, alt, width, height)</h3>
      <p>The &lt;img&gt; tag is used to embed images into a webpage. The src attribute specifies the path to the image, and the alt attribute provides alternative text in case the image cannot be displayed.</p>
      <ul>
        <li><strong>src</strong>: The source URL of the image.</li>
        <li><strong>alt</strong>: A description of the image for accessibility and search engines.</li>
        <li><strong>width and height</strong>: Define the dimensions of the image.</li>
      </ul>
      <pre>
&lt;img src="image.png" alt="A beautiful landscape" width="500" height="300"&gt;
      </pre>

      <h2>Audio</h2>
      <h3>&lt;audio&gt; Element (Attributes: controls, src)</h3>
      <p>The &lt;audio&gt; element is used to embed sound content like music or spoken word.</p>
      <ul>
        <li><strong>controls</strong>: Displays audio controls such as play, pause, and volume.</li>
        <li><strong>src</strong>: The source file of the audio.</li>
      </ul>
      <h4>Example:</h4>
      <pre>
&lt;audio controls src="audiofile.mp3"&gt;
  Your browser does not support the audio element.
&lt;/audio&gt;
      </pre>

      <h3>Supporting Multiple Formats</h3>
      <p>To ensure compatibility across different browsers, it is best to provide multiple audio file formats (e.g., MP3, OGG).</p>
      <h4>Example:</h4>
      <pre>
&lt;audio controls&gt;
  &lt;source src="audiofile.mp3" type="audio/mpeg"&gt;
  &lt;source src="audiofile.ogg" type="audio/ogg"&gt;
  Your browser does not support the audio element.
&lt;/audio&gt;
      </pre>

      <h2>Video</h2>
      <h3>&lt;video&gt; Element (Attributes: controls, autoplay, loop)</h3>
      <p>The &lt;video&gt; element is used to embed video content on a webpage.</p>
      <ul>
        <li><strong>controls</strong>: Shows controls to play, pause, and adjust volume.</li>
        <li><strong>autoplay</strong>: The video starts playing automatically when the page loads.</li>
        <li><strong>loop</strong>: The video repeats after reaching the end.</li>
      </ul>
      <h4>Example:</h4>
      <pre>
&lt;video controls autoplay loop width="600"&gt;
  &lt;source src="video.mp4" type="video/mp4"&gt;
  &lt;source src="video.ogg" type="video/ogg"&gt;
  Your browser does not support the video tag.
&lt;/video&gt;
      </pre>

      <h3>Embedding Multiple Formats</h3>
      <p>Like with audio, it's recommended to provide multiple video formats to ensure compatibility across different browsers.</p>
      <h4>Example:</h4>
      <pre>
&lt;video controls&gt;
  &lt;source src="video.mp4" type="video/mp4"&gt;
  &lt;source src="video.webm" type="video/webm"&gt;
  &lt;source src="video.ogg" type="video/ogg"&gt;
  Your browser does not support the video tag.
&lt;/video&gt;
      </pre>

      <h2>SVG (Scalable Vector Graphics)</h2>
      <h3>Embedding SVG Inline (&lt;svg&gt;)</h3>
      <p>SVG allows for scalable vector graphics directly in the HTML, which means the images can scale to any size without losing quality.</p>
      <h4>Example (Inline SVG):</h4>
      <pre>
&lt;svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"&gt;
  &lt;circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" /&gt;
&lt;/svg&gt;
      </pre>

      <h3>Linking to External SVG Files</h3>
      <h4>Example (External SVG via &lt;img&gt;):</h4>
      <pre>
&lt;img src="image.svg" alt="A vector image"&gt;
      </pre>
      <h4>Example (External SVG via &lt;object&gt;):</h4>
      <pre>
&lt;object data="image.svg" type="image/svg+xml"&gt;&lt;/object&gt;
      </pre>

      <h2>&lt;picture&gt; Element</h2>
      <h3>Responsive Images with &lt;source&gt; and &lt;img&gt;</h3>
      <p>The &lt;picture&gt; element allows for responsive images, enabling you to serve different image files based on screen size, resolution, or other factors.</p>
      <h4>Example:</h4>
      <pre>
&lt;picture&gt;
  &lt;source media="(min-width: 800px)" srcset="large-image.jpg"&gt;
  &lt;source media="(min-width: 400px)" srcset="medium-image.jpg"&gt;
  &lt;img src="small-image.jpg" alt="Responsive Image"&gt;
&lt;/picture&gt;
      </pre>
    </div>
  </div>
</template>

<style scoped>
/* Styles specific to the HTML page can go here */
</style>
