export const appColors = {
  primaryPro: '#00AAAC',
  primary: '#2A9D8F',
  secondary: '#264653',
  warning: '#F67C5D',
  white: '#FFFFFF',
  dark: '#000000',
  subText: '#333',
};


export const mergeObjects = array => {
  return array.reduce((acc, obj) => {
    Object.keys(obj).forEach(key => {
      if (!acc[key]) {
        acc[key] = [];
      }

      if (Array.isArray(obj[key])) {
        acc[key].push(...obj[key]);
      } else {
        acc[key].push(obj[key]);
      }
    });

    return acc;
  }, {});
};
