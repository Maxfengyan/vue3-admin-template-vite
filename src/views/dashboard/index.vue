<template>
  <div class="dashboard">
    <img :src="welcome" />
  </div>
</template>

<script>
import welcome from "@/assets/welcome.png";
export default {
  setup() {
    return {
      welcome,
    };
  },
};
</script>

<style scoped>
.dashboard {
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>
