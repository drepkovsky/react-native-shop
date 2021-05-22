/**
 *
 * @param str string to trim
 * @param len len of string to keep
 *
 * Hello World,5 => Hello...
 *
 */
export const strTrim = (str: string, len: number) => {
  let result = str.substr(0, len);
  return result + "...";
};
