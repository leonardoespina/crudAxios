<template>
  <tbody>
    <tr v-for="data in datas" :key="data.id">
      <td>{{ data.id }}</td>
      <td>{{ data.nombreCurso }}</td>
      <td>
        <button @click="accion('GET', urlUpdate, data.id)">Editar</button>
        <button @click="accion('DELETE', `/api/curso/`, data.id)">
          Eliminar
        </button>
      </td>
    </tr>
  </tbody>
</template>
<script>
import api from "../composable/crud";
import { ref, watchEffect } from "vue";
export default {
  setup() {
    const { post, stateApi } = api();
    let url = "/api/curso/All";
    let urlUpdate = "/api/curso/";
    let options = {
      method: "POST",
    };
    // const data = inject("state");
    const datas = ref({});
    post(url, options);
    watchEffect(() => {
      datas.value = stateApi("data");
    });
    const accion = async (accion, urls, id) => {
      console.log(accion, url);
      let optionsPut = {
        method: accion,
      };
      await post(urls, optionsPut, id);
      await post(url, options);
    };

    return { datas, accion, urlUpdate };
  },
};
</script>
