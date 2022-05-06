const Grapheme = require('grapheme-splitter');
const splitter = new Grapheme();

const complexString = "🤦‍♀️🤦🎅";

const graphemes = splitter.splitGraphemes(complexString);
const graphemeCounts = splitter.countGraphemes(complexString);
console.log("graphemes: ", graphemes);
console.log("graphemeCounts: ", graphemeCounts);

const result = "🤦‍♀️";

console.log("result: ", result); // 🤦🤦‍♀️
console.log("result.length: ", result.length); //5

console.log(result.codePointAt());


// SQL
// SELECT LENGTH("🤦‍♀️";) # 13