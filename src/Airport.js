function Airport(capacity) {
  this.capacity = capacity
  this.planes = []
}

Airport.prototype.takeoffConfirm = function(plane) {
  if (!(this.planes.includes(plane))) {
    return "This plane is not on this airport";
  } else  {
    return "This plane is still in the airport";
  }
}
