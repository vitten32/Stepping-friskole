<!-- src/views/HomePage.vue -->
<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <h1 class="primary--text">Velkommen til Stepping Friskole</h1>
        <p class="text--secondary">En skole med fokus på fællesskab, trivsel og læring.</p>
        <v-btn large color="primary" to="/about">Læs mere om os</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  title: 'Stepping Friskole og børnehus',
  name: 'HomePage',
}
</script>
