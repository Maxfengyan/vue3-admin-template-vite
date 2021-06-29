const globalProperty = {
  computed: {
    bgColor() {
      return this.$store.getters.bgColor;
    },
  },
  watch: {
    bgColor(newValue) {
      this.backgroundColor = newValue;
    },
  },
};

export default globalProperty;
