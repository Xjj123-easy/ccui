<template>
  <aButton :msg="msgs" @clicks="aa"></aButton>
  <h1>{{msgss.a}}</h1>
  <el-button @click="bb">{{msgss.a}}</el-button>
  <!-- <Dome/> -->
</template>

<script setup>
import { reactive } from 'vue';
const msgs="按钮"
const msgss=reactive({
  a:1
})
function aa(e){
  msgss.a++;
}
function bb(){
  msgss.a++;
}
</script>
