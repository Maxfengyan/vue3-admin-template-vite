<template>
  <div id="login-container">
    <el-form
      ref="loginForm"
      :model="userInfo"
      :rules="rules"
      class="login-form"
      label-width="80px"
    >
      <h2 class="login-title">{{ systemName }}</h2>
      <el-form-item prop="account">
        <el-icon class="login-user"><User /></el-icon>
        <el-input
          v-model="userInfo.account"
          autocomplete="off"
          placeholder="用户名"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-icon class="login-user"><Lock /></el-icon>
        <el-input
          v-model="userInfo.password"
          @keyup.enter="login"
          :type="switchText"
          placeholder="密码"
          autocomplete="off"
        ></el-input>
        <svg-icon
          class="eye"
          :name="switchIcon"
          color="#889aa4"
          @click="switchStatus"
        />
      </el-form-item>
      <el-button
        @click="login"
        type="primary"
        size="large"
        :loading="loading"
        >登录</el-button
      >
      <div class="version">版本号：{{ version }}</div>
      <div class="version" style="margin-top: -10px">
        账号：any &nbsp;&nbsp;&nbsp;&nbsp;密码：any
      </div>
    </el-form>
  </div>
</template>

<script>
// import globalProperty from "@/mixin/global";
import { login } from "@/api/epgms/account/login";
import { ElMessage } from "element-plus";
import bgColor from "@/mixin/global";
export default {
  // mixins: [globalProperty],
  data() {
    return {
      // backgroundColor: this.bgColor,
      passwordStatus: true,
      version: import.meta.env.VITE_VERSION,
      systemName: import.meta.env.VITE_SYSTEM_NAME,
      loading: false,
      switchText: "password",
      switchIcon: "eye",
      userInfo: {
        account: "",
        password: "",
      },
      rules: {
        account: [
          {
            required: true,
            message: "请输入登录账号",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
        ],
      },
    };
  },
  watch: {
    passwordStatus(newValue) {
      if (newValue) {
        this.switchText = "password";
        this.switchIcon = "eye";
      } else {
        this.switchText = "text";
        this.switchIcon = "eye-open";
      }
    },
  },
  methods: {
    // 登录
    login() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("LoginAction", {
              account: this.userInfo.account,
              password: this.userInfo.password,
            })
            .then((res) => {
              this.loading = false;
              this.$router.push("/");
            })
            .catch((err) => {
              ElMessage.error(err.message);
              this.loading = false;
            });
        }
      });
    },
    // 显示密码
    switchStatus() {
      this.passwordStatus = !this.passwordStatus;
    },
  },
};
</script>

<style lang="stylus">
@import '../../stylus/variables.styl';

#login-container {
  width: 100vw;
  height: 100vh;
  background: $backgroundColor;
}

.login-form {
  width: 520px;
  padding: 233px 35px 0;
  margin: 0 auto;
  box-sizing: border-box;
}

.login-title {
  color: #fff;
  text-align: center;
  margin-bottom: 40px;
}

.el-form-item {
  border: 1px solid hsla(0, 0%, 100%, 0.1);
  background: rgba(0, 0, 0, 0.1);
  color: #454545;
  border-radius: 5px;
}

#login-container input{
  background: transparent !important;
  outline: none;
  border: none;
  padding-left: 59px;
  color: #fff;
  height: 100%;
}
.el-input__wrapper  {
  background: transparent !important;
  box-shadow: none;
}
#login-container .el-input {
  height: 47px;
}

#login-container .el-form-item__content {
  position: relative;
  margin-left: 0 !important;
}

.login-user {
  position: absolute;
  font-size: 19px;
  color: #889aa4;
  left: 16px;
  top: 13px;
}

#login-container button {
  width: 100% !important;
  margin-top: 10px;
}

.eye {
  position: absolute;
  right: 18px;
  top: 16px;
  cursor: pointer;
  font-size: 16px;
}

.version {
  padding: 15px 0px;
  margin: 15px 0 0 0;
  color: #a6a6a6;
  font-size: 13px;
  // font-weight: bold;
}
</style>
