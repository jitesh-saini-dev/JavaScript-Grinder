function driverSession(driverName) {
  let isOnline = false;
  let isOnRide = false;
  let rideStatus = false;
  let totalEarnings = 0;
  let rideCount = 0;
  let currentFare = 0;

  return {
    goOnline: function () {
      if (isOnline) return;
      isOnline = true;
      isOnRide = false;
      console.log(`${driverName} is Online.`);
    },

    goOffline: function () {
      if (isOnRide) {
        isOnline = false;
      }
      if (!isOnline) {
        console.log("Cannot go offline during a ride.");
      }
      isOnline = false;
      console.log(`${driverName} is Offline.`);
    },

    acceptRide: function (fare) {
      if (fare <= 0) {
        console.log("Fare must be positive (>0)");
        return;
      }
      if (!isOnline) {
        console.log("Driver offline.");
        return;
      }
      if (isOnRide && rideStatus) {
        console.log("Already on a ride.");
        return;
      }
      currentFare += fare;
      rideStatus = true;
      console.log(`${driverName} accepted a ride worth ${fare}`);
    },

    startRide: function () {
      if (!isOnline) {
        console.log("No ride to start.");
        return;
      }
      if (isOnRide) {
        console.log("Ride Already started.");
        return;
      }
      isOnRide = true;
      console.log(`${driverName} has started the ride.`);
    },

    completeRide: function () {
      if (!isOnline) {
        console.log(`${driverName} is offline.`);
        return;
      }
      if (isOnline && !rideStatus) {
        console.log("Driver is not accepted the ride");
        return;
      }
      if (!isOnRide) {
        console.log("Driver is not started the ride");
        return;
      }

      rideCount++;
      totalEarnings += currentFare;
      currentFare = 0;
      rideStatus = false;
      isOnRide = false;
      console.log("Ride completed.");
      console.log(`ride count: ${rideCount}`);
      console.log(`total earning : ${totalEarnings}`);
    },
    getStatus: function () {
      console.log(`ONLINE: ${isOnline}`);
      console.log(`On Ride: ${isOnRide}`);
      console.log(`Ride Status ${rideStatus}`);
      console.log(`Earnings: ${totalEarnings}`);
      console.log(`Rides: ${rideCount}`);
    },
  };
}

let jitesh = driverSession("jitesh");
jitesh.goOnline();
jitesh.goOnline();
jitesh.goOffline();
jitesh.goOnline();
jitesh.acceptRide(5);
jitesh.startRide();
jitesh.completeRide();
console.log("------------------------------------------------");

jitesh.acceptRide(5);
jitesh.startRide();
jitesh.completeRide();
jitesh.getStatus();

console.log("------------------------------------------------");
