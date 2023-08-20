

  <template>
    <div>
      <h2>Create and Upload Movie</h2>
      <form @submit.prevent="createMovie">
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
          <label>Watch URL:</label>
          <Avatar v-model:path="watchUrl" @upload="handleVideoUpload" size="10" />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Avatar from './Avatar.vue';
  import supabase from '../supabase';
  
  const title = ref('');
  const description = ref('');
  const duration = ref(0);
  const artists = ref('');
  const genres = ref('');
  const watchUrl = ref('');
  
  const createMovie = async () => {
    try {
      const { data, error } = await supabase.from('movies').insert([
        {
          title: title.value,
          description: description.value,
          duration: duration.value,
          artists: artists.value,
          genres: genres.value,
          watch_url: watchUrl.value,
        },
      ]);
  
      if (error) {
        console.error('Error creating movie:', error.message);
      } else {
        clearFormFields();
      }
    } catch (error) {
      console.error('Failed to create movie:', error.message);
    }
  };
  
  const handleVideoUpload = (uploadedFile) => {
    watchUrl.value = `videos/${uploadedFile.name}`;
  };
  
  const clearFormFields = () => {
    title.value = '';
    description.value = '';
    duration.value = 0;
    artists.value = '';
    genres.value = '';
    watchUrl.value = '';
  };
  
  </script>
  