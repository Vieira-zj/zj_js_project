<template>
  <div id="app">
    <h1>Shopping Cart Example</h1>
    <hr>
    <h2>Products</h2>
    <product-list />
    <hr>
    <shopping-cart />
  </div>
</template>

<script>
import ProductList from '@/components/shop/ProductList.vue'
import ShoppingCart from '@/components/shop/ShoppingCart.vue'

export default {
  components: {
    ProductList,
    ShoppingCart
  }
}
</script>

<style src="@/css/global.css"></style>

<style scoped>
h1 {
  text-align: center;
}
</style>