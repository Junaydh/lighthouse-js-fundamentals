function lastIndexOf(array, x) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === x) {
      return i;
    }
  }
  return -1
}