<template>
  <div>
    <!---  Renderizado Condicional   ("-")   -->
    <Loading v-if="loading" />
    <Form />
    <Mensaje v-if="msg" :msg="msg" />
    <Tabla />
  </div>
</template>
<script>
import Mensaje from "../components/mensaje.vue";
import Loading from "../components/loading.vue";
import Tabla from "../components/listTable.vue";
import Form from "../components/form.vue";
import api from "../composable/crud";
//import api from "../helper/axios";
//import apiAxios from "../helper/axios";
import { watchEffect, ref } from "vue";
export default {
  components: {
    Tabla,
    Mensaje,
    Loading,
    Form,
  },
  setup() {
    // const state = inject("state");
    //  lista.value.loading = false;

    const { stateApi } = api();
    let msg = ref(""),
      loading = ref("");
    watchEffect(() => {
      msg.value = stateApi("msg");
      loading.value = stateApi("loading");
    });
    return { msg, loading };
  },
};
</script>
