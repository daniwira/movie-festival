<!-- App.vue -->
<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/create">Create Movie</router-link></li>
        <li><router-link to="/list">Movie List</router-link></li>
      </ul>
    </nav>
    <router-view /> <!-- This is where the content will be displayed -->
  </div>
</template>
