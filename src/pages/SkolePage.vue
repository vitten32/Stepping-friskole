<template>
  <v-container class="skole-page my-10">
    <v-row justify="center">
      <v-col cols="12" md="10">
        <h1 class="page-title">Om Skolen</h1>
        <p class="page-intro">
          Velkommen til Stepping Friskole! Vi er en skole, der bygger på Grundtvig og Kolds skoletanker. Hos os står fællesskab, kreativitet, og faglighed i centrum, og vi tager udgangspunkt i det enkelte barn for at sikre dets trivsel og udvikling.
        </p>
      </v-col>
    </v-row>

    <v-row justify="center" class="mt-10">
      <v-col cols="12" md="10">
        <h2 class="section-title">Vores Værdier</h2>
        <p class="section-text">
          På Stepping Friskole lægger vi vægt på at skabe et trygt og inspirerende læringsmiljø. Vi arbejder ud fra en grundlæggende tro på, at læring sker bedst, når børn trives og føler sig trygge. Vores værdier er forankret i respekt for det enkelte barn og i en tæt samarbejde mellem skole, hjem og lokalsamfund.
        </p>
        <ul class="values-list">
          <li>Fællesskab og trivsel i fokus</li>
          <li>Høj faglighed og kreativ udfoldelse</li>
          <li>Respekt for det enkelte barns unikke behov</li>
        </ul>
      </v-col>
    </v-row>

    <v-row justify="center" class="mt-10">
      <v-col cols="12" md="10">
        <h2 class="section-title">Undervisningsmetoder</h2>
        <p class="section-text">
          Vi benytter en blanding af traditionel undervisning og projektbaseret læring for at sikre, at alle børn får mulighed for at udvikle deres potentiale. Vores lærere er engagerede og arbejder tæt sammen for at skabe en varieret og spændende hverdag.
        </p>
        <p class="section-text">
          Vi fokuserer på:
        </p>
        <ul class="values-list">
          <li>Individuel opmærksomhed i små klasser</li>
          <li>Tværfaglige projekter der skaber sammenhæng</li>
          <li>Praktisk og kreativ undervisning</li>
        </ul>
      </v-col>
    </v-row>

    <v-row justify="center" class="mt-10">
      <v-col cols="12" md="10">
        <h2 class="section-title">Målgrupper</h2>
        <p class="section-text">
          Stepping Friskole er åben for alle børn i skolealderen. Vi modtager elever fra 0. til 9. klasse og tilbyder en helhedsorienteret undervisning, der tilgodeser både faglige og sociale aspekter. Vi lægger vægt på at skabe et inkluderende miljø, hvor alle føler sig velkomne.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'SkolePage',
}
</script>

<style scoped>
.page-title {
  font-family: 'Gloria Hallelujah', cursive;
  font-size: 2.5rem;
  color: var(--primary-color);
  text-align: center;
  margin-bottom: 20px;
}

.page-intro {
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  color: var(--text-color);
  line-height: 1.6;
  text-align: center;
}

.section-title {
  font-family: 'Gloria Hallelujah', cursive;
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 15px;
}

.section-text {
  font-family: 'Roboto', sans-serif;
  font-size: 1.1rem;
  color: var(--text-color);
  line-height: 1.6;
  margin-bottom: 15px;
}

.values-list {
  list-style-type: disc;
  padding-left: 20px;
  font-family: 'Roboto', sans-serif;
  font-size: 1.1rem;
  color: var(--text-color);
  line-height: 1.6;
}

.values-list li {
  margin-bottom: 10px;
}
</style>
