const cars = [];
function carPassing(cars, speed) {
  cars.push({
    time: Date.now(),
    speed: speed
  })
  return cars;
}
