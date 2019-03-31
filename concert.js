var axios = require('axios');
//var moment

function concert(a) {
  axios.get("https://rest.bandsintown.com/artists/" + a + "/events?app_id=codingbootcamp")
  .then(function(res) {
    console.log(res.data)
    res.data.forEach(function(concert) {
      console.log(concert.venue.name);
      console.log(concert.venue.city);
      console.log(concert.venue.country);
      console.log(concert.datetime);
    })
  }).catch(function(error) {
    console.log(error)
  })
}

module.exports = concert;