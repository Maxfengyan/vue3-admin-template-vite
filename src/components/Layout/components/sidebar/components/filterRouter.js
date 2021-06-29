export default (children = []) => {
  const filterChildren = children.filter((item) => {
    if (!item.hidden) {
      return true;
    }
  });
  return filterChildren;
};
