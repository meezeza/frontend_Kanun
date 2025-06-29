<template>
  <div class="not-found-page">
    <h1>404</h1>
    <h2>ไม่พบหน้าเพจที่คุณกำลังมองหา</h2>
    <p>ขออภัยค่ะ หน้าเพจที่คุณต้องการอาจถูกลบ ย้ายไปที่อื่น หรือคุณอาจพิมพ์ URL ผิด</p>
    <button @click="goHome">กลับสู่หน้าหลัก</button>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
  methods:{
    goHome(){
      this.$router.push('/');
    }
  }
};

</script>

<style>

</style>