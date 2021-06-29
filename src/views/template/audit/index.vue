<template>
  <div>
    <h1>{{ route }}</h1>
    <span>{{ manage }}</span>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { manageAdd } from "@/api/other/manage/add";
export default {
  setup() {
    const route = useRoute().path;
    const manage = ref("");

    manageAdd().then((res) => {
      manage.value = res.resultMessage;
    });
    return {
      route,
      manage,
    };
  },
};
</script>

<style>
</style>