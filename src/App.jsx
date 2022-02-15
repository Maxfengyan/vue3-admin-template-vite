import { defineComponent } from "vue";
import { NConfigProvider, NDialogProvider, zhCN, dateZhCN } from "naive-ui";
const App = defineComponent({
  name: "App",
  components: {
    NConfigProvider,
    NDialogProvider,
  },
  setup() {
    return () => {
      return (
        <n-config-provider locale={zhCN} date-locale={dateZhCN}>
          <n-dialog-provider>
            <router-view />
          </n-dialog-provider>
        </n-config-provider>
      );
    };
  },
});

export default App;
