import { computed } from "vue";
import { useStore } from "vuex";

// 处理侧边栏收缩
const handleCollapsed = () => {
  const store = useStore();

  // 获取侧边栏收缩值
  const getCollapsedValue = () => {
    const collapsed = computed(() => {
      return store.getters.collapsed;
    });
    return collapsed.value;
  };
  return { getCollapsedValue };
};

export default handleCollapsed;
