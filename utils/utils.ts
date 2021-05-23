/**
 *
 * @param str string to trim
 * @param len len of string to keep
 *
 * Trims string to given length and appends three dots
 * Hello World,5 => Hello...
 *
 */
export const strTrim = (str: string, len: number) => {
  let result = str.substr(0, len);
  if (result !== str) {
    result = result + "...";
  }
  return result;
};

/**
 *
 * @param obj obj to remap
 * @param prefix prefix to add
 *
 * Adds prefix to each key in object
 *
 */
export const prefixObjProperties = (
  obj: { [key: string]: any },
  prefix: string
) => {
  const result: { [key: string]: any } = {};

  Object.keys(obj).forEach((key) => {
    result[`${prefix}${key}`] = obj[key];
  });

  return result;
};
