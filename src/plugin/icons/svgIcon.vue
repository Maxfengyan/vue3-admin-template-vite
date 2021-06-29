  <template>
  <svg :class="svgClass" :style="{ color: color }">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
import { defineComponent, computed } from "vue";
export default defineComponent({
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
    return {
      iconName,
      svgClass,
    };
  },
});
</script>

<style lang='stylus'>
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  vertical-align: middle;
}
</style>