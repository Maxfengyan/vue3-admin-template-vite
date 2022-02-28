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
      console.log(props.collapsedValue);
      // {import.meta.env.VITE_SYSTEM_NAME}
      return (
        <div class={style.sidebar_container_logo}>
          <svg-icon name="settings" />
          {!props.collapsedValue ? <h3>EPG管理系统EPG管理系统EPG管理系统EPG管理系统EPG管理系统</h3> : null}
        </div>
      );
    };
  },
});
export default Title;
