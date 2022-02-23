import { defineComponent, reactive } from "vue";
import { NBreadcrumb, NBreadcrumbItem } from "naive-ui";
import { useRoute } from "vue-router";
import breadUiCss from "../changeNaiveCss";
const Bread = defineComponent({
  name: "Bread",
  components: {
    NBreadcrumb,
    NBreadcrumbItem,
  },
  setup() {
    const route = useRoute();
    const state = reactive({
      mached: [],
    });
    state.mached = route.matched.filter((item) => {
      return item.meta && item.meta.title;
    });

    return () => {
      return (
        <n-breadcrumb style={breadUiCss.breadcolor}>
          {state.mached.map((item) => {
            return <n-breadcrumb-item href={item.path}>{item.meta.title}</n-breadcrumb-item>;
          })}
        </n-breadcrumb>
      );
    };
  },
});
export default Bread;
