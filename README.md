[![Build Status](https://travis-ci.org/akrzyz/nerthusaddon.svg?branch=master)](https://travis-ci.org/akrzyz/nerthusaddon)
[![Coverage Status](https://coveralls.io/repos/github/akrzyz/nerthusaddon/badge.svg?branch=master)](https://coveralls.io/github/akrzyz/nerthusaddon?branch=master)

# nerthusaddon
  Addon for nerthus server in game [margonem](http://www.margonem.pl/)

### How to update addon to newest version?
  * put in console `delete localStorage.nerthus` and refresh game

### How to test changes in game?
  * In order to run addon in version from master branch set in console variable `localStorage.NerthusAddonDebug = true`
  * In order to back to normal version `delete localStorage.NerthusAddonDebug`

### How to run tests
  * runing tests require nodejs and npm
  * run `make install-test-dependencies` to install dependencies
  * to run tests type `make run-tests-with-coverage` in project root directory
  * test are run with [mocha](https://mochajs.org/) and [expect](https://github.com/Automattic/expect.js/)
  * tests are written with TDD interface

### How to introduce changes to game
  * Put desired revision hash to file [version.json](version.json)
  * It usually takes couple minutes before changes are visible in game
  * Only exception are changes in [NN_start.js](NN_start.js), changes there require addon link update on [server command site](http://serwery.margonem.pl/)

### How to deliver changes?
  * Feel free to make pull requests

### How to run light manager in game?
  * run in console `nerthus.night.lights.give_me_the_light()`
  * turn on lights at day `nerthus.night.lights.on()`
  * dumping light configuration: click dump in menu or `nerthus.night.lights.dump()`
