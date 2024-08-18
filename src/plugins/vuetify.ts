/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com
 */

// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

// Composables
import { createVuetify } from 'vuetify';

// Definér dine temaer med de ønskede farver og typografi
const lightTheme = {
  dark: false,
  colors: {
    primary: '#003366',      // Mørk blå
    secondary: '#FFC72C',    // Gul
    accent: '#4CAF50',       // Blød Grøn
    error: '#FF5252',        // Rød
    info: '#2196F3',         // Blå
    success: '#4CAF50',      // Grøn
    warning: '#FFC107',      // Gul til advarsler
    background: '#F4F4F4',   // Lys Grå
    surface: '#FFFFFF',      // Hvid overflade
    text: '#333333',         // Mørk Grå
  },
};

const darkTheme = {
  dark: true,
  colors: {
    primary: '#FFC72C',      // Gul (for kontrast)
    secondary: '#003366',    // Mørk blå
    accent: '#4CAF50',       // Blød Grøn
    error: '#FF5252',        // Rød
    info: '#2196F3',         // Blå
    success: '#4CAF50',      // Grøn
    warning: '#FFC107',      // Gul til advarsler
    background: '#121212',   // Mørk baggrund
    surface: '#1E1E1E',      // Mørk overflade
    text: '#FFFFFF',         // Hvid tekst
  },
};

// Opret Vuetify instance med temaer og typografi
export default createVuetify({
  theme: {
    defaultTheme: 'light', // Du kan ændre dette til 'dark', hvis du vil starte i mørk tilstand
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
  }
});
