<template>
  <v-container fluid class="home-header">
    <v-row class="fill-height">
      <v-responsive aspect-ratio="16/9" class="home-header__video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/2Mw2hFKXEaE?start=50&autoplay=1&mute=1&loop=1&playlist=2Mw2hFKXEaE"
          title="Velkommen til Stepping Friskole"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="home-header__video"
        ></iframe>
        <v-row
          class="fill-height text-center"
          align="center"
          justify="center"
          style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; z-index: 1;"
        >
          <v-col>
            <h1 class="home-header__title">Velkommen til Stepping Friskole</h1>
            <h1 class="home-header__title">og Børnehuset</h1>
            <p class="home-header__subtitle">
              Vi skaber rammerne for dit barns fremtid gennem <strong>fællesskab</strong>,
              <strong>læring</strong>, og <strong>udvikling</strong>.
            </p>
            <p class="home-header__description">
              En varm og hjemlig skole - ikke bare en institution
            </p>
          </v-col>
        </v-row>
      </v-responsive>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
// Ingen specielle opsætninger er nødvendige for dette simple eksempel
</script>

<style scoped>
.home-header {
  height: 70vh;
  position: relative;
  overflow: hidden;
  background-color: black; /* fallback for when the video is loading */
}

.home-header__video-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.home-header__video {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  object-fit: cover; /* Ensures the video covers the entire area without distortion */
  background-color: black; /* This should remove the gray/black bars */
}

.home-header__title {
  font-family: 'Gloria Hallelujah', cursive;
  font-size: 4rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  margin-bottom: 10px;
}

.home-header__subtitle {
  font-family: 'Gloria Hallelujah', cursive;
  font-size: 1.75rem;
  color: #FFC72C; /* Sekundær farve */
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.5;
}

.home-header__description {
  font-size: 1.4rem;
  color: #FFC72C;
  font-weight: bold;
  margin-top: 20px;
  padding: 10px 15px;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.4);
  display: inline-block;
}
</style>
