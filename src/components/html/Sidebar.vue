<script setup>
import { Collapse } from 'bootstrap';
import { ref } from 'vue';

const openMenuId = ref(null);

const toggleCollapse = (menuId) => {
  const submenu = document.getElementById(menuId);

  // If the current menu is already open, close it
  if (openMenuId.value === menuId) {
    const bsCollapse = new Collapse(submenu, { toggle: false });
    bsCollapse.hide();
    openMenuId.value = null; // Reset open menu
  } else {
    // Close the currently open menu, if any
    if (openMenuId.value) {
      const previousSubmenu = document.getElementById(openMenuId.value);
      const bsPreviousCollapse = new Collapse(previousSubmenu, { toggle: false });
      bsPreviousCollapse.hide();
    }

    // Open the new submenu
    const bsCollapse = new Collapse(submenu, { toggle: false });
    bsCollapse.show();
    openMenuId.value = menuId; // Set the new open menu
  }
};
</script>

<template>
 <nav id="sidebar" class="bg-light p-3 border-end">
    <button class="btn btn-primary d-md-none mb-3" type="button" @click="toggleSidebar">
      <span class="material-icons">menu</span>
    </button>

    <div class="collapse d-md-block" id="sidebarMenu">
      <div class="sidebar-content">
        <ul class="nav flex-column mt-5">
          <li class="nav-item">
            <router-link class="nav-link" to="/html">1. Introduction to HTML</router-link>
          </li>

          <li class="nav-item mt-1">
            <button 
              class="btn btn-link nav-link d-flex justify-content-between align-items-center" 
              type="button" 
              @click="toggleCollapse('basicElementsMenu')"
            >
              2. Basic HTML Elements
              <span class="material-icons">expand_more</span>
            </button>
            <div class="collapse" id="basicElementsMenu">
              <ul class="nav flex-column ms-3">
                <li class="nav-item">
                  <router-link class="nav-link" to="/html/page/2-1">Text Elements</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/html/page/2-2">Lists</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/html/page/2-3">Links and Navigation</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/html/page/2-4">Tables</router-link>
                </li>
              </ul>
            </div>
          </li>

          <li class="nav-item mt-1">
            <router-link class="nav-link" to="/html/page/3">3. Multimedia Elements</router-link>
          </li>


          <li class="nav-item mt-1">
            <router-link class="nav-link" to="/html/page/4">4. HTML Forms and Input Elements</router-link>
          </li>

        
          <li class="nav-item mt-1">
            <router-link class="nav-link" to="/html/page/5">5. HTML5 Semantic Elements</router-link>
          </li>

          <li class="nav-item mt-1">
            <router-link class="nav-link" to="/html/page/6">6. HTML5 APIs and Advanced Features</router-link>
          </li>

       

          <li class="nav-item mt-1">
            <router-link class="nav-link" to="/html/page/7">7. Document Object Model (DOM)</router-link>
          </li>

          <li class="nav-item mt-1">
            <router-link class="nav-link" to="/html/page/8">8. HTML Accessibility</router-link>
          </li>

          <li class="nav-item mt-1">
            <router-link class="nav-link" to="/html/page/9">9. Meta Information</router-link>
          </li>

          <li class="nav-item mt-1">
            <router-link class="nav-link" to="/html/page/10">10. Modern HTML Features</router-link>
          </li>

          <li class="nav-item mt-1">
            <router-link class="nav-link" to="/html/page/11">11. Browser Compatibility</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
#sidebar {
  min-height: 100vh;
  width: 390px; /* Default width */
  position: fixed;
  top: 0;
  left: 0;
  border-right: 1px solid #dee2e6; /* Add right border */
  overflow-y: auto; /* Enable vertical scrolling */
}

#sidebar.d-none {
    transform: translateX(0); /* Show when open */
}

.sidebar-content {
  margin-top: 30px;
  padding-bottom: 20px; /* Optional: add some padding at the bottom */
  overflow-y: auto; /* Ensure sidebar content can scroll */
  max-height: calc(100vh - 60px); /* Adjust this value based on header/footer height */
}

/* Nav-link hover styling specific to sidebar */
.nav-link {
 
  color: #0e63be; /* Default color */
}

.nav-link:hover {
  color: #034d9c; /* Darker shade on hover */
  background-color: rgba(0, 123, 255, 0.1); /* Optional: add a background color on hover */
}

/* Button styling */
.btn-primary {
  background-color: #007bff; /* Primary color */
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0056b3; /* Darker shade on hover */
  border-color: #0056b3;
}


@media (max-width: 768px) {
    #sidebar {
        width: 40%; /* Full width on smaller screens */
        position: fixed; /* Keep it fixed on the left */
        z-index: 1000; /* Ensure it's above other content */
    }
}
</style>
