import {defineComponent, ref} from 'vue/dist/vue.esm-bundler.js'
import {computed} from "vue";

export default defineComponent({
    name: 'CalculatorApp',

    setup() {
        let result = computed(() => {
            switch (action.value) {
                case 'sum':
                    return Number(leftOperand.value) + Number(rightOperand.value);
                case 'subtract':
                    return Number(leftOperand.value) - Number(rightOperand.value);
                case 'multiply':
                    return Number(leftOperand.value) * Number(rightOperand.value);
                case 'divide':
                    return Number(leftOperand.value) / Number(rightOperand.value);
                default:
                    return 0;
            }
        })

        let leftOperand = ref(0);
        let rightOperand = ref(0);
        let action = ref(null);
        return {
            action,
            leftOperand,
            rightOperand,
            result,
        }
    },

    template: `
      <div class="calculator">
      <input type="number" aria-label="First operand" v-model="leftOperand"/>

      <div class="calculator__operators">
        <label><input type="radio" v-model="action" name="operator" value="sum"/>➕</label>
        <label><input type="radio" v-model="action" name="operator" value="subtract"/>➖</label>
        <label><input type="radio" v-model="action" name="operator" value="multiply"/>✖</label>
        <label><input type="radio" v-model="action" name="operator" value="divide"/>➗</label>
      </div>

      <input type="number" aria-label="Second operand" v-model="rightOperand"/>

      <div>=</div>

      <output>{{ result }}</output>
      </div>
    `,
})
