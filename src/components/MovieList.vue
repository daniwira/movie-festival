
   <template>
    <div class="p-6">
      <h2 class="text-3xl font-semibold mb-6">All Movies</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div v-for="movie in movies" :key="movie.id" class="movie-card">
          <div class="relative">
            <img :src="movie.posterUrl" :alt="movie.title" class="w-full h-auto rounded-md" />
            <div class="absolute top-2 left-2 bg-gray-900 px-2 py-1 rounded text-xs text-white">
              {{ movie.duration }}
            </div>
          </div>
          <div class="mt-3">
            <h3 class="text-lg font-semibold">{{ movie.title }}</h3>
            <p class="text-sm text-gray-500">{{ movie.genres }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import supabase from '@/supabase';
  
  export default {
    name: 'MovieList',
    data() {
      return {
        movies: [],
      };
    },
    methods: {
      async fetchMovies() {
        try {
          const { data, error } = await supabase.from('movies').select('*');
          if (error) {
            console.error('Error fetching movies:', error.message);
          } else {
            this.movies = data;
          }
        } catch (error) {
          console.error('Failed to fetch movies:', error.message);
        }
      },
    },
    async mounted() {
      await this.fetchMovies();
    },
  };
  </script>
  
  <style scoped>
  /* Tailwind CSS classes */
  .movie-card {
    background-color: #fff;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  
  .movie-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }
  </style>
  