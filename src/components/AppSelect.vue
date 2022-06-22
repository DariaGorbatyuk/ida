<template>
  <div class="select">
    <button type="button" class="select__input" @click="isOpenSelect = !isOpenSelect"

    >
      <span>{{currentText}}</span>
      <img src="@/assets/img/arrow.svg" alt="">
    </button>
    <ul class="select__list" v-show="isOpenSelect" v-click-outside="onClickOutside">
      <li>
        <button class="select__btn" ref="btnMin"  type="button" @click="sortByMin($event)">По цене min</button>
      </li>
      <li>
        <button class="select__btn" ref="btnMax"  type="button" @click="sortByMax($event)">По цене max</button>
      </li>
      <li>
        <button class="select__btn" ref="btnName" type="button" @click="sortByName($event)">По наименованию</button>
      </li>
      <li>
        <button class="select__btn active" ref="btnDefault" type="button" @click="sortByDefault($event)">По умолчанию</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import {useProductStore} from "@/stores/productsStore";
import { onMounted, reactive, ref } from "vue";
import vClickOutside from "click-outside-vue3";
const productStore = useProductStore()
const isOpenSelect = ref(false)
const btnMin = ref(null)
const btnMax = ref(null)
const btnName = ref(null)
const btnDefault = ref(null)
const btnsArray = [btnMin, btnMax, btnName, btnDefault]
function resetClasses(){
  btnsArray.forEach((btn)=>btn.value.classList.remove('active'))
}
let currentText = ref('По умолчанию')
function sortByMin(evt) {
  productStore.sortByMin()
  currentText.value = evt.target.textContent
  resetClasses()
  evt.target.classList.add('active')
  isOpenSelect.value = !isOpenSelect.value
}

function sortByMax(evt) {
  productStore.sortByMax()
  currentText.value = evt.target.textContent
  resetClasses()
  evt.target.classList.add('active')
  isOpenSelect.value = !isOpenSelect.value
}

function sortByName(evt) {
  productStore.sortByName()
  currentText.value = evt.target.textContent
  resetClasses()
  evt.target.classList.add('active')
  isOpenSelect.value = !isOpenSelect.value
}
function onClickOutside(){
  isOpenSelect.value = !isOpenSelect.value
}

function sortByDefault(evt) {
  productStore.sortByDefault()
  currentText.value = evt.target.textContent
  resetClasses()
  evt.target.classList.add('active')
  isOpenSelect.value = !isOpenSelect.value
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
