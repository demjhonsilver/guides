<script setup>
// No additional logic is currently needed
</script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Guides by Demjhon</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
  <span class="navbar-toggler-icon"></span>
</button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0"> <!-- Align menu items to the right -->
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>


            <li class="nav-item">
              <router-link class="nav-link" to="/html">HTML</router-link>
            </li>

 

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More
              </a>
              <ul class="dropdown-menu dropdown-menu-end"> <!-- Add this class -->
                <li>
                  <router-link class="dropdown-item" to="/about">About</router-link>
                </li>
                <li>
                  <router-link class="dropdown-item" to="/services">Services</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container mt-5 pt-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
/* Additional styles can go here */
</style>
