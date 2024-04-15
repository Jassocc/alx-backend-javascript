function cleanSet(set, startString) {
  if ((set instanceof Set) && (typeof startString === 'string')) {
    let arr = Array.from(set);
    const newArr = startString.length;
    arr = arr.filter((oldArr) => typeof oldArr === 'string' && oldArr[0] === startString[0] && oldArr.startsWith(startString));
    return arr.map((str) => str.substring(newArr)).join('-');
  }
  return '';
}
export default cleanSet;
