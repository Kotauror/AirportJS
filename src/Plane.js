function Plane() {
  this.status = "flying"
}

Plane.prototype.land = function(airport) {
  if (airport._planes.length < airport.capacity && this.status === "flying") {
    airport._planes.push(this);
    this.status = "at_airport";
  }
}

Plane.prototype.takeoff = function(airport) {
  if (airport._planes.includes(this) && this.status === "at_airport") {
    airport._planes.pop(this);
    this.status = "flying";
  }
}
