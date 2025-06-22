<script setup>
import mybar from './views/mybar.vue'
import MyCart from './views/MyCart.vue'
import products from "./products.json"
</script>

<template>
<div id="app">
  <mybar />
  <h1>สินค้า</h1>
    <div class="card-grid">
      <MyCart v-for="item in products" v-bind="item"/>
    </div>
  </div>
</template>

<style scoped>
/* นำเข้า Google Fonts - ใช้ฟอนต์ Poppins */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

/* กำหนดสไตล์ให้กับ #app ซึ่งเป็น div หลักใน Vue */
#app {
  text-align: center;        /* จัดข้อความให้อยู่กึ่งกลาง */
  max-width: 1200px;         /* กำหนดความกว้างสูงสุดของเนื้อหา */
  margin: 0 auto;            /* จัดให้อยู่ตรงกลางของหน้าจอ */
}

/* สไตล์สำหรับหัวข้อหลัก */
h1 {
  color: #333;
}


/* --------------------- Responsive Grid System --------------------- */

/* สร้างกริดแสดงการ์ดแบบ 1 คอลัมน์ สำหรับหน้าจอเล็ก */
.card-grid {
  display: grid;                  /* ใช้ grid layout */
  grid-template-columns: 1fr;    /* 1 คอลัมน์ (เต็มแถว) */
  gap: 20px;                      /* ระยะห่างระหว่างการ์ด */
  justify-items: center;         /* จัดให้อยู่ตรงกลางในแต่ละแถว */
}

/* สำหรับหน้าจอกว้างกว่า 576px  */
@media (min-width: 576px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr); /* แสดง 2 คอลัมน์ */
  }
}

/* สำหรับหน้าจอกว้างกว่า 992px */
@media (min-width: 992px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr); /* แสดง 3 คอลัมน์ */
  }
}
</style>

