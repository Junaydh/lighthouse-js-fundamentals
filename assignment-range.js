function range(start, end, step) {
  if (start === undefined || end === undefined || step === undefined) {
    return [];
  } else if (start > end) {
    return [];
  } else if (step <= 0) {
    return [];
  }
  let out = [];
  let temp = start;
  out.push(start);
  while ((temp + step <= end)) {
    temp += step;
    out.push(temp);
  }
  return out;
}
