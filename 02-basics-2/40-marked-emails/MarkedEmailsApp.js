import {computed, defineComponent, ref, watchEffect} from 'vue/dist/vue.esm-bundler.js'

// Значения взяты из https://jsonplaceholder.typicode.com/comments
export const emails = [
    'Eliseo@gardner.biz',
    'Jayne_Kuhic@sydney.com',
    'Nikita@garfield.biz',
    'Lew@alysha.tv',
    'Hayden@althea.biz',
    'Presley.Mueller@myrl.com',
    'Dallas@ole.me',
    'Mallory_Kunze@marie.org',
    'Meghan_Littel@rene.us',
    'Carmen_Keeling@caroline.name',
    'Veronica_Goodwin@timmothy.net',
    'Oswald.Vandervort@leanne.org',
    'Kariane@jadyn.tv',
    'Nathan@solon.io',
    'Maynard.Hodkiewicz@roberta.com',
    'Christine@ayana.info',
    'Preston_Hudson@blaise.tv',
    'Vincenza_Klocko@albertha.name',
    'Madelynn.Gorczany@darion.biz',
    'Mariana_Orn@preston.org',
    'Noemie@marques.me',
    'Khalil@emile.co.uk',
    'Sophia@arianna.co.uk',
    'Jeffery@juwan.us',
    'Isaias_Kuhic@jarrett.net',
]

export default defineComponent({
    name: 'MarkedEmailsApp',

    setup() {
        let search = ref('');
        let baseEmails = ref(emails);
        let resultEmails = ref([]);

        watchEffect(() => {
            resultEmails.value = search.value
                ? baseEmails.value.map(email => {
                    const isMatch = email.includes(search.value);
                    return { email, isMatch };
                })
                : baseEmails.value.map(email => ({ email, isMatch: false }));
        })

        return {
            baseEmails,
            search,
            resultEmails
        };
    },

    template: `
      <div>
      <div class="form-group">
        <input type="search" v-model="search" aria-label="Search"/>
      </div>
      <ul aria-label="Emails">
        <li v-for="result in resultEmails" :class="result.isMatch ? 'marked' : ''">
          {{ result.email }}
        </li>

      </ul>
      </div>
    `,
})
