<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import items from '../Products.json'; 

const route = useRoute()
const id = route.params.id
const product = ref(null)


onMounted(() => {
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((data) => {
      product.value = data
    })
    .catch((error) => {
      console.error('Error fetching product:', error)
    })
})
</script>

<template>
  <div v-if="product" class="container">
    <div class="left-column">
      <img :src="product.image" :alt="product.name" /> </div>
    <div class="right-column">
      <div class="product-description">
        <h1>{{ product.title }}</h1> 
        <p>{{ product.description }}</p> 
        <p>Price: {{ product.price }}</p>
         <router-link to="/product">
          <button class="cart-btn">Back to Products</button>
        </router-link>
      </div>
    </div>
  </div>
  <div v-else>
    <h1>Product not found or loading...</h1>
    <router-link to="/product">
      <button>Go back to the product list</button>
    </router-link>
  </div>
</template>

<style scoped>

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
  display: flex;
  margin-top: 15%;
}

.left-column {
  width: 60%;
  position: sticky;
  padding: 10px 15px;
  margin-left: 55px;
}

/* Left Column */
.left-column img {
  border-radius: 5px 5px 0 0;
  height: 400px;
  width: 400px;
}

.left-column img.active {
  opacity: 1;
}

.right-column {
  width: 65%;
  margin-top: auto;
}

/* Product Description */
.product-description {
  border-bottom: 1px solid #E1E8EE;
  margin-bottom: 20px;
}

.product-description span {
  font-size: 12px;
  color: #358ED7;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
}

.product-description h1 {
  font-weight: bolder;
  font-size: 35px;
  color: #43484D;
  letter-spacing: -1px;
}

.product-description p {
  font-size: 20px;
  font-weight: bold;
  padding: auto;
  color: #43484D;
  line-height: 24px;
  letter-spacing: -1px;
}

/* Product Price */
.product-price {
  display: flex;
  font-weight: bold;
  align-items: center;
}

.product-price span {
  font-size: 30px;
  font-weight: bold;
  font-weight: 300;
  color: #43484D;
  margin-right: 20px;
}

.cart-btn {

  background: linear-gradient(145deg, #f135b3, #4158d0);
  border-radius: 10px;
  font-size: 20px;
  color: #FFFFFF;
  text-decoration: none;
  padding: 12px 30px;
  margin-top: 5px;
  transition: all .5s;
  
}

.cart-btn:hover {
  background-color: #4400ff;
}

/* Responsive */
@media (max-width: 940px) {
  .container {
    flex-direction: column;
    margin-top: 60px;
  }

  .left-column,
  .right-column {
    width: 100%;
  }

  .left-column img {
    width: 300px;
    right: 0;
    top: -65px;
    left: initial;
  }
}

@media (max-width: 535px) {
  .left-column img {
    width: 220px;
    top: -85px;
  }
}
</style>