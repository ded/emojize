var emoji = require('./lib/emoji')
var base = ''

function sprite(text) {
  return '<span class="emoji ' + text + '"></span>'
}

function image(text) {
  return '<img class="_emoji" src="' + base + text + '.png">'
}

module.exports.emojize = function emojize(s, use_image) {
  var fn = use_image ? image : sprite
  for (var unicode in emoji) {
    var index = s.indexOf(unicode)
    if (index != -1) {
      var new_s = s.slice(0, index)
      return emojize(new_s + fn(emoji[unicode]) + s.slice(index + unicode.length), use_image)
    }
  }
  return s
}

module.exports.base = function (b) {
  base = b
}
