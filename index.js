var request = require('superagent')
var url = 'https://igdbcom-internet-game-database-v1.p.mashape.com'

function getGames(callback) {
  request
    .get(`${url}/games/?fields=name&limit=10&offset=0&order=release_dates.date%3Adesc&search=mario`)
    .set('X-Mashape-Key', '8XrLHLkRxlmshascF7n3mXc7CtoVp1RQN3Yjsn4ISq8ddFmTDT')
    .set('Accept', 'application/json')
    .end(function(err, res) {
      if(err) {
        callback('Oh no error!' + err)
    } else {
     callback(null, res.body)
    }
  })
}

module.exports = getGames
