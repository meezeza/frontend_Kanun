<template>
  <main>
    <h1>{{ Message }}</h1>
  </main>
</template>

<script>
import { ref } from 'vue';

export default {
    name : 'HomePage',
    setup(){
         const Message = ref('ยินดีต้อนรับ')
         return {Message}
    }
}
</script>

<style>

</style>