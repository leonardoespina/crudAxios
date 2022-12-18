import { inject, watchEffect } from "vue";
import apiAxios from "../helper/axios";
const api = () => {
  const state = inject("state");

  const stateApi = (states) => {
    if (states) {
      return state.value[states];
    }
  };
  //////if ////////
  const post = async (url, options, id) => {
    if (id) {
      url = `${url}${id}`;
    }
    state.value.loading = true;
    await apiAxios(url, options)
      .then((res) => {
        watchEffect(() => {
          if (options.data || res.data.message) {
            setTimeout(() => {
              state.value.msg = "";
            }, 2000);
            state.value.msg = res.data.message;
            state.value.loading = false;
          } else if (id) {
            console.log(options);
            if (options.method === "DELETE") {
              state.value.msg = res.data.message;
              state.value.loading = false;
            } else {
              state.value.dataRes = res.data;
            }
          } else {
            state.value.data = res.data;
            state.value.loading = false;
          }
        });
      })
      .catch((error) => {
        state.value.msg = error.response.statusText;
        state.value.loading = false;
      })
      .finally(() => (state.value.loading = false));
  };

  return {
    post,
    stateApi,
  };
};

export default api;
