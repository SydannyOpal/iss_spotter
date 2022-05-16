// const request = require("request");
// const { calculateMac } = require("request/lib/hawk");
// const myFun = require("./iss");
// const ipAdd, coords;

// const fetchMyIP = (error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   ipAdd = ip;
//   console.log("It worked! Returned IP:", ip);
//   myFun.fetchCoordsByIP(ipAdd);
// };
// myFun.fetchMyIP(fetchMyIP);

const { nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  console.log(passTimes);
});
