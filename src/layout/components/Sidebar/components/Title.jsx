import { defineComponent } from "vue";
import style from "../Sidebar.module.scss";
const Title = defineComponent({
  name: "Title",
  props: {
    collapsedValue: {
      type: Boolean,
      required: true,
    },
  },
  setup(props) {
    return () => {
      return (
        <div class={style.sidebar_container_logo}>
          <svg-icon name="settings" />
          {!props.collapsedValue ? <h3>{import.meta.env.VITE_SYSTEM_NAME}</h3> : null}
        </div>
      );
    };
  },
});
export default Title;
