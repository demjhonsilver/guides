<script setup>
import { ref } from 'vue';
import Sidebar from './Sidebar.vue'; // Importing Sidebar from the same folder

const content = ref('Original Content');
const elements = ref([]);
const formOutput = ref('');

const changeContent = () => {
  content.value = 'Content Changed!';
};

const addElement = () => {
  elements.value.push('New Paragraph Added!');
};

const removeElement = () => {
  elements.value.pop();
};

const submitForm = (event) => {
  event.preventDefault();
  const inputText = event.target.elements.inputText.value;
  formOutput.value = `Submitted Text: ${inputText}`;
  event.target.reset(); // Clear the input
};
</script>

<template>
  <div class="d-flex flex-container">
    <Sidebar />
    <div class="flex-fill p-4 content html7-pad">
      <h1>7. Document Object Model (DOM)</h1>
      <hr>

      <h2>1. DOM Structure</h2>
      <p>Understanding elements as objects:</p>
      <pre>&lt;div id="myDiv"&gt;Hello, World!&lt;/div&gt;</pre>
      <p>Explanation: This example retrieves a <code>&lt;div&gt;</code> element and logs it to the console, showing that it is an object that can be manipulated.</p>

      <h2>2. Traversing the DOM</h2>
      <p>Parent, Child, and Sibling Elements:</p>
      <pre>
&lt;div id="parent"&gt;
  &lt;p id="child"&gt;Child Paragraph&lt;/p&gt;
  &lt;p id="sibling"&gt;Sibling Paragraph&lt;/p&gt;
&lt;/div&gt;</pre>
      <p>Explanation: This code finds the parent of the child element and its next sibling, demonstrating how to traverse the DOM.</p>

      <h2>3. Manipulating the DOM</h2>
      <h3>Changing Content</h3>
      <button @click="changeContent">Change Content</button>
      <p>{{ content }}</p>
      <pre>
document.getElementById('changeContent').onclick = function() {
  document.getElementById('text').textContent = 'Content Changed!';
};</pre>
      <p>Explanation: Clicking the button updates the paragraph text, showcasing how to use <code>textContent</code> to change content.</p>

      <h3>Adding or Removing Elements</h3>
      <button @click="addElement">Add Element</button>
      <button @click="removeElement">Remove Last Element</button>
      <div>
        <div v-for="(element, index) in elements" :key="index">
          <p>{{ element }}</p>
        </div>
      </div>
      <pre>
document.getElementById('addElement').onclick = function() {
  const newElement = document.createElement('p');
  newElement.textContent = 'New Paragraph';
  document.getElementById('container').appendChild(newElement);
};</pre>
      <p>Explanation: This code adds a new paragraph when the button is clicked and removes the last added paragraph.</p>

      <h3>Handling Events</h3>
      <form @submit="submitForm">
        <label for="inputText">Enter Text:</label>
        <input type="text" id="inputText" required>
        <button type="submit">Submit</button>
      </form>
      <p>{{ formOutput }}</p>
      <pre>
document.getElementById('myForm').onsubmit = function(event) {
  event.preventDefault(); // Prevent form submission
  const inputText = document.getElementById('inputText').value;
  document.getElementById('formOutput').innerText = \`Submitted Text: \${inputText}\`;
};</pre>
      <p>Explanation: This form captures user input and displays it below without refreshing the page, demonstrating event handling with <code>onsubmit</code>.</p>
    </div>
  </div>
</template>

<style scoped>
/* Styles specific to the HTML page can go here */
.html7-pad {
  margin-left: 270px;
}

@media (max-width: 1000px) {
  .html7-pad {
    width: 40%;
  margin-left: 250px;
 }
}

@media (max-width: 768px) {
  .html7-pad {
    width: 80%;
  margin-left: 50px;
 }
}

</style>