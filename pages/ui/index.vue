<script setup lang="ts">
import { useOpen } from '~/utils/useOpen'
import Check from '~/components/Icons/Check.vue'

const { isOpen: isOpenCallSpecialist, open: openCallSpecialist } = useOpen()
const { isOpen: isOpenResultSuccessResponse, open: openResultSuccessResponse } =
  useOpen()
const { isOpen: isOpenResultErrorResponse, open: openResultErrorResponse } =
  useOpen()
const { isOpen: isOpenQuestion, open: openQuestion } = useOpen()
const { isOpen: isOpenDiscussion, open: openDiscussion } = useOpen()
const inputModel = ref('')
</script>
<template>
  <div>
    <!--  primary  -->
    <div class="list">
      <Button>Button</Button>
      <Button disabled>Button</Button>
      <Button outline>Button</Button>
      <Button outline disabled>Button</Button>
    </div>
    <!--    secondary  -->
    <div class="list">
      <Button color="secondary">Button</Button>
      <Button color="secondary" disabled>Button</Button>
      <Button color="secondary" outline>Button</Button>
      <Button color="secondary" outline disabled>Button</Button>
    </div>
    <div class="list">
      <!--      white  -->
      <Button color="white">Button</Button>
      <Button color="white" disabled>Button</Button>
      <Button color="white" outline>Button</Button>
      <Button color="white" outline disabled>Button</Button>
    </div>
    <div class="list">
      <!--      small  -->
      <Button small>Button</Button>
      <Button small disabled>Button</Button>
      <Button small outline>Button</Button>
      <Button small outline disabled>Button</Button>
    </div>
    <div class="list">
      <Input
        id="main-field"
        v-model="inputModel"
        type="text"
        color="primary"
        placeholder="Введите текст"
        required
      />
      <Checkbox
        type="checkbox"
        label="Left label"
        label-rotate="rtl"
        color="primary"
      />
      <Checkbox
        type="checkbox"
        label="Right label"
        label-rotate="rtr"
        color="primary"
      />
      <Checkbox
        type="radio"
        label="Left label"
        label-rotate="rtl"
        color="primary"
      />
      <Checkbox
        type="radio"
        label="Right label"
        label-rotate="rtr"
        color="primary"
      />
    </div>
    <div class="list">
      <Button @click="openCallSpecialist">Modal Call Specialist</Button>
      <Button @click="openResultSuccessResponse">Modal Success</Button>
      <Button @click="openResultErrorResponse">Modal Error</Button>
      <Button @click="openQuestion">Modal Question</Button>
      <Button @click="openDiscussion">Modal Discussion</Button>
    </div>
    <Teleport to="body">
      <transition name="fade">
        <ModalCallSpecialist
          v-if="isOpenCallSpecialist"
          v-model:is-active="isOpenCallSpecialist"
        />
      </transition>
      <transition name="fade">
        <ModalResultRequest
          v-if="isOpenResultSuccessResponse"
          v-model:is-active="isOpenResultSuccessResponse"
          type="success"
        />
      </transition>

      <transition name="fade">
        <ModalResultRequest
          v-if="isOpenResultErrorResponse"
          v-model:is-active="isOpenResultErrorResponse"
          type="error"
        />
      </transition>
      <transition name="fade">
        <ModalQuestionDiscussion
          v-if="isOpenQuestion"
          v-model:is-active="isOpenQuestion"
          type="question"
        />
      </transition>
      <transition name="fade">
        <ModalQuestionDiscussion
          v-if="isOpenDiscussion"
          v-model:is-active="isOpenDiscussion"
          type="discussion"
        />
      </transition>
    </Teleport>
  </div>
</template>
<style lang="scss" scoped>
.list {
  padding: 100px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;

  &:nth-child(2),
  &:nth-child(3) {
    background: black;
  }
}
</style>
