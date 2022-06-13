<template>
  <form action="" class="form" @submit.prevent="submitForm">
    <div class="form__field">
      <label for="name" class="required">Наименование товара</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Введите наименование товара"
        v-model="state.name"
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
      >
      </textarea>
    </div>
    <div class="form__field">
      <label for="link">Ссылка на изображение товара</label>
      <input
        v-model="state.link"
        type="text"
        name="link"
        id="link"
        placeholder="Введите ссылку"
      />
      <small
        class="form__error-massage"
        v-for="error in v$.link.$errors"
        :key="error.$uid"
        >{{ translate[error.$message] }}</small
      >
    </div>
    <div class="form__field">
      <label for="price">Цена товара</label>
      <input
        v-model="state.price"
        type="text"
        name="price"
        id="price"
        placeholder="Введите цену"
      />
      <small
        class="form__error-massage"
        v-for="error in v$.price.$errors"
        :key="error.$uid"
        >{{ translate[error.$message] }}</small
      >
    </div>
    <button
      type="submit"
      class="form__submit"
      :disabled="v$.$errors.length > 0"
    >
      Добавить товар
    </button>
  </form>
</template>

<script setup>
import useVuelidate from "@vuelidate/core";
import { numeric, required } from "@vuelidate/validators";
import { reactive } from "vue";
import { translate } from "@/helpers/translate";

const state = reactive({
  name: "",
  link: "",
  price: "",
});

const rules = {
  name: { required },
  link: { required },
  price: { required, numeric },
};
const v$ = useVuelidate(rules, state);

async function submitForm() {
  console.log(v$.value);
  const isFormCorrect = await v$.value.$validate();

  if (!isFormCorrect) return;

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
  border: none;
  width: 100%;
  height: 36px;

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
  padding-left: 16px;
  border: none;
  resize: none;

  &::placeholder {
    color: var(--color-pink-swan);
  }
}
</style>
