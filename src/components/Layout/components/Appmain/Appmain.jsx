import { defineComponent } from "vue";

const Appmain = defineComponent({
  name: "Appmain",
  setup() {
    return () => {
      return <router-view />;
    };
  },
});
export default Appmain;
