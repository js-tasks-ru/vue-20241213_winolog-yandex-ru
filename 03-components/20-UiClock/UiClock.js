import {defineComponent, ref} from 'vue/dist/vue.esm-bundler.js';
import {watchEffect} from "vue";

export default defineComponent({
    name: 'UiClock',

    setup() {
        const time = ref(null);
        let intervalId = null;
        const updateTime = () => {
            time.value = new Date().toLocaleTimeString(navigator.language, {timeStyle: 'medium'});
        };
        intervalId = setInterval(updateTime, 1000);
        time.value = new Date().toLocaleTimeString(navigator.language, {timeStyle: 'medium'});

        watchEffect((onInvalidate) => {
            onInvalidate(() => {
                clearInterval(intervalId);
            });
        });

        return {
            time
        };
    },

    template: `<div class="clock">{{ time }}</div>`,
})
