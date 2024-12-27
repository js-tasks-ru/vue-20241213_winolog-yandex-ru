import { defineComponent } from 'vue/dist/vue.esm-bundler.js';

export default defineComponent({
  name: 'EmailListItem',

  props: {
    email: {
      type: String,
      required: true,
    },
    index:{
      type: Number
    },
    marked: {
      type: Boolean,
      default: false,
    },

    emits: ['remove-element'],
  },


  template: `
    <li :class="{ marked }">
      {{ email }}
      <button type="button" aria-label="Удалить" @click.stop="$emit('remove-element')">❌</button>
    </li>
  `,
});
