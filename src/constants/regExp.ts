export const checkStringToLatinAndNum =
  /^([A-Za-z]+[0-9]+|[0-9]+[A-Za-z]+|[A-Za-z]+[0-9]+[A-Za-z]+|[0-9]+[A-Za-z]+[0-9]+)+$/;
export const checkEmail = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
export const checkPhone = [
  "+",
  "3",
  "7",
  "5",
  " ",
  "(",
  /\d/,
  /\d/,
  ")",
  " ",
  /\d/,
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
  "-",
  /\d/,
  /\d/,
];
