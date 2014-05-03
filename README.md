## Node Emoji
Unicode text to emoji conversion utility

``` sh
npm install emojize --save
```

``` js
var emojize = require('emojize')
var html = emojize('Haay 😜. Just getting ☕. But maybe 🍻 at 🕘🌜 is that 🆒')
```

### Browser

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
var emojize = require('emojize')
document.getElementById('content').innerHTML = emojize('Haay 😜')
```

### Example

``` sh
make build
make example
open http://localhost:3000/example.jade
```

![Screenshot](http://cl.ly/image/0L3I2y2v0A3D/Screen%20Shot%202014-05-03%20at%202.19.32%20PM.png)

### License MIT

Happy Emojizing!
