import epgmsRequest from "../index";

export const getUserInfo = (data) => {
  return epgmsRequest({
    url: "/account/getUserInfo.json",
    method: "post",
    data,
  });
};
