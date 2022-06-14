import { defineStore } from "pinia";
import data from "@/data";
import { setTimer } from "@/helpers/setTimer";

export const useProductStore = defineStore("productStore", {
  // arrow function recommended for full type inference
  state: () => {
    return {
      isLoading: false,
      productList: [],
      defaultList: []
    };
  },
  actions: {
    async initProductList() {
      this.isLoading = true;
      await setTimer(this.fillData, 2000);
      this.isLoading = false;
    },
    fillData() {
      this.productList = [...data];
    },
    addProduct(newProduct) {
      this.productList.push(newProduct);
    },
    removeProduct(id) {
      const i = this.productList.findIndex((item) => item.id === id);
      this.productList.splice(i, 1);
    },
    sortByMin(){
      this.productList.sort((a, b) => a.price - b.price)
    },
    sortByMax(){
      this.productList.sort((a, b) => b.price - a.price)
    },
    sortByName(){
      this.productList.sort((a, b)=> a.name.localeCompare(b.name))
    }
  },
});
