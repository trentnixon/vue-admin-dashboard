// vuetify.ts
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi';

// Define the custom theme
const myTheme = {
  dark: false,
  colors: {
    primary: '#00897B', // teal darken-1
    secondary: '#4DB6AC', // teal lighten-2
    accent: '#FF7043', // deep orange lighten-1 (coral)
    error: '#D32F2F', // red darken-2
    warning: '#FB8C00', // orange darken-1
    info: '#4DB6AC', // teal lighten-2
    success: '#80CBC4', // teal lighten-3
    background: '#FFFFFF', // white
    surface: '#F5F5F5', // light grey
    'on-primary': '#FFFFFF', // text color on primary
    'on-secondary': '#FFFFFF', // text color on secondary
    'on-surface': '#333333', // text color on surface
    'on-background': '#333333', // text color on background
    'on-error': '#FFFFFF', // text color on error
  },
};

// Create and export the Vuetify instance
const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'myTheme', // Set the custom theme as the default theme
    themes: {
      myTheme, // Register the custom theme
    },
  },
});

export default vuetify;
