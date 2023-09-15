<script setup lang="ts">
import { globalReports } from '@/api/common'

type Report = {
  id: string
  status: {
    type: 'ok' | 'error' | 'no',
    text: string
  }
  content: Array<{
    name: string
    text: string
  }>
}

const getUrlKey = (name: string) => {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null
}

const report = ref<Report>()

onBeforeMount(() => {
  const id = getUrlKey('id')

  if (typeof id !== 'undefined' && typeof id === 'string') {
    report.value = globalReports.find(i => i.id === id)

    if (report.value) {
      //
    } else {
      alert('检测报告不存在！')
    }
  }
})
</script>

<template>
  <div class="card-wrap">
    <div class="card" :style="{ display: report ? 'block' : 'none' }">
      <div class="title">
        <span style="line-height: 32px;">检测报告详情</span>
        <h-badge :type="report?.status.type" :text="report?.status.text"
          style="position: absolute; top: 50%; transform: translate(0, -50%); right: 12px;"></h-badge>
      </div>

      <ul class="list">
        <li v-for="i in report?.content" :key="i.name" class="item">
          {{ i.name }}：{{ i.text }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="less" scoped></style>
