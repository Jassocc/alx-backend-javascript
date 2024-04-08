export default function appendToEachArrayValue(array, appendString) {
  const idx = [];
  for (const value of array) {
    idx.push(appendString + value);
  }

  return idx;
}
