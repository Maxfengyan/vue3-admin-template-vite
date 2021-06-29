import epgmsRequest from "../index";

export const login = (data) => {
  return epgmsRequest({
    url: "/account/login.json",
    method: "post",
    data,
  });
};
