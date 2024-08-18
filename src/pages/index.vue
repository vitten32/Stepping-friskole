<template>
  <HomeHeader />

  <v-container class="d-flex justify-center my-8">
    <v-row justify="center" align="center" dense>
      <!-- Børnehuset Card -->
      <v-col cols="12" md="5" lg="5">
        <CardComponent
          image="/img/børnehuset/Boenehuset.jpg"
          title="Børnehuset"
          description="Velkommen til Børnehuset. Her finder du trygge og udviklende omgivelser for de mindste børn."
        />
      </v-col>

      <!-- Friskolen Card -->
      <v-col cols="12" md="5" lg="5">
        <CardComponent
          image="/img/skolen/skolecard.jpg"
          title="Friskolen"
          description="Friskolen er stedet, hvor læring og trivsel går hånd i hånd i et engagerende og kreativt miljø."

        />
      </v-col>
    </v-row>
  </v-container>

  <SchoolValueCard />
</template>

<script lang="ts" setup>
// Script-delen kan være tom, medmindre der er yderligere logik, du skal tilføje.
</script>
