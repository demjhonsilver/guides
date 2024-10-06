import{_ as e,c as a,a as l,b as n,o as i,S as o}from"./index-Cx8zt168.js";const r={class:"d-flex flex-container"},s={__name:"Html8",setup(u){return(d,t)=>(i(),a("div",r,[l(o),t[0]||(t[0]=n(`<div class="flex-fill p-4" style="margin-left:270px;" data-v-4c1a9d26><h1 data-v-4c1a9d26>HTML Accessibility</h1><hr data-v-4c1a9d26><h2 data-v-4c1a9d26>1. Alt Text for Images (alt attribute)</h2><p data-v-4c1a9d26>Providing alternative text for images ensures that users with visual impairments can understand the content.</p><pre data-v-4c1a9d26>&lt;img src=&quot;image.jpg&quot; alt=&quot;A beautiful sunset over the mountains&quot;&gt;</pre><p data-v-4c1a9d26>Explanation: The alt attribute describes the image, which is read by screen readers, enhancing accessibility.</p><h2 data-v-4c1a9d26>2. ARIA (Accessible Rich Internet Applications) Attributes</h2><p data-v-4c1a9d26>ARIA attributes help improve accessibility for complex web applications, providing additional semantic information.</p><pre data-v-4c1a9d26>&lt;button aria-label=&quot;Close&quot; onclick=&quot;closeModal()&quot;&gt;X&lt;/button&gt;</pre><p data-v-4c1a9d26>Explanation: The aria-label attribute gives context to the button for screen reader users, indicating its function.</p><h2 data-v-4c1a9d26>3. Keyboard Navigation</h2><p data-v-4c1a9d26>Ensuring that all interactive elements are accessible via keyboard navigation is crucial for users with mobility impairments.</p><pre data-v-4c1a9d26>&lt;a href=&quot;#section&quot; tabindex=&quot;0&quot;&gt;Skip to Content&lt;/a&gt;</pre><p data-v-4c1a9d26>Explanation: The tabindex attribute allows the link to be focused using the keyboard, facilitating easy navigation.</p><h2 data-v-4c1a9d26>4. &lt;label&gt; Tag for Form Inputs</h2><p data-v-4c1a9d26>Using &lt;label&gt; tags improves accessibility by clearly associating labels with their corresponding form inputs.</p><pre data-v-4c1a9d26>&lt;label for=&quot;username&quot;&gt;Username:&lt;/label&gt;<br data-v-4c1a9d26>
&lt;input type=&quot;text&quot; id=&quot;username&quot; name=&quot;username&quot;&gt;</pre><p data-v-4c1a9d26>Explanation: Clicking the label focuses the input field, which is helpful for all users, including those with disabilities.</p><h2 data-v-4c1a9d26>5. Using &lt;fieldset&gt; and &lt;legend&gt; for Form Grouping</h2><p data-v-4c1a9d26>Grouping related form elements with &lt;fieldset&gt; and &lt;legend&gt; enhances accessibility and improves the user experience.</p><pre data-v-4c1a9d26>&lt;fieldset&gt;
    &lt;legend&gt;Personal Information&lt;/legend&gt;
    &lt;label for=&quot;name&quot;&gt;Name:&lt;/label&gt;
    &lt;input type=&quot;text&quot; id=&quot;name&quot; name=&quot;name&quot;&gt;<br data-v-4c1a9d26>
    
    &lt;label for=&quot;email&quot;&gt;Email:&lt;/label&gt;
    &lt;input type=&quot;email&quot; id=&quot;email&quot; name=&quot;email&quot;&gt;
&lt;/fieldset&gt;</pre><p data-v-4c1a9d26>Explanation: The &lt;legend&gt; provides context for the grouped fields, making it easier for screen readers to convey the information.</p><h2 data-v-4c1a9d26>6. Semantic HTML for Screen Readers</h2><p data-v-4c1a9d26>Using semantic HTML elements (like &lt;header&gt;, &lt;nav&gt;, &lt;article&gt;, etc.) enhances the accessibility of your content.</p><pre data-v-4c1a9d26>&lt;article&gt;
    &lt;header&gt;
        &lt;h1&gt;Article Title&lt;/h1&gt;
    &lt;/header&gt;
    &lt;p&gt;This is the content of the article.&lt;/p&gt;
&lt;/article&gt;</pre><p data-v-4c1a9d26>Explanation: Semantic elements provide meaning to the structure, allowing screen readers to better interpret and navigate the content.</p><h3 data-v-4c1a9d26>Full code</h3></div><div class="xa8" data-v-4c1a9d26><pre data-v-4c1a9d26><code data-v-4c1a9d26>
&lt;!DOCTYPE html&gt;
&lt;html lang=&quot;en&quot;&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;title&gt;HTML Accessibility Example&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;

    &lt;header&gt;
        &lt;h1&gt;Welcome to Our Website&lt;/h1&gt;
        &lt;nav&gt;
            &lt;ul&gt;
                &lt;li&gt;&lt;a href=&quot;#about&quot; tabindex=&quot;0&quot;&gt;About&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href=&quot;#services&quot; tabindex=&quot;0&quot;&gt;Services&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href=&quot;#contact&quot; tabindex=&quot;0&quot;&gt;Contact&lt;/a&gt;&lt;/li&gt;
            &lt;/ul&gt;
        &lt;/nav&gt;
    &lt;/header&gt;

    &lt;main&gt;
        &lt;section id=&quot;about&quot;&gt;
            &lt;h2&gt;About Us&lt;/h2&gt;
            &lt;img src=&quot;sunset.jpg&quot; alt=&quot;A beautiful sunset over the mountains&quot;&gt;
            &lt;p&gt;We are dedicated to providing the best service possible.&lt;/p&gt;
        &lt;/section&gt;

        &lt;section id=&quot;services&quot;&gt;
            &lt;h2&gt;Our Services&lt;/h2&gt;
            &lt;p&gt;We offer a variety of services to meet your needs.&lt;/p&gt;
            &lt;button aria-label=&quot;More information about our services&quot;&gt;Learn More&lt;/button&gt;
        &lt;/section&gt;

        &lt;section id=&quot;contact&quot;&gt;
            &lt;h2&gt;Contact Us&lt;/h2&gt;
            &lt;form&gt;
                &lt;fieldset&gt;
                    &lt;legend&gt;Personal Information&lt;/legend&gt;
                    &lt;label for=&quot;name&quot;&gt;Name:&lt;/label&gt;
                    &lt;input type=&quot;text&quot; id=&quot;name&quot; name=&quot;name&quot; required&gt;
                    
                    &lt;label for=&quot;email&quot;&gt;Email:&lt;/label&gt;
                    &lt;input type=&quot;email&quot; id=&quot;email&quot; name=&quot;email&quot; required&gt;
                &lt;/fieldset&gt;
                
                &lt;button type=&quot;submit&quot;&gt;Submit&lt;/button&gt;
            &lt;/form&gt;
        &lt;/section&gt;
    &lt;/main&gt;

    &lt;footer&gt;
        &lt;p&gt;© 2024 Our Website. All rights reserved.&lt;/p&gt;
    &lt;/footer&gt;

  &lt;/body&gt;
&lt;/html&gt;
</code></pre></div>`,2))]))}},c=e(s,[["__scopeId","data-v-4c1a9d26"]]);export{c as default};
