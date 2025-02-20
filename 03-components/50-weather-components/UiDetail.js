import {defineComponent} from 'vue'
import { getWeatherData, WeatherConditionIcons } from './weather.service.ts'

export default defineComponent({
    name: 'UiDetail',
    setup(props) {
        return {
            weatherConditionIcons: WeatherConditionIcons
        }
    },
    props: {
        item:{
            type: Object,
            required: true
        }
    },
    template: `
      <div class="weather-conditions">
      <div class="weather-conditions__icon" :title="item.current.weather.description">
        {{ weatherConditionIcons[item.current.weather.id] }}️
      </div>
      <div class="weather-conditions__temp">{{ (item.current.temp - 273.15).toFixed(1) }} °C</div>
      </div>
      <div class="weather-details">
      <div class="weather-details__item">
        <div class="weather-details__item-label">Давление, мм рт. ст.</div>
        <div class="weather-details__item-value">{{ (item.current.pressure * 0.75).toFixed(0) }}</div>
      </div>
      <div class="weather-details__item">
        <div class="weather-details__item-label">Влажность, %</div>
        <div class="weather-details__item-value">{{ item.current.humidity }}</div>
      </div>
      <div class="weather-details__item">
        <div class="weather-details__item-label">Облачность, %</div>
        <div class="weather-details__item-value">{{ item.current.clouds }}</div>
      </div>
      <div class="weather-details__item">
        <div class="weather-details__item-label">Ветер, м/с</div>
        <div class="weather-details__item-value">{{ item.current.wind_speed }}</div>
      </div>
      </div>
    `,
})