import { computed } from "vue";
import { useStore } from "vuex";

const handleCollapsed = () => {
  const store = useStore();

  const getCollapsedValue = () => {
    const collapsed = computed(() => {
      return store.getters.collapsed;
    });
    return collapsed.value;
  };
  return { getCollapsedValue };
};

export default handleCollapsed;
