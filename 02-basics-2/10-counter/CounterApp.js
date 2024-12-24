import { defineComponent, ref } from 'vue/dist/vue.esm-bundler.js' // в противном случае Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js". противном случае

export default defineComponent({
  name: 'CounterApp',

  setup() {
    const count = ref(0);
    return {
      count
    }
  },

  template: `
    <div class="counter">
      <button
        class="button button--secondary"
        type="button"
        aria-label="Decrement"
        :disabled="count <= 0"
        @click="count--"
      >➖</button>

      <span class="count" data-testid="count">{{count}}</span>

      <button
        class="button button--secondary"
        type="button"
        aria-label="Increment"
        :disabled="count >= 5"
        @click="count++"
      >➕</button>
    </div>
  `,
})
