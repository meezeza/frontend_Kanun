<script setup>
import { ref } from 'vue';
const show = ref(true)
const list = ref([1,2,3])
</script>

<template>
   <div>
    <button @click="show = !show">Log in</button>
    <button @click="list.push(list.length +1 )">Push Number</button>
    <button @click="list.pop()">Pop Number</button>
    <button @click="list.reverse()">reverse List</button>
    
    <ul v-if="show && list.length">
      <li v-for="item of list" :key="item"><h1>{{ item }}</h1></li>
    </ul>
    <p v-else-if="list.length">List is not empty, but hidden.</p>
    <p v-else>List is empty</p>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
}
</script>

<style>

</style>