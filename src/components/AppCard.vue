<template>
  <div class="card">
    <div class="card__img">
      <img src="@/assets/img/default.png" alt="Фото товара" />
    </div>
    <div class="card__content">
      <h2 class="card__title">{{ item.name }}</h2>
      <p class="card__text">
        Довольно-таки интересное описание товара в несколько строк.
        Довольно-таки интересное описание товара в несколько строк
      </p>
      <span class="card__price">10 000 руб.</span>
      <transition name="button">
        <button class="card__btn" type="button" aria-label="Удалить товар">
          <app-icon-delete></app-icon-delete>
        </button>
      </transition>
    </div>
  </div>
</template>

<script setup>
import AppIconDelete from "@/components/icons/AppIconDelete.vue";
import { defineProps } from "vue";

defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.card {
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  background-color: var(--color-floral-white);
  box-shadow: 0 20px 30px rgba(white, 0.04), 0 6px 10px rgba(white, 0.02);
  border-radius: 4px;
  position: relative;
  transition: transform 300ms linear;

  &:hover,
  &:focus {
    cursor: pointer;
    transform: scale(1.02);
  }
}

.card__img {
  height: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.card__content {
  padding: 16px;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  font: inherit;
  color: var(--color-eclipse);
  position: static;
}

.card__title {
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
}

.card__text {
  font-weight: 400;
  font-size: 16px;
  line-height: 1.2;
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
}
</style>
