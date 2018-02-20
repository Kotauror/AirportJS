function Plane() {
  this.status = "flying"
}

Plane.prototype.land = function(airport) {
  if (airport._planes.length < airport.capacity ) {
    airport._planes.push(this);
    this.status = "at_airport";
  }
}

Plane.prototype.takeoff = function(airport) {
  if (airport._planes.includes(this)) {
    airport._planes.pop(this);
    this.status = "flying";
  }
}
