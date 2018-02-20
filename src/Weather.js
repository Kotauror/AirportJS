function Weather() {
  this.status = "sunny"
}

Weather.prototype.random = function () {
  output = Math.random() * 10
  return Math.floor(output);
};

Weather.prototype.isStormy = function () {
  if (this.random() === 1) {
    return true;
  } else {
    return false;
  }
};
