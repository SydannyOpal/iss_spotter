const request = require("request");
const { calculateMac } = require("request/lib/hawk");
const myFun = require("./iss");
const ipAdd, coords;

const fetchMyIP = (error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  ipAdd = ip;
  console.log("It worked! Returned IP:", ip);
  myFun.fetchCoordsByIP(ipAdd);
};
myFun.fetchMyIP(fetchMyIP);
