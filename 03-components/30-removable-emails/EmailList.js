import {defineComponent} from 'vue/dist/vue.esm-bundler.js'
import EmailListItem from './EmailListItem.js'

export default defineComponent({
    name: 'EmailList',

    components: {
        EmailListItem,
    },

    props: {
        emails: {
            type: Array,
            required: true,
        },

    },

    emits: ['deleteElement'],

    template: `
      <ul class="emails-list unstyled-list" aria-label="Emails">
      <EmailListItem
          v-for="({ email, isMarked }, index) in emails"
          :key="email"
          :email="email"
          :index
          :marked="isMarked"
          @remove-element="$emit('delete-element', index)"
      />
      </ul>
    `,
});
