<script setup>
import mybar from "./views/mybar.vue";

</script>

<template>
  <div id="app">
    <header>
      <mybar />
    </header> 
     <router-view />
  </div>
</template>
<script>
export default {
  name : 'App',
  components : {mybar}
}
</script>

<style>
/* นำเข้า Google Fonts - ใช้ฟอนต์ Poppins */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
/* ตั้งค่าพื้นฐานให้กับ body ของหน้าเว็บ */
body {
  font-family: 'Poppins', sans-serif;
  margin: 0; /* ไม่เว้นขอบรอบหน้า */
  background-color: #f4f4f4; /* สีพื้นหลังเทาอ่อน */
  padding: 20px; /* เว้นขอบด้านในของ body */
}

/* กำหนดสไตล์ให้กับ #app ซึ่งเป็น div หลักใน Vue */
#app {
  text-align: center;        /* จัดข้อความให้อยู่กึ่งกลาง */
  max-width: 1200px;         /* กำหนดความกว้างสูงสุดของเนื้อหา */
  margin: 0 auto;            /* จัดให้อยู่ตรงกลางของหน้าจอ */
}

/* สไตล์สำหรับหัวข้อหลัก */
h1 {
  color: #7c6d6d;               /* สีเทาเข้ม */

}
</style>
