import{_ as a,c as e,a as o,b as i,o as s,S as l}from"./index-DN1dY2h1.js";const r={class:"d-flex flex-container"},u={__name:"Html3",setup(d){return(c,t)=>(s(),e("div",r,[o(l),t[0]||(t[0]=i(`<div class="flex-fill p-4 content" data-v-60326aca><h1 data-v-60326aca>3. Multimedia Elements</h1><p data-v-60326aca>This section covers different multimedia elements you can use in HTML.</p><h2 data-v-60326aca>Images</h2><h3 data-v-60326aca>&lt;img&gt; Tag (Attributes: src, alt, width, height)</h3><p data-v-60326aca>The &lt;img&gt; tag is used to embed images into a webpage. The src attribute specifies the path to the image, and the alt attribute provides alternative text in case the image cannot be displayed.</p><ul data-v-60326aca><li data-v-60326aca><strong data-v-60326aca>src</strong>: The source URL of the image.</li><li data-v-60326aca><strong data-v-60326aca>alt</strong>: A description of the image for accessibility and search engines.</li><li data-v-60326aca><strong data-v-60326aca>width and height</strong>: Define the dimensions of the image.</li></ul><pre data-v-60326aca>&lt;img src=&quot;image.png&quot; alt=&quot;A beautiful landscape&quot; width=&quot;500&quot; height=&quot;300&quot;&gt;
      </pre><h2 data-v-60326aca>Audio</h2><h3 data-v-60326aca>&lt;audio&gt; Element (Attributes: controls, src)</h3><p data-v-60326aca>The &lt;audio&gt; element is used to embed sound content like music or spoken word.</p><ul data-v-60326aca><li data-v-60326aca><strong data-v-60326aca>controls</strong>: Displays audio controls such as play, pause, and volume.</li><li data-v-60326aca><strong data-v-60326aca>src</strong>: The source file of the audio.</li></ul><h4 data-v-60326aca>Example:</h4><pre data-v-60326aca>&lt;audio controls src=&quot;audiofile.mp3&quot;&gt;
  Your browser does not support the audio element.
&lt;/audio&gt;
      </pre><h3 data-v-60326aca>Supporting Multiple Formats</h3><p data-v-60326aca>To ensure compatibility across different browsers, it is best to provide multiple audio file formats (e.g., MP3, OGG).</p><h4 data-v-60326aca>Example:</h4><pre data-v-60326aca>&lt;audio controls&gt;
  &lt;source src=&quot;audiofile.mp3&quot; type=&quot;audio/mpeg&quot;&gt;
  &lt;source src=&quot;audiofile.ogg&quot; type=&quot;audio/ogg&quot;&gt;
  Your browser does not support the audio element.
&lt;/audio&gt;
      </pre><h2 data-v-60326aca>Video</h2><h3 data-v-60326aca>&lt;video&gt; Element (Attributes: controls, autoplay, loop)</h3><p data-v-60326aca>The &lt;video&gt; element is used to embed video content on a webpage.</p><ul data-v-60326aca><li data-v-60326aca><strong data-v-60326aca>controls</strong>: Shows controls to play, pause, and adjust volume.</li><li data-v-60326aca><strong data-v-60326aca>autoplay</strong>: The video starts playing automatically when the page loads.</li><li data-v-60326aca><strong data-v-60326aca>loop</strong>: The video repeats after reaching the end.</li></ul><h4 data-v-60326aca>Example:</h4><pre data-v-60326aca>&lt;video controls autoplay loop width=&quot;600&quot;&gt;
  &lt;source src=&quot;video.mp4&quot; type=&quot;video/mp4&quot;&gt;
  &lt;source src=&quot;video.ogg&quot; type=&quot;video/ogg&quot;&gt;
  Your browser does not support the video tag.
&lt;/video&gt;
      </pre><h3 data-v-60326aca>Embedding Multiple Formats</h3><p data-v-60326aca>Like with audio, it&#39;s recommended to provide multiple video formats to ensure compatibility across different browsers.</p><h4 data-v-60326aca>Example:</h4><pre data-v-60326aca>&lt;video controls&gt;
  &lt;source src=&quot;video.mp4&quot; type=&quot;video/mp4&quot;&gt;
  &lt;source src=&quot;video.webm&quot; type=&quot;video/webm&quot;&gt;
  &lt;source src=&quot;video.ogg&quot; type=&quot;video/ogg&quot;&gt;
  Your browser does not support the video tag.
&lt;/video&gt;
      </pre><h2 data-v-60326aca>SVG (Scalable Vector Graphics)</h2><h3 data-v-60326aca>Embedding SVG Inline (&lt;svg&gt;)</h3><p data-v-60326aca>SVG allows for scalable vector graphics directly in the HTML, which means the images can scale to any size without losing quality.</p><h4 data-v-60326aca>Example (Inline SVG):</h4><pre data-v-60326aca>&lt;svg width=&quot;100&quot; height=&quot;100&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;&gt;
  &lt;circle cx=&quot;50&quot; cy=&quot;50&quot; r=&quot;40&quot; stroke=&quot;green&quot; stroke-width=&quot;4&quot; fill=&quot;yellow&quot; /&gt;
&lt;/svg&gt;
      </pre><h3 data-v-60326aca>Linking to External SVG Files</h3><h4 data-v-60326aca>Example (External SVG via &lt;img&gt;):</h4><pre data-v-60326aca>&lt;img src=&quot;image.svg&quot; alt=&quot;A vector image&quot;&gt;
      </pre><h4 data-v-60326aca>Example (External SVG via &lt;object&gt;):</h4><pre data-v-60326aca>&lt;object data=&quot;image.svg&quot; type=&quot;image/svg+xml&quot;&gt;&lt;/object&gt;
      </pre><h2 data-v-60326aca>&lt;picture&gt; Element</h2><h3 data-v-60326aca>Responsive Images with &lt;source&gt; and &lt;img&gt;</h3><p data-v-60326aca>The &lt;picture&gt; element allows for responsive images, enabling you to serve different image files based on screen size, resolution, or other factors.</p><h4 data-v-60326aca>Example:</h4><pre data-v-60326aca>&lt;picture&gt;
  &lt;source media=&quot;(min-width: 800px)&quot; srcset=&quot;large-image.jpg&quot;&gt;
  &lt;source media=&quot;(min-width: 400px)&quot; srcset=&quot;medium-image.jpg&quot;&gt;
  &lt;img src=&quot;small-image.jpg&quot; alt=&quot;Responsive Image&quot;&gt;
&lt;/picture&gt;
      </pre></div>`,1))]))}},g=a(u,[["__scopeId","data-v-60326aca"]]);export{g as default};
