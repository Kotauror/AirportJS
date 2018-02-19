function Airport(capacity) {
  this.capacity = capacity
  this.planes = []
}

Airport.prototype.land = function(plane) {
  if (this.planes.length < this.capacity ) {
    this.planes.push(plane);
  }
}

Airport.prototype.takeoff = function(plane) {
  if (this.planes.includes(plane)) {
    this.planes.pop(plane);
  }
}


// var airport = new Airport(10);
