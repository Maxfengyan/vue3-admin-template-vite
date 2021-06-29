<template>
  <div>
    <h1>{{ route }}</h1>
    <span>{{ data }}</span>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import { getList } from "@/api/epgms/template/list";
import { useRoute } from "vue-router";
export default {
  setup() {
    let data = ref([]);
    let route = useRoute().path;

    // ajax
    getList().then((res) => {
      data.value = res.data;
    });

    return { data, route };
  },
};
</script>

<style>
</style>