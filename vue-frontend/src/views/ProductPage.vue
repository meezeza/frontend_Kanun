<template>
   <div>
    <h1>Products</h1>
    <div class="card-grid">
      <MyCart 
      v-for="item in products"
      :key="item.id"
      :id="item.id"
      :name="item.title"
      :detail="item.description"
      :coverimage="item.image"
      :price="item.price"
        />
    </div>
  </div>
</template>

<script setup>
import MyCart from '@/views/MyCart.vue';
import { ref, onMounted } from 'vue'
//import products from'@/products.json'

const products = ref([])

onMounted(() => {
  fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((data) => {
      products.value = data
    })
    .catch((err) => console.error('Error fetching products:', err))
})

</script>

<style scoped>
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