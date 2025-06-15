@ -0,0 +1,73 @@
<template lang="">
  <div class="card">
    <img src="\src\img\bud.jpg" alt="In-ear" style="width:100%" />
    <div className="container">
      <h1>Xiaomi Earbuds</h1>
      <p class="price">฿699</p>
      <p>คุณภาพเสียงยอดเยี่ยม</p>
      <p><button>Add to Cart</button></p>
    </div>
    <img src="\src\img\hyperx.jpg" alt="Mic" style="width:100%" />
    <div className="container">
      <h1>HyperX SoloCast</h1>
      <p class="price">฿1690</p>
      <p>ไมโครโฟนมีสาย USB</p>
      <p><button>Add to Cart</button></p>
    </div>
  </div>

</template>

<script>
export default {
    name: 'MyCard',
}
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