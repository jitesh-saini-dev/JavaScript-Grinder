function driversession(driverName) {
  let isOnline = false;
  let isOnRide = false;
  let totalEarnings = 0;
  let currentFare = 0;
  let rideCount = 0;
  let ridestatus = false;
  return {
    goonline: function () {
      if (isOnline) return;
      isOnline = true;
      console.log(`${driverName} : is online`);
    },
    gooffline: function () {
      if (!isOnRide) return;
      isOnRide = false;
      console.log(`${driverName} is offline..`);
    },
    acceptRide: function (fare) {
      if (!isOnline) {
        console.log("driver is offline..");
        return;
      }
      if (isOnline && isOnRide) {
        console.log("driver is on Another Ride..");
        return;
      }
      if (typeof fare !== "number") {
        console.log("plese enter a number");
        return;
      }
      if (fare <= 0) {
        console.log("Invalid fare");
        return;
      }
      currentFare += fare;
      isOnRide = true;
      console.log(`${driverName} accepted a ride worth ${fare}`);
    },
    startRide: function () {
      if (rideCount < 0) {
        console.log("no ride to start");
        return;
      }
      if (!ridestatus) {
        console.log("ride is not accepted");
      }
      if (isOnRide) return;

      if (isOnline && ridestatus) {
        console.log("ride is already started");
        return;
      }
      ridestatus = true;
      console.log(`Ride started`);
    },
    completerRide: function () {
      if (!isOnline) return;
      if (!isOnRide) return;
      if (!ridestatus) {
        console.log("Cannot complete Ride before start");
        return;
      }
      rideCount += 1;
      totalEarnings += currentFare;
      fare = 0;
      ridestatus = false;
      isOnRide = false;
      console.log("success : Ride completed");
      console.log(`Totalride : ${rideCount}`);
      console.log(`Totalearning : ${totalEarnings}`);
    },
    cancelRide: function () {
      if (!isOnRide) return;
      if (!isOnline) return;
      currentFare = 0;
      isOnRide = false;
      ridestatus = false;
      console.log(`Ride is Cancelled`);
    },
    getStatus: function () {
      console.log("online status:" + isOnline);
      console.log("on ride status:" + isOnRide);
      console.log("earnings : " + totalEarnings);
      console.log("Rides: " + rideCount);
    },
  };
}
let hemant = driversession("hemant");
hemant.goonline();
hemant.acceptRide(300);
hemant.startRide();
hemant.startRide();
hemant.completerRide();
hemant.startRide();
hemant.acceptRide(300);
hemant.cancelRide();
hemant.getStatus();
hemant.completerRide();
hemant.acceptRide(300);
