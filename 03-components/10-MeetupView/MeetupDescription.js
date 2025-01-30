import { defineComponent } from 'vue/dist/vue.esm-bundler.js'
import './MeetupDescription.css'

export default defineComponent({
  name: 'MeetupDescription',

  props: {
    description: {
      type: String,
    },
  },

  template: `
    <div class="meetup-description">{{ description }}</div>
  `,
})
