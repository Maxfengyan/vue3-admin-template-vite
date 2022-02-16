import { defineComponent, computed } from "vue";

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
    console.log(props.name);
    const iconName = computed(() => `#icon-${props.name}`);
    const svgClass = computed(() => {
      /* if (props.name) {
        return `svg-icon icon-${props.name}`;
      } */
      return "svg-icon";
    });
    return () => {
      return (
        <svg class={svgClass.value} style={{ color: props.color }}>
          <use xlink:href={iconName.value} />
        </svg>
      );
    };
  },
});
export default SvgPlugin;
