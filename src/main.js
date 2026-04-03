import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// FontAwesome imports
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faShield,
  faCloud,
  faUsers,
  faHeadset,
  faCog,
  faLightbulb,
  faServer,
  faLock,
  faChartLine,
  faWifi,
  faNetworkWired,
  faDesktop,
  faChevronRight,
  faCheck,
  faSatelliteDish,
  faTools,
  faHouseSignal,
  faDatabase,
  faShieldHalved,
  faUserTie,
  faSun,
  faMoon,
  faGlobe,
  faChevronDown,
  faArrowRight,
  faLocationDot,
  faPhone,
  faEnvelope,
  faPaperPlane,
  faChevronLeft
} from '@fortawesome/free-solid-svg-icons'

import {
  faTwitter
} from '@fortawesome/free-brands-svg-icons'

// Add icons to library
library.add(
  faShield,
  faCloud,
  faUsers,
  faHeadset,
  faCog,
  faLightbulb,
  faServer,
  faLock,
  faChartLine,
  faWifi,
  faNetworkWired,
  faDesktop,
  faChevronRight,
  faCheck,
  faSatelliteDish,
  faTools,
  faHouseSignal,
  faDatabase,
  faShieldHalved,
  faUserTie,
  faSun,
  faMoon,
  faGlobe,
  faChevronDown,
  faArrowRight,
  faLocationDot,
  faPhone,
  faEnvelope,
  faPaperPlane,
  faChevronLeft,
  faTwitter
)

import { register } from 'swiper/element/bundle';

// register Swiper custom elements
register();

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
