<template>
  <v-card
    class="custom-card"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    @click="$emit('click')"
  >
    <v-img :src="image" height="200px" alt="Card image" class="image"></v-img>

    <v-card-title class="values-title">{{ title }}</v-card-title>

    <v-card-text>{{ description }}</v-card-text>

    <v-hover v-slot:default="{ isHovering }">
      <transition name="fade">
        <div v-if="isHovering" class="overlay"></div>
      </transition>
    </v-hover>
  </v-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

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
});

const hover = ref(false);
</script>

<style scoped>
.custom-card {
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
  cursor: pointer;
  background-color: var(--background);
}

.custom-card:hover {
  transform: translateY(-5px) scale(1.02);
}

.image {
  transition: transform 0.5s ease;
}

.custom-card:hover .image {
  transform: scale(1.1);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

.values-title {
  font-family: 'Gloria Hallelujah', cursive;
  font-size: 2.5rem;
  color: var(--text);
  margin: 0;
}
</style>
