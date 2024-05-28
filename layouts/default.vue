<script setup lang="ts">
import { useModalsStore } from '~/store/modalsStore'

const modalsStore = useModalsStore()
</script>

<template>
  <div class="app">
    <NuxtLoadingIndicator />
    <Header />
    <slot></slot>
    <Footer />
    <transition name="fade">
      <ModalCallSpecialist
        v-if="modalsStore.showModal.specialist"
        v-model:is-active="modalsStore.showModal.specialist"
      />
    </transition>
    <transition name="fade">
      <ModalResultRequest
        v-if="modalsStore.showModal.resultSuccess"
        v-model:is-active="modalsStore.showModal.resultSuccess"
        type="success"
      />
    </transition>

    <transition name="fade">
      <ModalResultRequest
        v-if="modalsStore.showModal.resultError"
        v-model:is-active="modalsStore.showModal.resultError"
        type="error"
      />
    </transition>
    <transition name="fade">
      <ModalQuestionDiscussion
        v-if="modalsStore.showModal.discussionQuestion"
        v-model:is-active="modalsStore.showModal.discussionQuestion"
        type="question"
      />
    </transition>
    <transition name="fade">
      <ModalQuestionDiscussion
        v-if="modalsStore.showModal.discussionDiscussion"
        v-model:is-active="modalsStore.showModal.discussionDiscussion"
        type="discussion"
      />
    </transition>
  </div>
</template>

<style scoped lang="scss"></style>
