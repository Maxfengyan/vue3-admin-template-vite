import { NButton, NForm, NFormItem, NInput, NDropdown, NEllipsis } from "naive-ui";
const NaiveUi = (app) => {
  app.component("NButton", NButton);
  app.component("NForm", NForm);
  app.component("NFormItem", NFormItem);
  app.component("NInput", NInput);
  app.component("NDropdown", NDropdown);
  app.component("NEllipsis", NEllipsis);
};
export default NaiveUi;
