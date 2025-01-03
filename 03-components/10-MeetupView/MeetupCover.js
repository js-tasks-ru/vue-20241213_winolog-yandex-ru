import { computed, defineComponent } from 'vue/dist/vue.esm-bundler.js'
import './MeetupCover.css'

export default defineComponent({
  name: 'MeetupCover',

  props: {
    title: {
      type: String,
    },

    image: {
      type: String,
    },
  },

  setup(props) {
    const bgStyle = computed(() => (props.image ? { '--bg-url': `url('${props.image}')` } : undefined))
    return {
      bgStyle,
    }
  },

  template: `
    <div class="meetup-cover" :style="bgStyle">
      <h1 class="meetup-cover__title">{{ title }}</h1>
    </div>
  `,
})
