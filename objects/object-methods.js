//A method is an object property whose value is a function
/**
 * What is interesting about putting a function inside an object
 * is that you get access to the object properties right inside of
 * the function.
 *
 * To access the object properties we use the keyword 'this'.
 * 'this' references the object the method is defined on.
 */
let restaurant = {
  name: 'ASB',
  guestCapacity: 75,
  guestCount: 0,
  checkAvailability: function (partySize) {
    let seatsLeft = this.guestCapacity - this.guestCount;
    return partySize <= seatsLeft;
  },
  seatParty: function (partySize) {
    this.guestCount = this.guestCount + partySize;
  },
  removeParty: function (partySize){
    this.guestCount = this.guestCount - partySize;
  }

}

restaurant.seatParty(72);
console.log(restaurant.checkAvailability(4));
restaurant.removeParty(5);
console.log(restaurant.checkAvailability(4));