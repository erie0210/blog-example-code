const Grapheme = require('grapheme-splitter');
const splitter = new Grapheme();

const complexString = "🤦‍♀️🤦🎅";

const graphemes = splitter.splitGraphemes(complexString);
const graphemeCounts = splitter.countGraphemes(complexString);
console.log("graphemes: ", graphemes); // graphemes:  [ '🤦‍♀️', '🤦', '🎅' ]
console.log("graphemeCounts: ", graphemeCounts); // graphemeCounts:  3

const result = "🤦‍♀️";

console.log("result: ", result); // result:  🤦‍♀️
console.log("result.length: ", result.length); // result.length:  5 (utf16)


// MySQL utf-8
// SELECT LENGTH("🤦‍♀️";) // utf8 이기 때문에 13이 나온다.

// PostGreSQL utf-16
// SELECT
// 	LENGTH ('🤦‍♀️');