<template>
  <div class="card">
    <div class="card__img">
      <img src="@/assets/img/default.jpg" alt="Фото товара" />
    </div>
    <h2 class="card__title">{{ item.name }}</h2>
    <p class="card__text">
      Довольно-таки интересное описание товара в несколько строк. Довольно-таки
      интересное описание товара в несколько строк
    </p>
    <span class="card__price">10 000 руб.</span>
    <button class="card__btn" type="button" aria-label="Удалить товар">
      <app-icon-delete></app-icon-delete>
    </button>
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

<style scoped></style>
