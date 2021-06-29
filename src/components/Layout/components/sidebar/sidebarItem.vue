<template>
  <!-- 只有一个导航 && 无嵌套 && 不是总是展开情况 -->
  <template
    v-if="
      hasOneShowingChild(item.children, item) &&
      (!onlyOneChild.children || onlyOneChild.noShowingChildren) &&
      !item.alwaysShow
    "
  >
    <el-menu-item
      :index="resolvePath(onlyOneChild.path)"
      :class="{ 'submenu-title-noDropdown': !isNest }"
      @click="jump(onlyOneChild.path)"
    >
      <item
        v-if="onlyOneChild.meta"
        :icon="onlyOneChild.meta.icon || (item.meta && item.meta.icon)"
        :title="onlyOneChild.meta.title"
      />
    </el-menu-item>
  </template>

  <!-- 嵌套情况 -->
  <el-submenu
    v-else
    :index="resolvePath(onlyOneChild.path)"
    popper-append-to-body
    class="nest-menu"
  >
    <template #title>
      <item
        v-if="item.meta"
        :icon="item.meta && item.meta.icon"
        :title="item.meta.title"
      />
    </template>
    <sidebar-item
      v-for="child in handleChildren(item.children)"
      :is-nest="true"
      :item="child"
      :base-path="resolvePath(child.path)"
    />
  </el-submenu>
</template>

<script>
import { defineComponent, ref } from "vue";
import Item from "./components/item.vue";
import handleChildren from "./components/filterRouter";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "SidebarItem",
  props: {
    item: {
      required: true,
      type: Object,
    },
    isNest: {
      type: Boolean,
      default: false,
    },
    basePath: {
      required: true,
      type: String,
    },
  },
  components: {
    Item,
  },
  setup(props) {
    const { basePath } = props;
    const router = useRouter();

    function isExternal(path) {
      return /^(https?:|mailto:|tel:)/.test(path);
    }

    let onlyOneChild = ref({});

    // 判断是否有子路由
    const hasOneShowingChild = (children = [], parent) => {
      // 筛选子路由children有多少个符合展示条件
      const showingChildren = children.filter((item) => {
        // 如果路由隐藏，则过滤掉
        if (item.hidden) {
          return false;
        } else {
          // 只有一个子路由的情况
          onlyOneChild.value = item;
          return true;
        }
      });
      if (showingChildren.length === 1) {
        return true;
      }

      if (showingChildren.length === 0) {
        onlyOneChild.value = { ...parent, path: "", noShowingChildren: true };
        return true;
      }
      return false;
    };

    // 组合路由地址
    const resolvePath = (routePath) => {
      return basePath + "/" + routePath;
    };

    const jump = (path) => {
      // url
      if (isExternal(path)) {
        window.location.href = path;
      } else {
        // route
        router.push(resolvePath(path));
      }
    };
    return {
      hasOneShowingChild,
      onlyOneChild,
      resolvePath,
      handleChildren,
      jump,
    };
  },
});
</script>

<style></style>
