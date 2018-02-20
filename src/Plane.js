'use strict';

function Plane() {
  this.status = "flying"
}

Plane.prototype.land = function(airport) {
  if (airport.hasPlaces() && this.status === "flying" && !airport._weather.isStormy()) {
    airport.clearLanding(this);
    this.status = "at_airport";
  }
}

Plane.prototype.takeoff = function(airport) {
  if (airport.hasPlane(this) && this.status === "at_airport" && !airport._weather.isStormy()) {
    airport.clearTakeoff(this);
    this.status = "flying";
  }
}
