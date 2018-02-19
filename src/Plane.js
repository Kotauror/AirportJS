function Plane() {
}

Plane.prototype.land = function(airport) {
  if (airport._planes.length < airport.capacity ) {
    airport._planes.push(this);
  }
}

Plane.prototype.takeoff = function(airport) {
  if (airport._planes.includes(this)) {
    airport._planes.pop(this);
  }
}
