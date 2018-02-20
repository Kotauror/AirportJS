function Airport(capacity = 5) {
  this.capacity = capacity
  this._planes = []
  this._weather = new Weather()
}

Airport.prototype.takeoffConfirm = function(plane) {
  if (!(this._planes.includes(plane))) {
    return "This plane is not on this airport";
  } else  {
    return "This plane is still in the airport";
  }
}

Airport.prototype.hasPlaces = function () {
  if (this._planes.length < this.capacity) {
    return true;
  } else {
    return false;
  }
}

Airport.prototype.hasPlane = function(plane) {
  if (this._planes.includes(plane)) {
    return true;
  } else {
    return false;
  }
};
