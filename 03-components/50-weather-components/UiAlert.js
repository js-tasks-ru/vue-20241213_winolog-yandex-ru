import { defineComponent } from 'vue'

export default defineComponent({
    name: 'UiAlert',
    props: {
        alertItem: {
            type: Object,
            required: true,
        },
    },
    setup(props) {
    },
    template: `
      <div class="weather-alert" >
      <span class="weather-alert__icon">⚠️</span>
      <span class="weather-alert__description">{{alertItem.sender_name}}: {{alertItem.description}}.</span>
      </div>
    `,
})