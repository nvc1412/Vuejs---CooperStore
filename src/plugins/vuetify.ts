import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#1E88E5',
          secondary: '#D32F2F',
          accent: '#FF4081',
          error: '#F44336',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FF9800',
          menu: '#2A4050',
          content: '#F4F5Fa',
          active: '#00FFFF'
        }
      }
    }
  }
});

export default vuetify;
