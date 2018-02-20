'use strict';

describe('Airport', function(){
  var airport;
  var plane;
  var weather;

  beforeEach(function(){
    airport = new Airport();
    plane = jasmine.createSpyObj('plane',['status', 'land', 'takeoff']);
    weather = jasmine.createSpyObj('weather',['isStormy']);
  });

  it('has no planes by default', function(){
    expect(airport._planes).toEqual([]);
  });

  describe('under normal conditions',function(){
     beforeEach(function(){
       weather.isStormy.and.returnValue(false);
     });
     it('can clear planes for landing', function(){
       airport.clearLanding(plane);
       expect(airport._planes).toEqual([plane]);
     });
     it('can clear planes for takeoff', function(){
       airport.clearLanding(plane);
       airport.clearTakeoff(plane);
       expect(airport._planes).toEqual([]);
     });
   });

   describe('under stormy conditions',function(){
     beforeEach(function(){
       weather.isStormy.and.returnValue(true);
     });
     it('does not clear planes for landing', function(){
       plane.land(airport);
       expect(airport._planes).toEqual([]);
     });
     it('does not clear planes for takeoff', function(){
       airport._planes = [plane]
       plane.takeoff(airport);
       expect(airport._planes).toContain(plane);
     });
   });

});
