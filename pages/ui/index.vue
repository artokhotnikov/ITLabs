<script setup lang="ts">
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
      <label for="">3 заглавные буквы [A-Z]</label>
      <Input
        v-model="inputModel"
        type="text"
        color="primary"
        placeholder="Введите текст"
        :valid-regx="new RegExp('^[а-я]{}$')"
        required
      />
    </div>
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
