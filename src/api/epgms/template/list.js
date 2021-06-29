import epgmsRequest from "../index";

export const getList = (data) => {
  return epgmsRequest({
    url: "/template/list.json",
    method: "get",
    data,
  });
};
