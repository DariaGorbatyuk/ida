<template>
  <div class="select">
    <button type="button" class="select__input" @click="isOpenSelect = !isOpenSelect"
            v-click-outside="onClickOutside"
    >
      <span>{{currentText}}</span>
      <img src="@/assets/img/arrow.svg" alt="">
    </button>
    <ul class="select__list" :class="{open: isOpenSelect}">
      <li>
        <button class="select__btn" ref="btnMin" type="button" @click="sortByMin">По цене min</button>
      </li>
      <li>
        <button class="select__btn" ref="btnMax" type="button" @click="sortByMax">По цене max</button>
      </li>
      <li>
        <button class="select__btn" ref="btnName" type="button" @click="sortByName">По наименованию</button>
      </li>
      <li>
        <button class="select__btn active" ref="btnDefault" type="button" @click="sortByDefault">По умолчанию</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import {useProductStore} from "@/stores/productsStore";
import {ref} from "vue";

const productStore = useProductStore()
const isOpenSelect = ref(false)
const btnMin = ref(null)
const btnMax = ref(null)
const btnName = ref(null)
const btnDefault = ref(null)
let currentText = ref('По умолчанию')
function sortByMin() {
  productStore.sortByMin()
  currentText.value = btnMin.value.textContent
  btnMin.value.classList.add('active')
}

function sortByMax() {
  productStore.sortByMax()
  currentText.value = btnMax.value.textContent

}

function sortByName() {
  productStore.sortByName()
  currentText.value = btnName.value.textContent
}
function onClickOutside(){
  console.log('asdfsdaf')
}

function sortByDefault() {

}
</script>

<style scoped lang="scss">
.select {
  position: relative;
  z-index: 1;
}

.select__input {
  background: var(--color-floral-white);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  font-family: var(--font);
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.2;
  color: var(--color-pink-swan);
  padding: 10px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 10px;
  border: none;
  cursor: pointer;
  min-width: 130px;
}

.select__list {
  background-color: white;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  list-style: none;
  margin: 0;
  position: absolute;
  top: 40px;
  left: -5px;
  display: none;

  &.open {
    display: block;
  }
}

.select__btn {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-family: var(--font);
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.2;

  &.active {
    color: var(--color-amulet);
  }
}
</style>
