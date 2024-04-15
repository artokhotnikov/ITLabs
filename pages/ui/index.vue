<script setup lang="ts">
import { useOpen } from '~/utils/useOpen'

const { isOpen: isOpenCallSpecialist, open: openCallSpecialist } = useOpen()
const { isOpen: isOpenResultSuccessResponse, open: openResultSuccessResponse } =
  useOpen()
const { isOpen: isOpenResultErrorResponse, open: openResultErrorResponse } =
  useOpen()
const { isOpen: isOpenQuestion, open: openQuestion } = useOpen()
const { isOpen: isOpenDiscussion, open: openDiscussion } = useOpen()


const inputModel = ref('')
const tabs = ref(['Tab 1', 'Tab 2', 'Tab 3'])
const fileModel = ref(null)
const textareaModel = ref('')
const onChangeCheckbox = (value: string) => {
  // console.log(value)
}
const onChangeTab = (tab: string) => {
  // console.log(tab)
}
const onChangeTextarea = (newValue: string) => {
  // console.log(newValue)
}
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
      <Input
        id="main-field"
        v-model="inputModel"
        :validRegx="RegExp('^[A-Z]{3}$')"
        type="text"
        color="primary"
        placeholder="Введите текст"
        required
      />
      <InputFile v-model="fileModel" />
    </div>
    <div class="list">
      <Textarea
        v-model="textareaModel"
        color="primary"
        @change-textarea="onChangeTextarea"
      >
        <template #additional>
          <InputFile class="additional" />
        </template>
      </Textarea>
    </div>
    <div class="list">
      <Checkbox
        type="checkbox"
        label="Left label"
        :rtl="true"
        color="primary"
        @change-checkbox="onChangeCheckbox"
      />
      <Checkbox
        type="checkbox"
        label="Right label"
        :rtl="false"
        color="primary"
        @change-checkbox="onChangeCheckbox"
      />
      <Checkbox
        type="radio"
        label="Left label"
        :rtl="true"
        color="primary"
        @change-checkbox="onChangeCheckbox"
      />
      <Checkbox
        type="radio"
        label="Right label"
        :rtl="false"
        color="primary"
        @change-checkbox="onChangeCheckbox"
      />
    </div>
    <div class="list">
      <Tab :titles="tabs" @change-tab="onChangeTab" />
    </div>
    <div class="list">
      <Switcher />
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

.additional {
  justify-content: flex-end;
}
</style>
