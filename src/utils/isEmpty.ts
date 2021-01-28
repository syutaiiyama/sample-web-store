export const isEmpty = (str: string): boolean => {
  if (!str) {
    return true;
  }
  return str === "";
};

export const isTelFilled = (str: string): boolean => {
  if (!str) {
    return true;
  }
  return str.length < 9 || str.length > 11;
};

export const isPostalCodeFilled = (str: string): boolean => {
  if (!str) {
    return true;
  }
  return str.length < 7;
};
