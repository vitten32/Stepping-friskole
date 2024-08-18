<template>
  <v-container>
    <v-row class="my-8" justify="center">
      <v-col cols="12" md="8">
        <!-- Spinner, mens indholdet indlæses -->
        <v-progress-circular
          v-if="loading"
          class="d-flex mx-auto my-8"
          color="primary"
          indeterminate
          size="70"
        />

        <!-- Kortet, hvis posten er indlæst -->
        <v-card v-if="!loading && post">
          <v-card-title class="title">{{ post.title.rendered }}</v-card-title>
          <v-card-text class="content" v-html="post.content.rendered" />
        </v-card>

        <!-- Fejlbesked, hvis noget gik galt -->
        <v-alert v-else-if="!loading && error" type="error">
          Kunne ikke indlæse post. Prøv venligst igen senere.
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from 'vue'
  import { useRoute } from 'vue-router'
  import axios from 'axios'

  interface Post {
    id: number;
    title: { rendered: string };
    content: { rendered: string };
  }

  const route = useRoute()

  const post = ref<Post | null>(null)
  const loading = ref(true)
  const error = ref(false)

  const fetchPostDetails = async () => {
    try {
      // this is no erro
      //
      const postId = (route.params as { id: string }).id
      const response = await axios.get<Post>(`https://stepping-friskole.dk/wp-json/wp/v2/posts/${postId}`)
      post.value = response.data
    } catch (err) {
      console.error('Fejl ved hentning af post:', err)
      error.value = true
    } finally {
      loading.value = false
    }
  }

  onMounted(fetchPostDetails)
</script>

<style scoped>
.title {
  font-family: 'Gloria Hallelujah', cursive;
  font-size: 2rem;
  color: var(--primary-color); /* Brug CSS-variablen fra settings.scss */
}

.content {
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  color: var(--text-color); /* Brug CSS-variablen fra settings.scss */
}

img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  margin: 10px 0;
}
</style>
