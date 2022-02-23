import { NButton, NForm, NFormItem, NInput, NDropdown } from "naive-ui";
const NaiveUi = (app) => {
  app.component("NButton", NButton);
  app.component("NForm", NForm);
  app.component("NFormItem", NFormItem);
  app.component("NInput", NInput);
  app.component("NDropdown", NDropdown);
};
export default NaiveUi;
