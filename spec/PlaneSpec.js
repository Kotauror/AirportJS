'use strict';

describe('Plane',function(){

  var plane;
  var airport;
  var weather;

  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['_planes', 'clearLanding', 'clearTakeoff', 'hasPlaces', 'hasPlane' '_weather']);
    airport._weather.isStormy = function(){return false;}
    airport.hasPlaces = function(){return true;}
  });

  it('has initial status flying', function(){
    expect(plane.status).toEqual("flying");
  });

  it('changes the status after landing', function(){
    plane.land(airport);
    expect(plane.status).toEqual("at_airport");
  });

  it('changes the status after takeoff', function(){
    airport.hasPlane = function(){return true;}
    plane.takeoff(airport);
    expect(plane.status).toEqual("flying");
  });

});
