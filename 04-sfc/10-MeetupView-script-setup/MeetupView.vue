<script setup>
import { defineComponent, defineProps } from 'vue'
import { UiAlert, UiContainer } from '@shgk/vue-course-ui'
import MeetupAgenda from './MeetupAgenda.vue'
import MeetupDescription from './MeetupDescription.vue'
import MeetupCover from './MeetupCover.vue'
import MeetupInfo from './MeetupInfo.vue'

defineProps({
    meetup: {
      type: Object,
      required: true,
    },
  },
)
</script>

<template>
  <div>
    <!-- Обложка митапа -->

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
</template>

<style scoped>
.meetup {
  display: flex;
  flex-direction: column-reverse;
  gap: var(--spacing-large);
  margin-block-start: var(--spacing-large);
}

.meetup__content {
}

.meetup__aside {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-base);
}

.meetup__aside-buttons {
  padding-inline-start: calc(var(--control-size-small) + var(--spacing-small));
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-smaller);
}

@media all and (min-width: 992px) {
  .meetup {
    flex-direction: row;
  }

  .meetup__content {
    flex: 1 0;
  }

  .meetup__aside {
    width: 350px;
    /* Inline with tabs */
    margin-block-start: var(--control-size);
  }

  .meetup__aside-buttons {
    flex-direction: column;
  }
}
</style>
