<template>
  <v-container>
    <v-row justify="center" class="my-8">
      <v-col
        v-for="post in randomPosts"
        :key="post.id"
        cols="12"
        md="4"
        lg="3"
        class="d-flex"
      >
        <v-card class="post-card">
          <v-card-title class="title">{{ post.title.rendered }}</v-card-title>
          <v-card-text v-html="post.excerpt.rendered" class="excerpt"></v-card-text>
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

const randomPosts = ref<Post[]>([]);

const fetchPostsFromWordPress = async () => {
  try {
    const response = await axios.get<Post[]>('https://stepping-friskole.dk/wp-json/wp/v2/posts');
    const posts = response.data;

    // Vælg 4 tilfældige indlæg
    randomPosts.value = posts.sort(() => 0.5 - Math.random()).slice(0, 4);
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
}

.post-card:hover {
  transform: translateY(-5px);
}

.title {
  font-family: 'Gloria Hallelujah', cursive;
  font-size: 1.5rem;
  color: #003366; /* Skolens primærfarve */
}

.excerpt {
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  color: #333333; /* Skolens tekstfarve */
}

v-btn {
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  text-transform: none;
  color: white;
}

v-btn:hover {
  background-color: #4CAF50; /* Skolens accentfarve */
}
</style>
