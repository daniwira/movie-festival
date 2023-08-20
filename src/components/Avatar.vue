<template>
  <div>
    <div v-if="src">
      <video :src="src" controls class="avatar video"></video>
    </div>
    <div v-else class="avatar no-video"></div>

    <div>
      <label class="button primary block" for="video">
        {{ uploading ? 'Uploading ...' : 'Upload Video' }}
      </label>
      <input
        style="visibility: hidden; position: absolute"
        type="file"
        id="video"
        accept="video/*"
        @change="uploadVideo"
        :disabled="uploading"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, toRefs, defineEmits } from 'vue';
import supabase from '../supabase';

const props = defineProps(['path', 'size']);
const { path, size } = toRefs(props);

const emit = defineEmits(['upload', 'update:path']);
const uploading = ref(false);
const src = ref('');
const files = ref();

const downloadVideo = async () => {
  if (path.value) {
    try {
      const { data, error } = await supabase.storage.from('movies').download(path.value);
      if (error) throw error;
      src.value = URL.createObjectURL(data);
    } catch (error) {
      console.error('Error downloading video:', error.message);
    }
  }
};

const uploadVideo = async (evt) => {
  files.value = evt.target.files;
  try {
    uploading.value = true;
    if (!files.value || files.value.length === 0) {
      throw new Error('You must select a video to upload.');
    }

    const file = files.value[0];
    const fileExt = file.name.split('.').pop();
    const filePath = `videos/${Math.random()}.${fileExt}`;

    let { error: uploadError } = await supabase.storage.from('avatars').upload(filePath, file);

    if (uploadError) throw uploadError;
    emit('update:path', filePath);
    emit('upload', file); // Pass the uploaded file to the parent component
  } catch (error) {
    alert(error.message);
  } finally {
    uploading.value = false;
  }
};

downloadVideo(); // Call downloadVideo function when the component is initialized
</script>

<style scoped>
/* Your Tailwind CSS styles here */
</style>
