import { defineComponent } from 'vue/dist/vue.esm-bundler.js';
import { UiAlert, UiContainer } from '@shgk/vue-course-ui';
import MeetupAgenda from './MeetupAgenda.js';
import MeetupDescription from './MeetupDescription.js';
import MeetupCover from './MeetupCover.js';
import MeetupInfo from './MeetupInfo.js';
import './MeetupView.css'

export default defineComponent({
  name: 'MeetupView',

  components: {
    MeetupDescription,
    MeetupCover,
    UiAlert,
    UiContainer,
    MeetupAgenda,
    MeetupInfo,
  },

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },

  template: `
    <div>
    <UiContainer>
      <div class="meetup">
        <div class="meetup__content">
          <h2>Описание</h2>
          <meetup-cover :title="meetup.title" :image="meetup.image"/>
          <meetup-description :description="meetup.description"/>
          <h2>Программа</h2>
          <MeetupAgenda v-if="meetup.agenda && meetup.agenda.length > 0" :agenda="meetup.agenda"/>
          <UiAlert v-if="meetup.agenda.length === 0">
            Программа пока пуста...
          </UiAlert>
        </div>
        <div class="meetup__aside">
          <!-- Краткая информация о митапе -->
          <MeetupInfo :place="meetup.place" :organizer="meetup.organizer" :date="meetup.date"/>
          <div class="meetup__aside-buttons"></div>
        </div>
      </div>
    </UiContainer>
    </div>
  `,
});
