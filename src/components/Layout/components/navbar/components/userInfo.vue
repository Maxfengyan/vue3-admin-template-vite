<template>
  <div class="avatar-container">
    <el-dropdown @command="handleCommand">
      <div class="el-dropdown-link">
        <svg-icon name="user" class="acatar-icon" />
        <span>{{ userName }} </span>
        <i class="el-icon-caret-bottom" />
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="personInfo" divided
            >个人信息</el-dropdown-item
          >
          <el-dropdown-item command="logout" divided>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const userName = store.getters.userName;
    const handleCommand = (command) => {
      if (command === "personInfo") {
      } else {
        // logout
        store.dispatch("Logout").then(() => {
          router.push("/login");
        });
      }
    };
    return {
      userName,
      handleCommand,
    };
  },
};
</script>

<style lang="stylus" scoped>
.avatar-container {
  display: inline-block;
  position: absolute;
  right: 20px;
  top: 14px;
  box-sizing: content-box;
  cursor: pointer;
}

.acatar-icon {
  font-size: 25px;
}

.el-dropdown-link {
  & * {
    vertical-align: bottom;
  }

  & span {
    vertical-align: bottom;
    font-weight: bold;
    font-size: 13px;
    padding: 0 0 0 5px;
  }

  i {
    vertical-align: bottom;
  }
}
</style>