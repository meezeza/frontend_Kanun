@ -0,0 +1,73 @@
<template lang="">
  <div class="card">
    <img :src="coverimage" :alt="name" style="width:100%">
    <div class="container">
      <h4><b>{{ name }}</b></h4>
      <p>{{ detail }}</p>
      <p class="price">{{ price }}</p>
      <p><router-link :to=" `/products/${id} `">
        <button>View Details</button>
      </router-link></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyCart",
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    detail: {
      type: String,
      default: "",
    },
    coverimage: {
      type: String,
      required: true,
    },
    price: {
      type: [String, Number],
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
  
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 10px 20px 0 rgba(0,0,0,0.2);
}

img {
  border-radius: 5px 5px 0 0;
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
  margin: 20px;
  margin-top: 10px;
}

.price {
  color: grey;
  font-size: 22px;
}

.card button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

.card button:hover {
  opacity: 0.7;
}
</style>