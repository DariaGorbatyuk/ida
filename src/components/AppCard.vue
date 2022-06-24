<template>
  <div class="card">
    <div class="card__img">
      <img :src="imgPath" alt="Фото товара"/>
    </div>
    <div class="card__content">
      <h2 class="card__title">{{ item.name }}</h2>
      <p class="card__text" v-if="item.description">
        {{ item.description }}
      </p>
      <span class="card__price"
      >{{ price }}&nbsp;руб.</span
      >
      <button
          class="card__btn"
          type="button"
          aria-label="Удалить товар"
          @click="removeItem(item.id)"
      >
        <app-icon-delete></app-icon-delete>
      </button>
    </div>
  </div>
</template>

<script setup>
import AppIconDelete from "@/components/icons/AppIconDelete.vue";
import {computed, defineProps, onMounted} from "vue";
import {useProductStore} from "@/stores/productsStore";

const productStore = useProductStore();
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});
const imgPath = computed(
    () => props.item.link ?? require("@/assets/img/default.png")
);
const price = computed(() => Number(props.item.price).toLocaleString('ru'))

function removeItem(id) {
  productStore.removeProduct(id);
}
</script>

<style scoped lang="scss">
.card {
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #FFFEFB;
  box-shadow: 0 20px 30px rgba(black, 0.04), 0 6px 10px rgba(black, 0.02);
  border-radius: 4px;
  position: relative;
  transition: transform 300ms linear;

  &:hover,
  &:focus {
    cursor: pointer;
    transform: scale(1.02);

    .card__btn {
      display: block;
    }
  }
}

.card__img {
  height: 200px;
  border-radius: 4px 4px 0 0;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.card__content {
  padding: 16px;
  display: flex;
  flex-direction: column;
  font: inherit;
  color: var(--color-eclipse);
  position: static;
  flex-grow: 1;
}

.card__title {
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  margin-bottom: 16px;
}

.card__text {
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;
  margin-bottom: 32px;
}

.card__price {
  margin-top: auto;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.2;
}

.card__btn {
  position: absolute;
  width: 32px;
  height: 32px;
  top: -10px;
  right: -10px;
  background-color: var(--color-light-coral);
  border: none;
  padding: 0;
  box-shadow: 0 2px 4px rgba(white, 0.1);
  border-radius: 10px;
  cursor: pointer;
  display: none;
  transition: opacity 300ms ease-in;

  @media screen and (max-width: 1023px) {
    display: block;
  }
}
</style>
