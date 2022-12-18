<template>
  <form @submit.prevent="save">
    <input
      type="text"
      placeholder="Ingrese Curso"
      v-model="model.nombreCurso"
    />
    <button type="submit">Guardar</button>
  </form>
</template>
<script>
import api from "../composable/crud";
import { ref, watchEffect } from "vue";
export default {
  setup() {
    const model = ref([]);
    const { post, stateApi } = api();
    let urlPost = "/api/curso";
    let urlAll = "api/curso/All";
    let urlEdit = "/api/curso/";
    const dataRes = ref([]);

    watchEffect(() => {
      dataRes.value = stateApi("dataRes");
      if (Object.keys(dataRes.value).length > 1) {
        Object.assign(model.value, dataRes.value);
      }
    });

    const save = async () => {
      let data = {
        nombreCurso: model.value.nombreCurso,
      };

      let options = {
        method: "POST",
        data,
      };
      console.log(dataRes.value);

      //if (dataRes.value > 0) {
      if (Object.keys(dataRes.value).length > 1) {
        options = {
          method: "PUT",
          data,
        };
        await post(urlEdit, options, dataRes.value.id);
      } else {
        await post(urlPost, options);
      }
      //     let dataRes = stateApi("dataRes");

      await post(urlAll, (options = { method: "POST" }));
    };

    return { model, save };
  },
};
</script>
