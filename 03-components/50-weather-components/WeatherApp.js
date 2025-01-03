import { defineComponent } from 'vue';
import { getWeatherData, WeatherConditionIcons } from './weather.service.ts'
import UiAlert from './UiAlert.js';
import './WeatherApp.css';
import UiDetail from "./UiDetail.js";

export default defineComponent({
  name: 'WeatherApp',
  components: {UiDetail, UiAlert},

  setup() {
    return {
      weatherData: getWeatherData(),
    }
  },
  template: `
    <div>
    <h1 class="title">Погода в Средиземье</h1>

    <ul class="weather-list unstyled-list" v-for="item in weatherData">
      <li class="weather-card" :class="{'weather-card--night': item.current.dt < item.current.sunrise || item.current.dt > item.current.sunset}" >
       <UiAlert v-if="item.alert"/>
        <div>
          <h2 class="weather-card__name">
            {{ item.geographic_name }}
          </h2>
          <div class="weather-card__time">
            {{ item.current.dt }}
          </div>
        </div>
        <UiDetail :item/>
      </li>
    </ul>
    </div>
  `,
})