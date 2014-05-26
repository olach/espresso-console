# Console.sugar for Espresso
This is a plugin for MacRabbit's [Espresso](http://macrabbit.com/espresso/) code editor. It adds autocompletion for the Console API methods supported in the JavaScript Console of your browser.

![Demo](Demo/console.gif)

## Features
This plugin adds autocompletion and parameter hinting for:

### Console methods
* `console.assert()`
* `console.clear()`
* `console.count()`
* `console.dir()`
* `console.dirxml()`
* `console.error()`
* `console.group()`
* `console.groupCollapsed()`
* `console.groupEnd()`
* `console.info()`
* `console.log()`
* `console.profile()`
* `console.profileEnd()`
* `console.time()`
* `console.timeEnd()`
* `console.timeStamp()`
* `console.trace()`
* `console.warn()`

### Console functions
* `debugger`

## Installation

1. Download and extract the zip
2. Rename folder to Console.sugar
3. Double click the Console.sugar file to install it

## Data source
The api data for this plugin is gathered from the Google Chrome [Console API Reference](https://developer.chrome.com/devtools/docs/console-api). All methods/functions should work in the latest version of Google Chrome. They will probably work in other modern browsers as well that has a JavaScript Console.