<template>
  <v-card
    class="custom-card"
    @click="handleClick"
    outlined
    hover
  >
    <v-img :src="image" height="200px" alt="Card image" class="image"></v-img>
    <v-card-title class="title">{{ title }}</v-card-title>
    <v-card-text>{{ description }}</v-card-text>
  </v-card>
</template>

<script lang="ts" setup>
const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

const handleClick = () => {
  window.location.href = props.link; // Naviger til det ønskede link
};
</script>

<style scoped>
.custom-card {
  cursor: pointer;
  transition: transform 0.3s ease;
}

.custom-card:hover {
  transform: scale(1.05);
}

.title {
  font-family: 'Gloria Hallelujah', cursive;
  font-size: 1.5rem;
  color: var(--primary-color); /* Brug CSS-variablen fra settings.scss */
}

.image {
  transition: transform 0.5s ease;
}

.custom-card:hover .image {
  transform: scale(1.1);
}
</style>
