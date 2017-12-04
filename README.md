[![Twitter Follow](https://img.shields.io/twitter/follow/deiucanta.svg?style=social?maxAge=2592000)](https://twitter.com/deiucanta)
[![Version](https://img.shields.io/npm/v/random-position.svg)](https://www.npmjs.com/package/random-position)
[![MIT license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/deiucanta/random-position/blob/master/LICENSE)

---

When working with ordered sequences and you need to provide a sortable list, you'll find that working with positions is challenging.

- you want to make as few changes as possible to your data and not to update every record with their new possition
- you want your positions to be as short as possible to not waste memory
- you want to be able to add real-time capabilities to allow multiple collaborators to work at the same time
- you want a lock-free and eventually consistent experience

This tool is inspired by two nice close-source implementations. You can find some information about them here

1. Figma's ordered sequences (https://blog.figma.com/realtime-editing-of-ordered-sequences-c1e6b46fcd67)
2. Flip's ordered containers (https://youtu.be/W0kQ1um9X6w?t=7m1s)

Go ahead an read/watch the resources above. It'll take 15 minutes but it's worth the time.

On top of the ideas from Figma and Flip this library implements a random generator that gives you the shortest possible position string.

## Installation

```bash
npm install random-position --save
```

## Example

```js
var RandomPosition = require('random-position')

RandomPosition.between('1', '4')
RandomPosition.between('595', '601')

RandomPosition.after('98723412')
RandomPosition.before('98723412')
```

## Todo

- [ ] add mocha
- [ ] add examples (react + firebase)

## Change Log

**0.1.0** (2017-12-04) **—** initial release

## Contributing

Before you submit a pull request, please take the following actions.

1. Open an issue describing the contribution you would like to make
2. Discuss until we all agree that your idea is useful for the project
3. Create a pull request but make sure you follow the style guide and the tests pass
4. Voila! You've done an amazing job.

## Credits

- [Hexbridge](http://hexbridge.com) for sponsoring my open-source work.

## License

MIT @ [Andrei Canta](https://twitter.com/deiucanta)
