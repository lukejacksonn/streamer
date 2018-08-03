const fetch = require('node-fetch')
const names = require('./names.json')
const facts = require('./facts.json')

let count = 0

module.exports = {
  time: () => `${new Date().toLocaleTimeString()} GMT`,
  date: () => new Date(),
  count: () => {
    if (count === Number.MAX_VALUE) count = 0
    return count++
  },
  fact: () => facts[(Math.random() * facts.length) << 0],
  name: () => names[(Math.random() * names.length) << 0],
  color: () => '#' + Math.floor(Math.random() * 16777215).toString(16),
  percent: () => (Math.random() * 100) << 0,
  location: () => ({
    lat: Math.round((Math.random() * 360 - 180) * 1000) / 1000,
    lng: Math.round((Math.random() * 360 - 180) * 1000) / 1000,
  }),
  image: () =>
    fetch(
      'https://api.unsplash.com/photos/random?client_id=e9eb541c1137c3f9618af13f100a9ab0cf8ef85d30d1810c3c519b42407a0182'
    )
      .then(res => res.json())
      .then(data => data.urls.regular)
      .catch(e => console.log('unsplash failed')),
  footballer: () =>
    fetch('https://fantasy.premierleague.com/drf/bootstrap-static')
      .then(res => res.json())
      .then(data => {
        const player =
          data.elements[(Math.random() * data.elements.length) << 0]
        const team = data.teams[player.team]
        return {
          name: `${player.first_name} ${player.second_name}`,
          photo: `https://platform-static-files.s3.amazonaws.com/premierleague/photos/players/110x140/p${player.code}.png`,
          team: team.name,
        }
      })
      .catch(e => console.log('footballer failed')),
  roulette: () => {
    const number = (Math.random() * 37) << 0
    return {
      number,
      color: number === 0 ? 'green' : number % 2 === 0 ? 'red' : 'black',
      parity: number % 2 === 0 ? 'even' : 'odd',
      half: number === 0 ? 'none' : number >= 1 && number <= 18 ? 1 : 2,
      third: number === 0 ? 'none' : number <= 12 ? 1 : number <= 24 ? 2 : 3,
    }
  },
  card: () =>
    fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
      .then(res => res.json())
      .then(data => data.cards[0])
      .catch(e => console.log('card failed')),
  bitcoin: () =>
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(res => res.json())
      .then(data => `$${data.bpi.USD.rate}`)
      .catch(e => console.log('bitcoin failed')),
  carbon: () =>
    fetch('https://api.carbonintensity.org.uk/intensity')
      .then(res => res.json())
      .then(({ data }) => data[0].intensity)
      .catch(e => console.log('carbonintensity failed')),
  // venmo: () =>
  //   fetch('https://venmo.com/api/v5/public?limit=1')
  //     .then(res => res.json())
  //     .then(({ data }) => ({
  //       from: data[0].actor.name,
  //       to: data[0].transactions[0].target.name,
  //       message: data[0].message,
  //     }))
  //     .catch(e => console.log('venmo failed')),
}
