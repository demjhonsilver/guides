<script setup>
import { Collapse } from 'bootstrap';
import { ref } from 'vue';

const openMenuId = ref(null);
const sidebarVisible = ref(false);

const toggleCollapse = (menuId) => {
  const submenu = document.getElementById(menuId);

  if (openMenuId.value === menuId) {
    const bsCollapse = new Collapse(submenu, { toggle: false });
    bsCollapse.hide();
    openMenuId.value = null;
  } else {
    if (openMenuId.value) {
      const previousSubmenu = document.getElementById(openMenuId.value);
      const bsPreviousCollapse = new Collapse(previousSubmenu, { toggle: false });
      bsPreviousCollapse.hide();
    }

    const bsCollapse = new Collapse(submenu, { toggle: false });
    bsCollapse.show();
    openMenuId.value = menuId;
  }
};

const toggleSidebar = () => {
  const sidebar = document.getElementById('sidebarMenu');
  const bsSidebarCollapse = new Collapse(sidebar, { toggle: false });

  if (sidebarVisible.value) {
    bsSidebarCollapse.hide();
    sidebarVisible.value = false; // Update state
  } else {
    bsSidebarCollapse.show();
    sidebarVisible.value = true; // Update state
  }
};
</script>

<template>
  <nav id="sidebar" class="bg-light p-3 border-end">
    <button class="btn btn-primary mt-5 d-md-none toggle-button" type="button" @click="toggleSidebar">
  <span class="material-icons">list</span>
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
  width: 390px;
  position: fixed;
  top: 0;
  left: 0;
  border-right: 1px solid #dee2e6;
  overflow-y: auto;
}

#sidebar.hidden {
  width: 0; /* Collapse width */
  left: -390px; /* Move out of view */
}

.sidebar-content {
  margin-top: 30px;
  padding-bottom: 20px;
  overflow-y: auto;
  max-height: calc(100vh - 60px);
}

.nav-link {
  color: #0e63be;
}

.nav-link:hover {
  color: #034d9c;
  background-color: rgba(0, 123, 255, 0.1);
}

.btn-primary {
  height: 39px;
  background-color: #007bff;
  border-color: #007bff;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}


/* Default: Hide toggle button */
.toggle-button {
  display: none !important;
  margin-left: -10px;
}


@media (max-width: 1120px) {


  #sidebar {
    width: auto;
    min-height: 5vh;
    position: fixed;
    z-index: 1000;
    margin-top: 40px;
  }
  .sidebar-content {
  margin-top: -10px;
  padding-bottom: 20px;
  overflow-y: auto;
  max-height: calc(100vh - 60px);
}

}




/* Show toggle button at 850px or less */
@media (max-width: 1060px) {
  #sidebar {
    width: 270px;
    min-height: 5vh;
    margin-top: 40px;

  }

}

@media (max-width: 860px) {
  #sidebar {
    width: 270px;
    min-height: 5vh;
  }


}


/* Show toggle button at 850px or less */
@media (max-width: 765px) {
  #sidebar {
    width: auto;
    min-height: 5vh;
    margin-top: 0px;
  }
  .toggle-button {
    display: block !important;
  }
}




</style>