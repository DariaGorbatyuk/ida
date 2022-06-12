import { defineStore } from "pinia";
import data from "@/data";
import { setTimer } from "@/helpers/setTimer";
export const useProductStore = defineStore("productStore", {
  // arrow function recommended for full type inference
  state: () => {
    return {
      isLoading: false,
      productList: [],
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
  },
});
