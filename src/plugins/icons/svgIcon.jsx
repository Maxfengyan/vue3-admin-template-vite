import { defineComponent, computed } from "vue";
import style from "./svgIcon.module.scss";
const SvgPlugin = defineComponent({
  name: "SvgPlugin",
  props: {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "",
    },
    class: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const iconName = computed(() => `#icon-${props.name}`);
    /* const svgClass = computed(() => {
      if (props.name) {
        return `svg-icon icon-${props.name}`;
      } 
      return "svg-icon";
    });*/
    return () => {
      return (
        <svg
          class={style.svg_icon + " " + props.class}
          style={{ color: props.color }}
        >
          <use xlink:href={iconName.value} />
        </svg>
      );
    };
  },
});
export default SvgPlugin;
