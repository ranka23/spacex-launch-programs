export default (): string[] => {
  const arr = [];
  let str;

  for (let i = 0; i < 15; i += 1) {
    str = (2006 + i).toString();
    arr.push(str);
  }
  return arr;
};
