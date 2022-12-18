import axios from "axios";

const controller = new AbortController();

const apiAxios = async (url, { method, data }) => {
  setTimeout(() => {
    controller.abort();
  }, 1000);
  return await axios({
    url,
    method,
    data,
    headers: { authorization: "adsasdasda4sd6a4sd646a4ds" },
    signal: controller.signal,
  });
};

export default apiAxios;
