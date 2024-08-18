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

    <v-row class="mt-10" justify="center">
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

    <v-row class="mt-10" justify="center">
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

    <v-row class="mt-10" justify="center">
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
  import metaMixin from '@/mixins/metaMixin.ts'

  export default {
    name: 'SkolePage',
    mixins: [metaMixin],
    data () {
      return {
        pageTitle: 'Om Stepping Friskole - Faglighed og Fællesskab',
        metaTags: [
          {
            name: 'description',
            content: 'Stepping Friskole tilbyder en stærk faglig undervisning baseret på Grundtvig og Kolds skoletanker. Her er trivsel og fællesskab i fokus.',
          },
          {
            property: 'og:title',
            content: 'Om Stepping Friskole - Faglighed og Fællesskab',
          },
          {
            property: 'og:description',
            content: 'Lær mere om Stepping Friskoles fokus på faglighed og fællesskab, hvor hvert barn føler sig set og hørt.',
          },
          {
            property: 'og:image',
            content: 'https://stepping-friskole.dk/wp-content/uploads/2019/03/IMG_1146-930x367.jpg',
          },
          {
            name: 'keywords',
            content: 'Friskole, Grundtvig, Kold, faglighed, fællesskab, trivsel, undervisning, børn',
          },
          {
            name: 'author',
            content: 'Stepping Friskole',
          },
          {
            property: 'og:url',
            content: 'https://stepping-friskole.dk/skolepage',
          },
        ],
      }
    },
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
