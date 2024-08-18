<template>
  <v-card class="school-value-card" elevation="4">
    <v-sheet class="school-value-card__header" elevation="2">
      <h2 class="values_title">Vi tager udgangspunkt i det enkelte barn</h2>
      <h2 class="values_title">i fællesskabet</h2>
    </v-sheet>
    <v-card-text>
      <h3 class="branding-title">
        <v-icon class="mr-2" color="secondary">mdi-school</v-icon>
        <strong>Vores Fundament: Grundtvig og Kolds Skoletanker</strong>
      </h3>
      <p class="branding-subtitle">Vi tager udgangspunkt i det enkelte barn:</p>
      <v-list dense class="branding-list">
        <v-list-item>
          <v-list-item-content>
            <v-icon class="mr-2" color="primary">mdi-star</v-icon>
            For at fremme og styrke barnets selvværd og selvforståelse
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-icon class="mr-2" color="primary">mdi-star</v-icon>
            For at barnet skal føle tryghed og opleve ligeværd
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <p>
        Vi vægter et højt fagligt niveau i alle fag for at styrke barnets udvikling til et helt menneske.
        Samtidigt er det vigtigt, at barnet lærer at tage ansvar for sit eget liv og sin egen læring.
        Det enkelte barn skal lære at udtrykke egne holdninger, meninger og følelser.
      </p>
      <p>
        Vi vægter en fælles morgensamling for hele skolen. Morgensamling kan blandt andet indeholde sang,
        fortælling, beskeder og bevægelse.
      </p>
      <p>
        Fællesskabet er vigtigt for skolen. Både det fællesskab voksne og børn indgår i på skolen, og fællesskabet med byen og dens borgere, idet skolen er en vigtig del af lokalsamfundet. Vi vil lære børnene at se sig selv som en vigtig del af fællesskabet, og at alle har noget værdifuldt at bidrage med.
      </p>
      <p>
        Vi lægger stor vægt på gensidig respekt. En respektfuld omgangstone på skolen og respekt for skolens inventar og omgivelser.
      </p>
      <p>
        Vi følger gældende love og vedtægter for frie grundskoler i Danmark.
      </p>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
</script>

<style scoped>
.school-value-card {
  margin: 20px auto;
  max-width: 1000px;
  padding: 0;
  border-radius: 12px;
  overflow: hidden;
  background-color: var(--surface-color); /* Brug farve defineret i settings.scss */
}

.school-value-card__header {
  background-color: var(--primary-color); /* Brug primærfarven */
  color: var(--text-color); /* Brug tekstfarven */
  padding: 16px;
  text-align: center;
}

.values_title {
  font-family: 'Gloria Hallelujah', cursive;
  font-size: 2.5rem;
  color: var(--secondary-color); /* Brug sekundærfarven */
  margin: 0;
}

.branding-title {
  font-size: 1.8rem;
  color: var(--text-color); /* Brug tekstfarven */
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}

.branding-subtitle {
  font-size: 1.25rem;
  color: var(--text-color); /* Brug tekstfarven */
  margin-bottom: 10px;
}

.branding-list {
  margin-left: 20px;
  margin-bottom: 20px;
}

.branding-list .v-list-item-content {
  color: var(--text-color); /* Brug tekstfarven */
  display: flex;
  align-items: center;
}

p {
  color: var(--text-color); /* Brug tekstfarven */
  line-height: 1.6;
  margin-bottom: 15px;
  font-size: 1.1rem;
}

v-icon {
  font-size: 1.2rem;
}
</style>
