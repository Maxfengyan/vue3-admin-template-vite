import { vue3Request } from "./index";

export const login = (data) => {
  return vue3Request({
    url: "/login.json",
    method: "get",
    params: data,
  });
};
