const request = require("request");

const fetchMyIP = function(callback) {
  request(
    "https://api.ipify.org/?format=json",
    function (error, response, body) {
      if (error) {
        callback(error, null);
        return;
      }
      // if non-200 status, assume server error
      if (response.statusCode !== 200) {
        const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
        callback(Error(msg), null);
        return;
      }
      callback(null, JSON.parse(body).ip);
    }
  );
};

const fetchCoordsByIP = function(ip) {
  let url =
    "https://api.freegeoip.app/json/" +
    ip +
    "?apikey=3ab075a0-bcac-11ec-9038-53f35d367a56";
  console.log(url);

  request.get(url, function(error, response, body) {
    if (error) {
      console.log("It didn't work!", error);
      return;
    }

    if (response.statusCode == 200) {
      console.log(JSON.parse(body));
    }
  });
};

module.exports = { fetchMyIP, fetchCoordsByIP };
