import { NButton, NForm, NFormItem, NInput } from "naive-ui";
const NaiveUi = (app) => {
  app.component("NButton", NButton);
  app.component("NForm", NForm);
  app.component("NFormItem", NFormItem);
  app.component("NInput", NInput);
};
export default NaiveUi;
