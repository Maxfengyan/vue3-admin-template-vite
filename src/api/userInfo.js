import { vue3Request } from "./index";

export const userInfo = (data) => {
  return vue3Request({
    url: "/userInfo.json",
    method: "get",
    params: data,
  });
};
