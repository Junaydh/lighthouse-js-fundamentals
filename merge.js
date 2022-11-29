function merge(arr1, arr2) {
  let finalArr = arr1;
  if (arr2.length > 0) {
    for (let i = 0; i < arr2.length; i++) {
      finalArr.push(arr2[i]);
    }
    return finalArr.sort();
  }
  return finalArr.sort()
}
