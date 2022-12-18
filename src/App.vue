<template>
  <router-view />
</template>
<script>
import { provide, ref, watchEffect } from "vue";

export default {
  setup() {
    const state = ref({
      loading: false,
      msg: null,
      data: [],
      dataRes: [],
    });

    provide("state", state);
    watchEffect(() => {
      state.value;
    });
  },
};
</script>
