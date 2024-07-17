export const getSubdomain = () => {
  const hostname = window.location.hostname;
  const hostnameSplit = hostname.split('.');
  return hostnameSplit.length > process.env.REACT_APP_HOSTNAME_PARTS ? hostnameSplit[0] : '';
};

export const isExternalViewer = () => {
  const subdomain = getSubdomain();
  return !!subdomain;
};
