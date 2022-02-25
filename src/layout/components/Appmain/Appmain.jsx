import { defineComponent, Transition } from "vue";
import style from "./Appmain.module.scss";
const Appmain = defineComponent({
  name: "Appmain",
  setup() {
    return () => {
      return (
        <section class={style.app_main}>
          <router-view
            v-slots={{
              default: (scope) => (
                <Transition name="fade-transform" mode="out-in">
                  {scope.Component}
                </Transition>
              ),
            }}
          />
        </section>
      );
    };
  },
});
export default Appmain;
