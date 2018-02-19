function Plane() {
}

Plane.prototype.land = function(airport) {
  if (airport.planes.length < airport.capacity ) {
    airport.planes.push(this);
  }
}

Plane.prototype.takeoff = function(airport) {
  if (airport.planes.includes(this)) {
    airport.planes.pop(this);
  }
}
