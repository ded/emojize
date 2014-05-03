## Node Emoji
Unicode text to emoji conversion utility

``` sh
npm install emojize --save
```

``` js
var convert = require('emojize').emojize
var html = convert('Haay 😜. Just getting ☕. But maybe 🍻 at 🕘🌜 is that 🆒')
```

### Browser usage with Ender

``` sh
ender add emojize
```

### Note
Use of this library requires `<meta charset='utf-8'>` encoding if used in a browser.

``` html
<head>
  <meta charset='utf-8'>
  <link href='sprite/emoji.css' type='text/css'>
  <script src='ender.js'></script>
</head>
```

``` js
var convert = require('emojize').emojize
document.getElementById('content').innerHTML = convert('Haay 😜')
```

#### Sprite vs Image
`emojize` defaults to sprite based conversion which ultimately requires the developer to include the `sprite/emoji.css` and upload the `emoji.png` along side the file. You could otherwise include all images found in `[img/](img/)` and pass in flag to the second argument to `emojize`

``` js
var convert = require('emojize').emojize
convert.base('images/emojis/')
convert('Haay 😜', true)

/**
 * outputs:
 * 'Haay <img src="images/emojis/_1f61c.png">'
 */
```

### Examples

``` sh
make build
make example
open http://localhost:3000/example.jade
```

![Screenshot](http://cl.ly/image/0L3I2y2v0A3D/Screen%20Shot%202014-05-03%20at%202.19.32%20PM.png)

### License MIT

Happy Emojizing!
