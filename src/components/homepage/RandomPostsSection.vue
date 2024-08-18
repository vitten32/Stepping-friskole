<template>
  <v-container>
    <v-row justify="center" class="my-8">
      <v-col
        v-for="post in latestPosts"
        :key="post.id"
        cols="12"
        md="4"
        lg="3"
        class="d-flex"
      >
        <v-card class="post-card d-flex flex-column">
          <v-card-title class="title">{{ post.title.rendered }}</v-card-title>
          <v-card-text v-html="post.excerpt.rendered" class="excerpt flex-grow-1" />
          <v-card-actions>
            <v-btn :to="`/post/${post.id}`" color="primary" class="mx-auto">
              Læs mere
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

interface Post {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  link: string;
}

const latestPosts = ref<Post[]>([]);

const fetchPostsFromWordPress = async () => {
  try {
    const response = await axios.get<Post[]>('https://stepping-friskole.dk/wp-json/wp/v2/posts?per_page=4&orderby=date&order=desc');
    latestPosts.value = response.data;
  } catch (error) {
    console.error('Fejl ved hentning af indlæg:', error);
  }
};

onMounted(fetchPostsFromWordPress);
</script>

<style scoped>
.post-card {
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  background-color: var(--surface-color); /* Bruger overfladefarve fra settings.scss */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.post-card:hover {
  transform: translateY(-5px);
}

.title {
  font-family: 'Gloria Hallelujah', cursive;
  font-size: 1.5rem;
  color: var(--primary-color); /* Brug skolens primærfarve */
}

.excerpt {
  font-family: var(--body-font-family); /* Brug Roboto fra settings.scss */
  font-size: 1rem;
  color: var(--text-color); /* Brug skolens tekstfarve */
  flex-grow: 1;
}

v-btn {
  font-family: var(--body-font-family); /* Brug Roboto fra settings.scss */
  font-weight: var(--headings-font-weight); /* Brug overskriftsvægt fra settings.scss */
  text-transform: none;
  color: white;
}

v-btn:hover {
  background-color: var(--accent-color); /* Brug skolens accentfarve */
}
</style>
