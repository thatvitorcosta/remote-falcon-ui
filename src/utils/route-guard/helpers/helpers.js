export const getSubdomain = () => {
  const hostname = window.location.hostname;
  const hostnameSplit = hostname.split('.');
  return hostnameSplit[0];
};

export const isExternalViewer = () => {
  const subdomain = getSubdomain();
  return subdomain === process.env.REACT_APP_EXTERNAL_DOMAIN_NAME;
};
