function judgeVegetable(vegetables, metric) {
  let temp = 0;
  let index = 0;
  for (let i = 0; i < vegetables.length; i++) {
    if (vegetables[i][metric] > temp) {
      temp = vegetables[i][metric];
      index = i;
      console.log(temp)
    }
  }
  return vegetables[index].submitter;
}