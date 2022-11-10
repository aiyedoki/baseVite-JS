<template>
  <div class="home-container">
    <Header/>
    <div class="pc container">
      <div class="banner s-m-t-10 s-h-250 flex-column flex-just-between">
      <img src="@/assets/logo.png" class="s-w-150" />
      <h3 class="s-fs-35">@kidoki/base-vite</h3>
      <span class="s-fs-20">{{ $t('home.introduce') }}</span>
    </div>

    <div class="width">
      <div v-for="(item, index) in list" :key="index" :style="{ background: item.bg, color: item.color }" class="s-fw-b s-fs-30 s-p-l-20 s-m-t-20">
        {{ item.text }}
      </div>
    </div>
    </div>
  </div>
</template>

<script setup>
import Header from './components/header.vue'

import { ref } from 'vue'

const list = ref([
  { text: '1300px', bg: '#fe8735', color: '#fff' },
  { text: '1000px', bg: '#e82755', color: '#fff' },
  { text: '750px', bg: '#b1ab3c', color: '#fff' },
  { text: '375px', bg: '#1892cc', color: '#fff' }
])
</script>

<style scoped lang="scss">
.pc {
  .banner {
    background-color: #f0f0f0;
    padding: 20px;
  }
}

.width {
  div {
    border-radius: 0 20px 20px 0;

    &:nth-child(2) {
      width: 1000px;
    }
    &:nth-child(3) {
      width: 750px;
    }
    &:nth-child(4) {
      width: 375px;
    }
  }
}
</style>