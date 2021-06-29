import otherRequest from "../index";

export const manageAdd = (data) => {
  return otherRequest({
    url: "/manage/add.json",
    method: "get",
    data,
  });
};
