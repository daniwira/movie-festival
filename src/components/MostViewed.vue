<template>
    <div>
      <h2>Most Viewed Movies and Genres</h2>
      <h3>Most Viewed Movies:</h3>
      <ul>
        <li v-for="movie in mostViewedMovies" :key="movie.id">{{ movie.title }}</li>
      </ul>
      <h3>Most Viewed Genres:</h3>
      <ul>
        <li v-for="genre in mostViewedGenres" :key="genre">{{ genre }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        mostViewedMovies: [], // Data film paling banyak ditonton dari API Supabase
        mostViewedGenres: [], // Data genre paling banyak ditonton dari API Supabase
      };
    },
    async mounted() {
      // Menggunakan Supabase Client untuk mengambil data film dan genre yang paling banyak ditonton
    }
  };
  </script>
  