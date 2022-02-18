import { defineComponent } from "vue";
import style from "../Sidebar.module.scss";
const Title = defineComponent({
  name: "Title",
  setup() {
    return () => {
      return (
        <div class={style.sidebar_container_logo}>
          <svg-icon name="settings" />
          <h3>{import.meta.env.VITE_SYSTEM_NAME}</h3>
        </div>
      );
    };
  },
});
export default Title;
