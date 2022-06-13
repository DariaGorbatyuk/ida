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
        class="app__items-list"
      >
        <li v-for="product in productStore.productList" :key="product.id">
          <app-card :item="product"></app-card>
        </li>
      </transition-group>
      <p
        class="app__empty-text"
        v-if="productStore.productList.length === 0 && !productStore.isLoading"
      >
        Список совсем пуст:( Добавьте что-нибудь
      </p>
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
  padding-left: 32px;
  padding-right: 32px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: var(--vp-1023)) {
    padding: 20px;
  }
}

.app {
  padding-top: 30px;
  padding-bottom: 30px;
}
.app__top {
  margin-bottom: 16px;
}
.app__title {
  font-family: var(--font);
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 1.2;
  color: var(--color-eclipse);
  margin-top: 0;
}

.app__content {
  display: grid;
  grid-template-columns: minmax(280px, 332px) 1fr;
  column-gap: 16px;
  align-items: flex-start;
}

.app__items-list {
  margin: 0;
  padding-left: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  li {
    display: flex;
  }
}

.app__empty-text {
  font-family: var(--font);
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 1.2;
  color: var(--color-eclipse);
  text-align: center;
}
</style>
