var nock = require('nock')
var test = require('ava')
var getGames = require('../index')

test.cb('Get games request works', (t) => {
  var expected = {test: 'test passed'}
  var scope = nock('https://igdbcom-internet-game-database-v1.p.mashape.com/')
    .get('/games/?fields=name&limit=10&offset=0&order=release_dates.date%3Adesc&search=mario')
    .reply(200, expected)
    getGames((err, actual) => {
      t.is(actual.test, expected.test)
      t.is(err, null)
      t.end()
    })
})

test.cb('Get games function returns length of 10', (t) => {
  nock.restore()
  var expected = 10
  getGames((err, actual) => {
    t.is(actual.length, expected)
    t.end()
  })
})
