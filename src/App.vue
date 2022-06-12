<template>
  <div class="app container">
    <div class="app__top">
      <h1 class="app__title">Добавление товара</h1>
    </div>
    <div class="app__content">
      <app-add-item-form></app-add-item-form>
      <transition-group
        name="products"
        v-show="productStore.productList.length > 0"
        tag="ul"
        class="app_items-list"
      >
        <li v-for="product in productStore.productList" :key="product.id">
          <app-card :item="product"></app-card>
        </li>
      </transition-group>
      <app-loader v-if="productStore.isLoading"></app-loader>
    </div>
  </div>
</template>

<script setup>
import AppAddItemForm from "@/components/AppAddItemForm.vue";
import AppCard from "@/components/AppCard.vue";
import AppLoader from "@/components/AppLoader";
import { useProductStore } from "@/stores/productsStore";

const productStore = useProductStore();

productStore.initProductList();
</script>

<style lang="scss" scoped>
.container {
  max-width: 1440px;
  padding: 0 32px;

  @media screen and (max-width: var(--vp-1023)) {
    padding: 20px;
  }
}

.app {
  .app__title {
  }
}
</style>
