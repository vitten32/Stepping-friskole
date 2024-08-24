<template>
  <v-container>
    <v-row class="my-8" justify="center">
      <v-col cols="12" md="8">
        <!-- Spinner while loading content -->
        <v-progress-circular
          v-if="loading"
          class="d-flex mx-auto my-8"
          color="primary"
          indeterminate
          size="70"
        />

        <!-- Card displaying post content if loaded -->
        <v-card v-if="!loading && post">
          <v-card-title class="title">{{ post.title.rendered }}</v-card-title>
          <v-img
            v-if="postImageUrl"
            :alt="post.title.rendered"
            aspect-ratio="1.7"
            class="my-4"
            :src="postImageUrl"
          />
          <v-card-text class="content" v-html="post.yoast_head_json.og_description" />
        </v-card>

        <!-- Error message if loading fails -->
        <v-alert v-else-if="!loading && error" type="error">
          Kunne ikke indlæse post. Prøv venligst igen senere.
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
  import { computed, onMounted, ref, watch } from 'vue'
  import { useRoute } from 'vue-router'
  import axios from 'axios'

  interface Post {
    id: number;
    date: string;
    date_gmt: string;
    guid: {
      rendered: string;
    };
    modified: string;
    modified_gmt: string;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: {
      rendered: string;
    };
    content: {
      rendered: string;
      protected: boolean;
    };
    excerpt: {
      rendered: string;
      protected: boolean;
    };
    author: number;
    featured_media: number;
    comment_status: string;
    ping_status: string;
    sticky: boolean;
    template: string;
    format: string;
    meta: {
      ngg_post_thumbnail: number;
    };
    categories: number[];
    tags: number[];
    acf: any[]; // Replace 'any[]' with a more specific type if you know the structure
    yoast_head: string;
    yoast_head_json: {
      title: string;
      robots: {
        index: string;
        follow: string;
        'max-snippet': string;
        'max-image-preview': string;
        'max-video-preview': string;
      };
      canonical: string;
      og_locale: string;
      og_type: string;
      og_title: string;
      og_description: string;
      og_url: string;
      og_site_name: string;
      article_published_time: string;
      article_modified_time: string;
      og_image: Array<{
        width: number;
        height: number;
        url: string;
        type: string;
      }>;
      author: string;
      twitter_misc: {
        [key: string]: string; // Maps additional key-value pairs
      };
      schema: any; // Replace 'any' with a more specific type if you know the structure
    };
    _links: {
      self: Array<{ href: string }>;
      collection: Array<{ href: string }>;
      about: Array<{ href: string }>;
      author: Array<{ embeddable: boolean; href: string }>;
      replies: Array<{ embeddable: boolean; href: string }>;
      'version-history': Array<{ count: number; href: string }>;
      'predecessor-version': Array<{ id: number; href: string }>;
      'wp:featuredmedia': Array<{ embeddable: boolean; href: string }>;
      'wp:attachment': Array<{ href: string }>;
      'wp:term': Array<{ taxonomy: string; embeddable: boolean; href: string }>;
      curies: Array<{ name: string; href: string; templated: boolean }>;
    };
  }

  const route = useRoute()

  const post = ref<Post | null>(null)
  const loading = ref(true)
  const error = ref(false)
  const pageTitle = ref('Om Stepping Friskole - Faglighed og Fællesskab')

  // Function to update meta tags dynamically
  const updateMetaTags = (tags: Array<{ name?: string; property?: string; content: string }>) => {
    tags.forEach(tag => {
      const metaElement = tag.name
        ? document.querySelector(`meta[name='${tag.name}']`)
        : document.querySelector(`meta[property='${tag.property}']`)
      if (metaElement) {
        metaElement.setAttribute('content', tag.content)
      } else {
        const newMetaElement = document.createElement('meta')
        if (tag.name) newMetaElement.setAttribute('name', tag.name)
        if (tag.property) newMetaElement.setAttribute('property', tag.property)
        newMetaElement.setAttribute('content', tag.content)
        document.head.appendChild(newMetaElement)
      }
    })
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const fetchPostDetails = async () => {
    try {
      const postId = (route.params as { id: string }).id
      const response = await axios.get<Post>(`https://stepping-friskole.dk/wp-json/wp/v2/posts/${postId}`)
      post.value = response.data

      if (post.value && post.value.yoast_head_json) {
        updateMetaTags([
          { name: 'description', content: post.value.yoast_head_json.og_description },
          { property: 'og:title', content: post.value.title.rendered },
          { property: 'og:description', content: post.value.yoast_head_json.og_description },
          { property: 'og:image', content: post.value.yoast_head_json.og_image[0].url },
          { name: 'author', content: post.value.yoast_head_json.author },
          { property: 'og:url', content: post.value.link },
        ])
      }

      // Update page title dynamically
      if (post.value) {
        pageTitle.value = post.value.title.rendered
      }
    } catch (err) {
      console.error('Fejl ved hentning af post:', err)
      error.value = true
    } finally {
      loading.value = false
    }
  }

  onMounted(() => {
    scrollToTop() // Scroll to top when component mounts
    document.title = pageTitle.value
    fetchPostDetails() // Fetch post details
  })

  const postImageUrl = computed(() => post.value?.yoast_head_json.og_image[0]?.url || '')

  // Watch for route changes and fetch post details accordingly
  watch(route, fetchPostDetails)
</script>

<style scoped>
.title {
  font-family: 'Gloria Hallelujah', cursive;
  font-size: 2rem;
  color: var(--primary-color); /* Use CSS variable from settings.scss */
}

.content {
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  color: var(--text-color); /* Use CSS variable from settings.scss */
}

img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  margin: 10px 0;
}
</style>
