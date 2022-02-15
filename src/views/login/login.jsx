import { defineComponent, reactive, ref } from "vue";
import style from "@/style/modules/login.module.scss";
const Login = defineComponent({
  name: "Login",
  setup() {
    const loginForm = ref(0);
    const rules = {
      account: [{ required: true, message: "请输入登录账号", trigger: "blur" }],
      password: [{ required: true, message: "请输入密码", trigger: "blur" }],
    };
    const state = reactive({
      userInfo: {
        account: "",
        password: "",
      },
    });
    return () => {
      return (
        <div class={style.login_container}>
          <el-form ref={loginForm} model={state.userInfo} rules={rules} label-width="80px">
            <el-form-item prop={state.userInfo.account}>
              {/* <i class="login-user el-icon-user-solid"></i> */}
              {state.userInfo.account}
              <el-input v-model={state.userInfo.account} autocomplete="off" placeholder="用户名" />
            </el-form-item>
          </el-form>
        </div>
      );
    };
  },
});

export default Login;
