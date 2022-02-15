import { defineComponent } from "vue";

const App = defineComponent({
  name: "App",
  setup() {
    return () => {
      return <router-view />;
    };
  },
});

export default App;
