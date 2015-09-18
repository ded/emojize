## Emojize
A high resolution, unicode (emoji) to html conversion utility.

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

#### Note
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

### Sprite vs Image
`emojize` defaults to sprite-based conversion which ultimately requires the developer to include the `sprite/emoji.css` and upload the `emoji.png` alongside the file. You could otherwise include all images found in [`img/`](img/) and pass in flag to the second argument to `emojize`

``` js
var emo = require('emojize')
emo.base('images/emojis/')
emo.emojize('Haay 😜', true)

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

### Sizing
Each emoji defaults to `64px` × `64px` which may not always be desired. Thus, consider the following practice (example assumes LESS):

``` css
.quarter { zoom: 0.25 }
.half { zoom: 0.5 }
.three-quarter { zoom: 0.75 }
.full { zoom: 1 }

@media screen and (max-width: 768px) {
  .emoji {
    .quarter()
  }
}

@media screen and (max-width: 992px) {
  .emoji {
    .half()
  }
}
@media screen and (max-width: 1200px) {
  .emoji {
    .three-quarter()
  }
}
@media screen and (max-width: 1600px) {
  .emoji {
    .full()
  }
}

```

#### Credits
Much thanks to [Gemoji project](https://github.com/github/gemoji) for high resolution images and [Apple Inc.](http://apple.com) for Artwork. See [License](https://github.com/github/gemoji/blob/master/LICENSE)

Happy Emojizing!
