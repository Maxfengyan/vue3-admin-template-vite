import { defineComponent } from "vue";
const Index = defineComponent({
  name: "Index",
  setup() {
    return () => {
      return <div>欢迎</div>;
    };
  },
});

export default Index;
