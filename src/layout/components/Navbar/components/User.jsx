import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { removeToken } from "@/core/auth.js";
import style from "../Navbar.module.scss";
const User = defineComponent({
  name: "User",
  setup() {
    const router = useRouter();
    const options = [
      {
        label: "个人信息",
        key: "person",
      },
      {
        label: "回到主页",
        key: "back",
      },
      {
        label: "退出",
        key: "logout",
      },
    ];
    const handleSelect = (key) => {
      if (key === "person") {
      } else if (key === "back") {
        router.push({ name: "Index" });
      } else {
        removeToken();
        router.push({ name: "Login" });
      }
    };
    return () => {
      return (
        <n-dropdown trigger="hover" options={options} onSelect={(key) => handleSelect(key)}>
          <div class={style.userInfo}>
            <svg-icon name="user-info" class={style.userInfo_avatar} />
            <span>admin</span>
            <svg-icon name="arrow-down" class={style.userInfo_arrow} />
          </div>
        </n-dropdown>
      );
    };
  },
});
export default User;
