/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// Definér dine temaer med de ønskede farver og typografi
const lightTheme = {
  dark: false,
  colors: {
    primary: '#003366',    // Mørk blå
    secondary: '#FFC72C',  // Gul
    accent: '#4CAF50',     // Blød Grøn
    background: '#F4F4F4', // Lys Grå
    surface: '#FFFFFF',    // Hvid overflade
    text: '#333333',       // Mørk Grå
  },
}

const darkTheme = {
  dark: true,
  colors: {
    primary: '#FFC72C',    // Gul (for kontrast)
    secondary: '#003366',  // Mørk blå
    accent: '#4CAF50',     // Blød Grøn
    background: '#121212', // Mørk baggrund
    surface: '#1E1E1E',    // Mørk overflade
    text: '#FFFFFF',       // Hvid tekst
  },
}

// Definer typografien for at sikre ensartethed på tværs af hele appen
const typography = {
  fontFamily: 'Roboto, sans-serif',
  fontSize: 16,
  h1: {
    fontFamily: 'Gloria Hallelujah, cursive',
    fontSize: '3rem',
    fontWeight: 'bold',
    lineHeight: 1.2,
    letterSpacing: '0.015em',
  },
  h2: {
    fontFamily: 'Gloria Hallelujah, cursive',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    lineHeight: 1.3,
    letterSpacing: '0.01em',
  },
  h3: {
    fontFamily: 'Gloria Hallelujah, cursive',
    fontSize: '2rem',
    fontWeight: 'bold',
    lineHeight: 1.4,
    letterSpacing: '0.01em',
  },
  body1: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '1rem',
    lineHeight: 1.6,
    color: '#333333',
  },
  body2: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '0.875rem',
    lineHeight: 1.5,
    color: '#555555',
  },
}

// Opret Vuetify instance med temaer og typografi
export default createVuetify({
  theme: {
    defaultTheme: 'light', // Du kan ændre dette til 'dark', hvis du vil starte i mørk tilstand
    themes: {
      light: lightTheme,
      dark: darkTheme,
    },
  },
  typography: typography,
})
