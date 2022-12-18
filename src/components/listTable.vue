<template>
  <div>
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>CURSO</th>
          <th>ACCIONES</th>
        </tr>
      </thead>

      <Row />
    </table>
  </div>
</template>
<script>
import Row from "../components/row.vue";
export default {
  components: {
    Row,
  },
  setup() {},
};
</script>
