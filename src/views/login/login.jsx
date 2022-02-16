import { defineComponent, reactive, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { useDialog } from "naive-ui";
import rules from "./validator";
import LoginUiCss from "./changeNaiveCss";
import style from "@/style/modules/login.module.scss";
const Login = defineComponent({
  name: "Login",
  setup() {
    const store = useStore();
    const router = useRouter();
    const formRef = ref(null);
    const dialog = useDialog();
    const state = reactive({
      model: {
        account: "",
        password: "",
        buttonStatus: false,
      },
    });

    const login = () => {
      formRef.value.validate((errors) => {
        if (!errors) {
          state.buttonStatus = true;
          store
            .dispatch("LoginAction", {
              account: state.model.account,
              password: state.model.password,
            })
            .then((res) => {
              state.buttonStatus = false;
              //跳转到默认页
              router.push({ name: "Index" });
            })
            .catch((err) => {
              state.buttonStatus = false;
              dialog.error({
                title: "提示",
                content: err,
                positiveText: "确认",
                onPositiveClick: () => {
                  // 回调执行一些操作，比如清除密码或者账号
                },
              });
            });
        }
      });
      /*  */
    };
    return () => {
      return (
        <div class={style.login_container}>
          <n-form class={style.login_form} model={state.model} ref={formRef} rules={rules}>
            <h2 class={style.login_title}>XXX管理系统</h2>
            <n-form-item path="account">
              <n-input
                value={state.model.account}
                onInput={(e) => {
                  state.model.account = e;
                }}
                clearable
                class={style.login_input}
                style={LoginUiCss.loginInput}
                placeholder="请输入账号"
                input-props={{ autocomplete: "off" }}
              />
            </n-form-item>

            <n-form-item path="password" style="margin-top: -20px;">
              <n-input
                value={state.model.password}
                onInput={(e) => {
                  state.model.password = e;
                }}
                class={style.login_input}
                style={LoginUiCss.loginInput}
                input-props={{ autocomplete: "new-password" }}
                type="password"
                clearable
                placeholder="请输入密码"
                show-password-on="mousedown"
              />
            </n-form-item>
            <n-button loading={state.buttonStatus} block color="#409eff" size="large" style="margin-top: 15px;" onClick={() => login()}>
              登录
            </n-button>
          </n-form>
        </div>
      );
    };
  },
});

export default Login;
