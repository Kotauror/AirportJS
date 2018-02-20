'use strict';

describe('Feature Test:', function() {

  var plane;
  var airport;
  var weather;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport(10);
    weather = new Weather();
  });

  it('planes can be instructed to land at an airport', function() {
    plane.land(airport);
    expect(airport._planes).toContain(plane);
  });

  it('planes can be instructed to takeoff from the airport', function() {
    plane.takeoff(airport);
    expect(airport._planes).not.toContain(plane);
  });

  it('initial status of plane is flying', function() {
    expect(plane.status).toEqual("flying");
  });

  it('changes the plane status on landing', function() {
    plane.land(airport);
    expect(plane.status).toEqual("at_airport");
  });

  it('changes the plane status on takeoff', function() {
    plane.land(airport);
    plane.takeoff(airport);
    expect(plane.status).toEqual("flying");
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

  it('plane cannot land twice', function () {
    plane.land(airport);
    plane.land(airport);
    expect(airport._planes.length).toEqual(1);
  });

  it('plane cannot takeoff twice', function () {
    plane.land(airport);
    plane.takeoff(airport);
    plane.takeoff(airport);
    expect(airport._planes.length).toEqual(0);
  });

  it('weather starts as sunny', function () {
    expect(weather.status).toEqual('sunny');
  });

  it('weather can be stormy', function () {
     spyOn(Math, 'floor').and.returnValue(1);
     expect(weather.isStormy()).toBeTruthy();
  });

  it('plane cannot land when weather is stormy', function () {
    spyOn(Math, 'floor').and.returnValue(1);
    plane.land(airport);
    expect(airport._planes.length).toEqual(0);
  });

  it('plane cannot takeoff when weather is stormy', function () {
    plane.land(airport);
    spyOn(Math, 'floor').and.returnValue(1);
    plane.takeoff(airport);
    expect(airport._planes.length).toEqual(1);
  });

});
