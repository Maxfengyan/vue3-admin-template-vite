<template>
  <svg-icon v-if="icon" :name="icon" />
  <span style="user-select: none">{{ title }}</span>
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
