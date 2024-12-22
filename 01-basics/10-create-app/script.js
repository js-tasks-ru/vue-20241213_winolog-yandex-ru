import {createApp, defineComponent} from 'vue'


const App = defineComponent({
    'name': 'App',
    setup() {
        const currentDate =  new Date().toLocaleDateString(navigator.language, { dateStyle: 'long' })
        return {
            currentDate
        }
    },
    template: 'Сегодня {{currentDate}}',
})
;

createApp(App).mount('#app');