function cleanSet(set, startString) {
  const values = Array.from(set);
  const filteredValues = values.filter((value) => value.startsWith(startString));
  const cleanedValues = filteredValues.map((value) => value.substring(startString.length));
  return cleanedValues.join('-');
}
export default cleanSet;
