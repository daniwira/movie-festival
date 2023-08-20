<template>
  <div>
    <h2>Update Movie</h2>
    <form @submit.prevent="updateMovie">
      <!-- ... other form fields ... -->
      <div>
        <label>Title:</label>
        <input v-model="title" />
      </div>
      <div>
        <label>Description:</label>
        <textarea v-model="description"></textarea>
      </div>
      <div>
        <label>Duration:</label>
        <input v-model.number="duration" type="number" />
      </div>
      <div>
        <label>Artists:</label>
        <input v-model="artists" />
      </div>
      <div>
        <label>Genres:</label>
        <input v-model="genres" />
      </div>
      <div>
        <button type="submit">Update</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import supabase from '../supabase';

const id = ref('');
const title = ref('');
const description = ref('');
const duration = ref(0);
const artists = ref('');
const genres = ref('');

onMounted(() => {
  fetchMovieDetails(); // Fetch movie details when component is mounted
});

async function fetchMovieDetails() {
  try {
    // Get movie details using ID from route params
    const movieId = $route.params.id;
    const { data, error } = await supabase.from('movies').select('*').eq('id', movieId);
    if (error) {
      console.error('Error fetching movie details:', error.message);
    } else {
      const movie = data[0];
      id.value = movie.id;
      title.value = movie.title;
      description.value = movie.description;
      duration.value = movie.duration;
      artists.value = movie.artists;
      genres.value = movie.genres;
    }
  } catch (error) {
    console.error('Failed to fetch movie details:', error.message);
  }
}

const updateMovie = async () => {
  try {
    // Update movie data using ID
    const { data, error } = await supabase.from('movies').update({
      title: title.value,
      description: description.value,
      duration: duration.value,
      artists: artists.value,
      genres: genres.value,
    }).eq('id', id.value);

    if (error) {
      console.error('Error updating movie:', error.message);
    } else {
      // Redirect to movie list after successful update
      $router.push('/list');
    }
  } catch (error) {
    console.error('Failed to update movie:', error.message);
  }
};
</script>
