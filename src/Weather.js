function Weather() {
  this.status = 'sunny'
}

Weather.prototype.random = function () {
  var number = Math.floor((Math.random() * 10 ) + 1);
  if (number === 4) {
    return 'stormy';
  } else {
    return 'sunny';
  }
};
