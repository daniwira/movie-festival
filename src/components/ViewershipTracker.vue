<template>
    <div>
      <h2>Search Movies</h2>
      <input v-model="searchQuery" @input="searchMovies" placeholder="Search..." />
      <ul>
        <li v-for="movie in searchResults" :key="movie.id">{{ movie.title }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: '',
        searchResults: [], // Hasil pencarian film dari API Supabase
      };
    },
    methods: {
      async searchMovies() {
        // Menggunakan Supabase Client untuk melakukan pencarian film
      }
    },
  };
  </script>
  