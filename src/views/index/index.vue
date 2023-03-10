<template>
  <div>{{ count }}</div>
  <el-button @click="count++">+</el-button>
  <el-button @click="count--">-</el-button>
  <el-button @click="change">change</el-button>
</template>

<script lang="ts" setup>
import {ref} from "vue";

let count: number = ref(0)

function change() {
  count.value = 10
}
</script>
