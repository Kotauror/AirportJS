'use strict';

describe('Plane',function(){

  var plane;
  var airport;
  var weather;

  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['_planes', 'hasPlaces', '_weather']);
    weather = jasmine.createSpyObj('weather',['isStormy']);
  });

  it('has initial status flying', function(){
    expect(plane.status).toEqual("flying");
  });

});
