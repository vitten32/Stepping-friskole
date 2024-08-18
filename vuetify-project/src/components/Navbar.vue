<!-- src/components/Navbar.vue -->
<!-- src/components/Navbar.vue -->
<template>
  <v-app-bar app color="primary" dark>
    <v-container class="d-flex justify-center align-center">
      <v-toolbar-title class="white--text mx-4">Stepping Friskole</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text color="secondary" to="/">Hjem</v-btn>
      <v-btn text color="secondary" to="/BoenehusetPage">Om Børnehuset</v-btn>
      <v-btn text color="secondary" to="/SkolePage">Om Skolen</v-btn>
      <v-btn text color="secondary" to="/Kontact">Kontakt</v-btn>
      <v-btn text color="secondary" href="https://steppingfriskole.viggo.dk/Basic/Account/Login" target="_blank">Viggo</v-btn>
      <v-btn text color="secondary" to="/contact">Login</v-btn>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>
