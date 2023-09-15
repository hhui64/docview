<script setup lang="ts">
const props = defineProps({
  type: {
    type: String as PropType<'ok' | 'error' | 'no'>,
    default: 'ok'
  },
  text: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="h-badge" :class="type">{{ text }}</div>
</template>

<style lang="less" scoped>
.h-badge {
  padding: 0 7px;
  height: 20px;
  line-height: 20px;
  color: #fff;
  border-radius: 50px;
  font-size: 12px;

  &.ok {
    background-color: #1CC200;
  }

  &.error {
    background-color: #FF6600;
  }

  &.no {
    background-color: #BBBBBB;
  }
}
</style>
