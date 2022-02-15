const rules = {
  account: [
    {
      required: true,
      trigger: ["input", "blur"],
      validator(rule, value) {
        if (!value) {
          return new Error("请输入账号");
        }
        return true;
      },
    },
  ],
  password: [
    {
      required: true,
      message: "请输入密码",
      trigger: ["input", "blur"],
    },
  ],
};

export default rules;
