import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light', // Cài đặt theme mặc định
    themes: {
      light: {
        // Định nghĩa các màu sắc trong light theme
        colors: {
          primary: '#1E88E5', // Màu chính
          secondary: '#D32F2F', // Màu phụ
          accent: '#FF4081', // Màu nhấn
          error: '#f44336',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FF9800'
        }
      }
    }
  }
});

export default vuetify;
