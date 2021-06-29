import epgmsRequest from "../index";

export const logout = () => {
  return epgmsRequest({
    url: "/account/logout.json",
    method: "get",
  });
};
