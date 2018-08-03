# Streamer
> Streams of reasonably interesting data published reasonably stochastically

Turns pull based data into streams of data pushed to the client via web sockets every 3-5 seconds. Each data source is identified by a channel name and will return a payload with a consistent shape. This is meant for testing interfaces that rely on data streams rather than polling.

You can subscribe to a stream using [Pusher](https://pusher.com) in the browser like this:

```html
<script src="https://js.pusher.com/4.2/pusher.min.js"></script>
<script>
  const stream = new Pusher('e8f388c50dfc938652ce', { cluster: 'eu' })
  stream.subscribe('SOME-CHANNEL-NAME').bind('default', console.log)
</script>
```

> Or you can [try it online](https://codepen.io/lukejacksonn/pen/VBdeOa?editors=1000) on CodePen

Replace `SOME-CHANNEL-NAME` with one of the channels listed below and then open the console to see the data flowing in. Replace the `console.log` with a function that accepts a single argument that is the payload of the channel you have subscribed to. You can use the same stream to subscribe to multiple channels.

# Channels

Below are a list of data streams by channel name. Some of them return generated mock data and others rely on live data points from open source or publicly available APIs.

## Random Data

| Channel | Description |
| --- | --- |
| fact  | A random fact string from a large list of facts. |
| name  | A random name string form a large list of names.  |
| color  | A randomly generated hex value like `#00ffcc`. |
| image  | A URL to a random image from unsplash. |
| percent  | A random number from `1-100` useful for graphs and dials. |
| location  | An object containing random but valid values for `lat` and `lng`. |
| roulette  | An object containing data that represents a random spin of a roulette wheel. |
| card  | An object containing data that represents a random card being drawn from a deck. |

## Live Data

| Channel | Description |
| --- | --- |
| time  | A human readable time string in GMT like `16:35:00 GMT`. |
| date  | A date string based on a the number of milliseconds since 1 January 1970 UTC. |
| count  | The value of a counter that gets incremented every publish. |
| bitcoin  | The current price of bitcoin in US dollars. |
| footballer  | Up to date information about a random football player from the Premier League. |
| carbon | The current carbon intensity level of the UK. |
