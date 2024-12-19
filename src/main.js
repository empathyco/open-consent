import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import router from './router';
import { messages } from './i18n/messages';
import './assets/fonts/fonts.css';
import styles from './assets/styles.js';

const userLanguage = navigator.language

const i18n = createI18n({
  legacy: false,
  locale: userLanguage.split('-')[0],
  fallbackLocale: 'en',
  messages
});

const beautifulConsent = document.createElement('div');
beautifulConsent.setAttribute('id', 'bc-cmp');
document.body.appendChild(beautifulConsent);
document.body.style.overflow = 'auto';

const shadowRoot = beautifulConsent.attachShadow({ mode: 'open' });

const appWrapper = document.createElement('div');
shadowRoot.appendChild(appWrapper);

const styleElement = document.createElement('style');
styleElement.textContent = styles;
styleElement.setAttribute('type', 'text/css');

shadowRoot.appendChild(styleElement);

createApp(App).use(router).use(i18n).mount(appWrapper);
