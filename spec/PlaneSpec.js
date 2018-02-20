describe('Plane',function(){

  var plane;

  beforeEach(function(){
    plane = new Plane();
    airport = jasmine.createSpyObj('airport',['_planes', 'hasPlaces', '_weather']);
  });

  it('can land at an airport', function(){
    expect(plane.land).not.toBeUndefined();
  });

  it('has initial status flying', function(){
    expect(plane.status).toEqual("flying");
  });

});
