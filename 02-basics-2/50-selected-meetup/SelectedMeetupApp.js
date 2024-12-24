import {defineComponent, onMounted, ref, watchEffect} from 'vue/dist/vue.esm-bundler.js';
import {getMeetup} from './meetupsService.ts';
import {watch} from "vue";

export default defineComponent({
    name: 'SelectedMeetupApp',

    setup() {
        "use strict";
        let page = ref(1);
        let meetups = ref(null);

        watchEffect(async () => {
            try {
                meetups.value = await getMeetup(page.value);
            } catch (error) {
                console.error(error)
            }
        })

        return {
            page,
            meetups
        };
    },

    template: `
      <div class="meetup-selector">
          <div class="meetup-selector__control">
            <button class="button button--secondary" type="button"
                    :disabled="page <= 1"
                    @click="page--"
                    disabled>Предыдущий
            </button>
    
            <div class="radio-group" role="radiogroup">
              <template v-for="pager in 5">
                <div class="radio-group__button">
                  <input
                      :id="'meetup-id-' + pager"
                      class="radio-group__input"
                      type="radio"
                      name="meetupId"
                      :value="pager"
                      v-model="page"
                  />
                  <label :for="'meetup-id-' + pager" class="radio-group__label">{{ pager }}</label>
                </div>
              </template>
            </div>
    
            <button class="button button--secondary" type="button"
                    :disabled="page >= 5"
                    @click="page++"
            >Следующий
            </button>
          </div>
    
          <div class="meetup-selector__cover" v-if="meetups">
            <div class="meetup-cover">
              <h1 class="meetup-cover__title">{{ meetups.title }}</h1>
            </div>
          </div>
      </div>
    `,
});
