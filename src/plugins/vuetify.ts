// vuetify.ts
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi';

// Define the custom theme
const myTheme = {
  dark: false,
  colors: {
    primary: '#0097A7', // teal darken-1
    secondary: '#005262', // teal lighten-2
    accent: '#A24000', // deep orange lighten-1 (coral)
    accent2: '#0097A7', // teal darken-1
    accent3: '#FF8D3E', // deep orange lighten-1 (coral)
    accent4: '#498D7C', // teal lighten-2
    error: '#A9406C', // red darken-2
    warning: '#FF8D3E', // orange darken-1
    info: '#EEE8A9', // teal lighten-2
    success: '#61B29D', // teal lighten-3
    background: '#FFFFFF', // white
    surface: '#F5F5F5', // light grey

    cardNeutral: '#FFFFFF', // white
    carderror: '#A9406C', // white
    cardwarning: '#FF8D3E', // white
    cardinfo: '#EEE8A9', // white
    cardsuccess: '#61B29D', // white
    'on-primary': '#FFFFFF', // text color on primary
    'on-secondary': '#FFFFFF', // text color on secondary
    'on-surface': '#333333', // text color on surface
    'on-background': '#333333', // text color on background
    'on-error': '#FFFFFF' // text color on error
  }
};

// Create and export the Vuetify instance
const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  },
  theme: {
    defaultTheme: 'myTheme', // Set the custom theme as the default theme
    themes: {
      myTheme // Register the custom theme
    }
  }
});

export default vuetify;
