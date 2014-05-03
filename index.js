var emoji = require('lib/emoji')

function sprite(text) {
  return '<span class="sprite ' + text + '"></span>'
}

module.exports = function emojize(s) {
  for (var unicode in emoji) {
    var index = s.indexOf(unicode)
    if (index != -1) {
      var new_s = s.slice(0, index)
      return emojize(new_s + sprite(emoji[unicode]) + s.slice(index + 2))
    }
  }
  return s
}
