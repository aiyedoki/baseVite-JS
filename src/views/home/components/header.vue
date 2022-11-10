<template>
  <header class="s-h-40 s-fw-b">
    <div class="container flex-row flex-just-between flex-align-center h-1">
      <a href="https://github.com/aiyedoki/baseVite-Vue3-Template" target="_blank">
        <img src="https://fastly.jsdelivr.net/npm/@vant/assets/github.svg" class="s-w-30" />
      </a>

      <span class="s-h-40 s-lh-40" @click="changeLan">
        <template v-if="lang === 'en'">切换英文</template>
        <template v-else>Toggle Chinese</template>
      </span>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()

const lang = ref('cn')
const changeLan = () => {
  locale.value = lang.value === 'cn' ? 'en' : 'cn'
  lang.value = locale.value
}

</script>

<style lang="scss" scoped>
header {
  background-color: #74747e;
  span {
    color: #fff;
    cursor: pointer;
    text-decoration: underline;
    &:hover {
      color: #2aa8da;
    }
  }
}
</style>
