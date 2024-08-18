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
    <v-row align="center" dense justify="center">
      <!-- Børnehuset Card -->
      <v-col class="mb-6" cols="12" lg="5" md="5">
        <CardComponent
          description="Trygge og udviklende omgivelser for de mindste børn."
          image="https://stepping-friskole.dk/wp-content/uploads/2019/05/IMG_0375.jpg"
          link="/BoenehusetPage"
          title="Børnehuset"
        />
      </v-col>

      <!-- Friskolen Card -->
      <v-col class="mb-6" cols="12" lg="5" md="5">
        <CardComponent
          description="Et sted hvor læring og trivsel går hånd i hånd i et engagerende miljø."
          image="https://stepping-friskole.dk/wp-content/uploads/2019/03/IMG_1146-930x367.jpg"
          link="/SkolePage"
          title="Friskolen"
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

<script>
  export default {
    name: 'HomePage',
    metaInfo: {
      title: 'Velkommen til Stepping Friskole - En Skole med Værdier',
      meta: [
        {
          name: 'description',
          content: 'Stepping Friskole er en skole, der bygger på Grundtvig og Kolds skoletanker. Vi fokuserer på det enkelte barns trivsel i fællesskabet og lægger vægt på faglighed, kreativitet og ansvarlighed.',
        },
        {
          property: 'og:title',
          content: 'Velkommen til Stepping Friskole - En Skole med Værdier',
        },
        {
          property: 'og:description',
          content: 'Stepping Friskole fokuserer på det enkelte barns trivsel og læring i et stærkt fællesskab.',
        },
        {
          property: 'og:image',
          content: 'https://stepping-friskole.dk/wp-content/uploads/2019/05/IMG_0375.jpg',
        },
      ],
    },
  }
</script>

<style>
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
