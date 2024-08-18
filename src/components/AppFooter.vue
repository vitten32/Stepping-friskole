<template>
  <v-footer
    height="auto"
    class="footer"
    padless
  >
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <h3 class="footer-title">Stepping Friskole</h3>
          <p class="footer-description">
            Stepping Friskole er en privat skole, der tilbyder en kreativ og engagerende læringsoplevelse for børn i alle aldre. Vi fokuserer på trivsel, fællesskab og faglighed.
          </p>
        </v-col>

        <v-col cols="12" md="4">
          <h3 class="footer-title">Kontakt</h3>
          <p class="footer-description">
            Stepping Friskole<br>
            Stepping Bygade 23, 6070 Christiansfeld<br>
            Telefon: +45 12 34 56 78<br>
            Email: info@stepping-friskole.dk
          </p>
        </v-col>

        <v-col cols="12" md="4" class="text-center">
          <h3 class="footer-title">Følg os</h3>
          <div class="social-icons">
            <a
              v-for="item in items"
              :key="item.title"
              :href="item.href"
              :title="item.title"
              class="social-link"
              rel="noopener noreferrer"
              target="_blank"
            >
              <v-icon
                :icon="item.icon"
                :size="20"
                class="mx-1"
              />
            </a>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-divider class="my-3"></v-divider>
    <v-container>
      <v-row>
        <v-col cols="12" class="text-center text-caption">
          &copy; 2016-{{ new Date().getFullYear() }} Stepping Friskole. Alle rettigheder forbeholdes.
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
const items = [
  {
    title: 'Facebook',
    icon: 'mdi-facebook',
    href: 'https://facebook.com',
  },
  {
    title: 'Instagram',
    icon: 'mdi-instagram',
    href: 'https://instagram.com',
  },
  {
    title: 'LinkedIn',
    icon: 'mdi-linkedin',
    href: 'https://linkedin.com',
  },
  {
    title: 'YouTube',
    icon: 'mdi-youtube',
    href: 'https://youtube.com',
  },
];
</script>

<style scoped>
.footer {
  background-color: #003366; /* Skolens primærfarve */
  color: white;
  padding: 10px 0; /* Mindre padding for kompakt design */
}

.footer-title {
  font-family: 'Gloria Hallelujah', cursive;
  font-size: 1.3rem; /* Mindre fontstørrelse for at spare plads */
  margin-bottom: 8px; /* Mindre margin for kompakthed */
}

.footer-description {
  font-family: 'Roboto', sans-serif;
  font-size: 0.9rem; /* Mindre fontstørrelse for kompakthed */
  color: #f4f4f4;
}

.social-icons {
  display: flex;
  justify-content: center;
}

.social-link :deep(.v-icon) {
  color: #ffc72c; /* Skolens sekundærfarve */
  transition: color 0.3s ease;
}

.social-link:hover :deep(.v-icon) {
  color: #4caf50; /* Skolens accentfarve */
}

.v-divider {
  background-color: #f4f4f4; /* Lys grå divider */
  margin: 0 auto;
}
</style>
