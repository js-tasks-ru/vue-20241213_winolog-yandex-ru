import { defineComponent, ref, watch } from 'vue/dist/vue.esm-bundler.js';
import { UiButton } from '@shgk/vue-course-ui';
import './UiCounter.css';

export default defineComponent({
    name: 'UiCounter',

    components: {
        UiButton,
    },

    emits: ['update:count'],

    setup(props, { emit }) {
        const { min, max } = props;
        const countInner = ref(props.count);

        const updateCount = (newCount) => {
            countInner.value = newCount;
            emit('update:count', newCount);
        };

        watch(() => props.count, (newCount) => {
            countInner.value = newCount;
        });

        return {
            countInner,
            updateCount,
        };
    },

    props: {
        min: {
            type: Number,
            default: 0
        },
        count: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: Infinity
        },
    },

    template: `
      <div class="counter">
        <UiButton aria-label="Decrement" :disabled="countInner <= min" @click="updateCount(countInner - 1)">➖</UiButton>
        <span class="count" data-testid="count">{{ countInner }}</span>
        <UiButton aria-label="Increment" :disabled="countInner >= max" @click="updateCount(countInner + 1)">➕</UiButton>
      </div>
    `,
});