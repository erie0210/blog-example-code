const Grapheme = require('grapheme-splitter');
const splitter = new Grapheme();

const complexString = "π€¦ββοΈπ€¦π";

const graphemes = splitter.splitGraphemes(complexString);
const graphemeCounts = splitter.countGraphemes(complexString);
console.log("graphemes: ", graphemes); // graphemes:  [ 'π€¦ββοΈ', 'π€¦', 'π' ]
console.log("graphemeCounts: ", graphemeCounts); // graphemeCounts:  3

const result = "π€¦ββοΈ";

console.log("result: ", result); // result:  π€¦ββοΈ
console.log("result.length: ", result.length); // result.length:  5 (utf16)


// MySQL utf-8
// SELECT LENGTH("π€¦ββοΈ";) // utf8 μ΄κΈ° λλ¬Έμ 13μ΄ λμ¨λ€.

// PostGreSQL utf-16
// SELECT
// 	LENGTH ('π€¦ββοΈ');