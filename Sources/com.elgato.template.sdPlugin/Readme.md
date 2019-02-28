
# Stream Deck Plugin Template

The `Stream Deck Plugin Template` is a boilerplate template to let you get started quickly when writing a Javascript plugin for [Stream Deck](https://developer.elgato.com/documentation/stream-deck/).

`Stream Deck Plugin Template` requires Stream Deck 4.1 or later.

# Description

`Stream Deck Plugin Template` is a complete plugin that shows you how to
- load and save settings using Stream Deck's persistent store
- setup and communicate with the Property Inspector
- pass messages directly from Property Inspector to the plugin (and vice versa)
- localize your Property Inspector's UI to another language
  

If you think about creating a Stream Deck plugin, it's a good idea to start with this template, because it already implements all code required to communicate from your plugin to the `Property Inspector` and to your `Stream Deck`.

There are also a bunch of utility helpers included, which makes it easy to process messages sent and received via Websockets.

Together with the [`PISamples` library](https://github.com/elgatosf/streamdeck-pisamples/) it helps you create your full-fledges Stream Deck plugin fast.

## Features:

Features:

- code written in Javascript
- cross-platform (macOS, Windows)
- localization support
- styled [Property Inspector](https://developer.elgato.com/documentation/stream-deck/sdk/property-inspector/) included
- Property Inspector contains all required boilerplate code to let you instantly work on your plugin's code.

