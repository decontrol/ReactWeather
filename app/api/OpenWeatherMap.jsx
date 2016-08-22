var axios = require('axios');

const OPEN_WAETHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=45d574634c5dff08124ee9359ee41e14&units=metric';

module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestURL = `${OPEN_WAETHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestURL).then(function (res) {
            debugger;
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function (res) {
            throw new Error(res.data.message);
        });
    }
}