<template>
  <el-button @click="increment">
    {{ state.count }}
  </el-button>
</template>

<script setup>
import { reactive } from 'vue'
const state = reactive({ count: 0 })
function increment() {
  state.count++
}
</script>

