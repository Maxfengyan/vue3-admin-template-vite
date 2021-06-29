const title = import.meta.env.VITE_SYSTEM_NAME;

export default (pageTitle) => {
  return pageTitle ? `${pageTitle} - ${title}` : `${title}`;
};
