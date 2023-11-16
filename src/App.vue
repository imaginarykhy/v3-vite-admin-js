<template>
  <div>
    <ElConfigProvider :locale="locale">
      <router-view />
    </ElConfigProvider>
  </div>
</template>

<script setup>
import zhCn from "element-plus/lib/locale/lang/zh-cn"
const locale = zhCn
</script>

<style scoped></style>