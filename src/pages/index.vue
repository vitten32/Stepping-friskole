<template>
  <HomeHeader />

  <!-- Introduktion og SEO-tekst -->
  <v-container class="text-center my-10">
    <h1 class="page-title">Velkommen til Stepping Friskole</h1>
    <p class="page-description">
      Stepping Friskole er en skole, der bygger på Grundtvig og Kolds skoletanker. Vi fokuserer på det enkelte barns trivsel i fællesskabet
      og lægger vægt på faglighed, kreativitet og ansvarlighed. Udforsk vores Børnehus og Friskole for at lære mere om, hvad vi tilbyder.
    </p>
  </v-container>

  <!-- Kort Sektion -->
  <v-container class="d-flex justify-center my-10">
    <v-row justify="center" align="center" dense>
      <!-- Børnehuset Card -->
      <v-col cols="12" md="5" lg="5" class="mb-6">
        <CardComponent
          image="https://stepping-friskole.dk/wp-content/uploads/2019/05/IMG_0375.jpg"
          title="Børnehuset"
          description="Trygge og udviklende omgivelser for de mindste børn."
          link="/BoenehusetPage"
        />
      </v-col>

      <!-- Friskolen Card -->
      <v-col cols="12" md="5" lg="5" class="mb-6">
        <CardComponent
          image="https://stepping-friskole.dk/wp-content/uploads/2019/03/IMG_1146-930x367.jpg"
          title="Friskolen"
          description="Et sted hvor læring og trivsel går hånd i hånd i et engagerende miljø."
          link="/SkolePage"
        />
      </v-col>
    </v-row>
  </v-container>

  <!-- Sektion til Skolens Værdier -->
  <v-container class="my-12">
    <SchoolValueCard />
  </v-container>

  <!-- Sektion til Tilfældige Indlæg -->
  <v-container class="my-12">
    <h2 class="section-title text-center mb-8">Læs Vores Nyeste Indlæg</h2>
    <RandomPostsSection />
  </v-container>
</template>

<script lang="ts" setup>
// Script-delen kan være tom, medmindre der er yderligere logik, du skal tilføje.
</script>

<style scoped>
.page-title {
  font-family: 'Gloria Hallelujah', cursive;
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 20px;
}

.page-description {
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  color: var(--text-color);
  line-height: 1.6;
  margin: 0 auto;
  max-width: 800px;
}

.section-title {
  font-family: 'Gloria Hallelujah', cursive;
  font-size: 2rem;
  color: var(--primary-color);
}
</style>
