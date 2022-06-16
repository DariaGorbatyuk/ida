<template>
  <form action="" class="form" @submit.prevent="submitForm">
    <div class="form__field">
      <label for="name" class="required">Наименование товара</label>
      <input
        type="text"
        @blur="v$.name.$touch"
        name="name"
        id="name"
        placeholder="Введите наименование товара"
        v-model="state.name"
        :class="{ error: v$.name.$errors.length }"
      />
      <small
        class="form__error-massage"
        v-for="error in v$.name.$errors"
        :key="error.$uid"
        >{{ translate[error.$message] }}</small
      >
    </div>
    <div class="form__field">
      <label for="description">Описание товара</label>
      <textarea
        name="description"
        id="description"
        cols="30"
        rows="10"
        placeholder="Введите описание товара"
        v-model="state.description"
      >
      </textarea>
    </div>
    <div class="form__field">
      <label for="link" class="required">Ссылка на изображение товара</label>
      <input
        v-model="state.link"
        type="text"
        name="link"
        @blur="v$.link.$touch"
        id="link"
        placeholder="Введите ссылку"
        :class="{ error: v$.link.$errors.length }"
      />
      <small
        class="form__error-massage"
        v-for="error in v$.link.$errors"
        :key="error.$uid"
        >{{ translate[error.$message] }}</small
      >
    </div>
    <div class="form__field">
      <label for="price" class="required">Цена товара</label>
      <input
        v-model="state.price"
        type="text"
        name="price"
        @blur="v$.price.$touch"
        id="price"
        placeholder="Введите цену"
        :class="{ error: v$.price.$errors.length }"
      />
      <small
        class="form__error-massage"
        v-for="error in v$.price.$errors"
        :key="error.$uid"
        >{{ translate[error.$message] }}</small
      >
    </div>
    <button type="submit" class="form__submit" :disabled="v$.$invalid">
      Добавить товар
    </button>
  </form>
</template>

<script setup>
import useVuelidate from "@vuelidate/core";
import { numeric, required } from "@vuelidate/validators";
import { reactive } from "vue";
import { translate } from "@/helpers/translate";
import { nanoid } from "nanoid";
import { useProductStore } from "@/stores/productsStore";

const productStore = useProductStore();
const state = reactive({
  name: "",
  link: "",
  price: "",
  description: "",
});

const rules = {
  name: { required },
  link: { required },
  price: { required, numeric },
};
const v$ = useVuelidate(rules, state);

function clearForm() {
  state.name = "";
  state.link = "";
  state.price = "";
  state.description = "";
}

async function submitForm() {
  const isFormCorrect = await v$.value.$validate();
  if (!isFormCorrect) return;
  const newProduct = {
    id: nanoid(),
    name: state.name,
    link: state.link,
    description: state.description,
    price: state.price,
  };
  productStore.addProduct(newProduct);
  clearForm();
  v$.value.$reset();
}
</script>

<style scoped lang="scss">
.form {
  background: var(--color-floral-white);
  box-shadow: 0 20px 30px rgba(white, 0.04), 0 6px 10px rgba(white, 0.02);
  border-radius: 4px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  position: sticky;
  top: 0;

  @media screen and (max-width: 767px) {
    position: static;
  }

}

.form__field {
}

label {
  font-family: var(--font);
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: var(--color-gun-powder);
  display: block;
  width: fit-content;
  margin-bottom: 4px;
}

input {
  font-family: var(--font);
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.2;
  color: var(--color-eclipse);
  background: var(--color-floral-white);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding-left: 16px;
  width: 100%;
  height: 36px;
  border: 1px solid transparent;

  &.error {
    border: 1px solid var(--color-light-coral);
  }

  &:focus{
    outline: none;
    border: 1px solid var(--color-amulet);
  }

  &::placeholder {
    color: var(--color-pink-swan);
  }
}

.form__submit {
  font-family: var(--font-inter);
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.2;
  text-align: center;
  letter-spacing: -0.02em;
  background-color: var(--color-amulet);
  color: white;
  width: 100%;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: none;
  cursor: pointer;

  &:disabled:not(:hover),
  &:disabled:not(:focus) {
    background: var(--color-whisper-2);
    border-radius: 10px;
    color: var(--color-pink-swan);
    cursor: default;
  }
}

.form__error-massage {
  color: var(--color-light-coral);
  font-family: var(--font);
  font-weight: 400;
  font-size: 8px;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

textarea {
  width: 100%;
  height: 108px;
  overflow: auto;
  font-family: var(--font);
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.2;
  color: var(--color-eclipse);
  background: var(--color-floral-white);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 10px 16px;
  resize: none;
  border: 1px solid transparent;

  &::placeholder {
    color: var(--color-pink-swan);
  }
  &:focus{
    outline: none;
    border: 1px solid var(--color-amulet);
  }
}

.required {
  position: relative;
  padding-right: 6px;

  &::after {
    content: "";
    width: 4px;
    height: 4px;
    background-color: var(--color-light-coral);
    border-radius: 50%;
    right: 0;
    top: 0;
    display: block;
    position: absolute;
  }
}
</style>
