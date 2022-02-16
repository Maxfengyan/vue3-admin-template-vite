import { defineComponent } from "vue";

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
  },
  setup(props) {
    const iconName = computed(() => `#icon-${props.name}`);
    const svgClass = computed(() => {
      /* if (props.name) {
        return `svg-icon icon-${props.name}`;
      } */
      return "svg-icon";
    });
    return () => {
      return (
        <svg class={svgClass} style={{ color: color }}>
          <use xlink:href={iconName} />
        </svg>
      );
    };
  },
});
export default SvgPlugin;
