import { defineComponent } from "vue";
import welcome from "@/assets/welcome.png";
const Index = defineComponent({
  name: "Index",
  setup() {
    return () => {
      return <img src={welcome} alt="welcome" title="welcome" />;
    };
  },
});

export default Index;
