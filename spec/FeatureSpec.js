'use strict';

describe('Feature Test:', function(){
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane();
    airport = new Airport(10);
  });

  it('planes can be instructed to land at an airport', function(){
    plane.land(airport);
    expect(airport.planes).toContain(plane);
  });

  it('planes can be instructed to takeoff from the airport', function() {
    plane.takeoff(airport);
    expect(airport.planes).not.toContain(plane);
  });

  it('confirms the takeoff', function() {
    plane.land(airport);
    plane.takeoff(airport);
    expect(airport.takeoffConfirm(plane)).toEqual("This plane is not on this airport")
  });

  it('says the plane is in the airport', function() {
    plane.land(airport);
    expect(airport.takeoffConfirm(plane)).toEqual("This plane is still in the airport")
  });

});
