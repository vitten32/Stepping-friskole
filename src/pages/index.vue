<template>
  <HomeHeader />

  <v-container class="d-flex justify-center my-8">
    <v-row justify="center" align="center" dense>
      <!-- Børnehuset Card -->
      <v-col cols="12" md="5" lg="5">
        <CardComponent
          image="https://stepping-friskole.dk/wp-content/uploads/2019/05/IMG_0375.jpg"
          title="Børnehuset"
          description="Velkommen til Børnehuset. Her finder du trygge og udviklende omgivelser for de mindste børn."
        />
      </v-col>

      <!-- Friskolen Card -->
      <v-col cols="12" md="5" lg="5">
        <CardComponent
          image="https://stepping-friskole.dk/wp-content/uploads/2019/03/IMG_1146-930x367.jpg"
          title="Friskolen"
          description="Friskolen er stedet, hvor læring og trivsel går hånd i hånd i et engagerende og kreativt miljø."

        />
      </v-col>
    </v-row>
  </v-container>
  <SchoolValueCard />
  <RandomPostsSection />

</template>

<script lang="ts" setup>
// Script-delen kan være tom, medmindre der er yderligere logik, du skal tilføje.
</script>
