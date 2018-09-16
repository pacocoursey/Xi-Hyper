# Xi-Hyper

A minimal monochrome theme for [Hyper](https://hyper.is).

![Xi Hyper Screenshot](assets/screenshot.png)

## Installation

### Hyper plugin manager

Ensure you have [Hyper](https://hyper.is) installed. Then run the following from the command line:
```bash
$ hyper install xi-hyper
```

### Manually

Open your `~/.hyper.js` configuration file and add `"xi-hyper"` to your plugins:
```js
module.exports = {

  config: { /*... */ },

  plugins: [
    "xi-hyper"
  ]

};
```

## Complete the look

Styles shown in the screenshot:
```js
fontFamily: 'SF Mono',
padding: '12px 30px 30px 30px'
```

## Related

- [Xi-UI](https://github.com/pacocoursey/Xi-UI): Xi for Atom.

## Acknowledgements

- Heavily inspired by [Apex UI](https://github.com/apex/apex-ui).
