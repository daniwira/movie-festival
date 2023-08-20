<template>
    <header class="bg-gray-800 p-4">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-white text-xl">Movie App</h1>
        <nav class="flex items-center space-x-4">
          <router-link to="/" class="text-white">Home</router-link>
          <router-link to="/create" class="text-white">Create Movie</router-link>
          <router-link to="/list" class="text-white">Movie List</router-link>
          <div v-if="session" class="flex items-center space-x-4">
            <p class="text-white">Logged in as {{ session.user.email }}</p>
            <button @click="logout" class="text-white">Logout</button>
          </div>
        </nav>
      </div>
    </header>
  </template>
  
  <script setup>
  import { defineProps, ref, emit } from 'vue'
  const { session } = defineProps(['session'])
  
  const logout = () => {
    emit('logout')
  }
  </script>
  
  <style scoped>
  /* Add your custom styles here */
  </style>
  