export default (app) => {
  app.directive("focus", {
    mounted(el, binding) {
      el.focus();
    },
  });
};
