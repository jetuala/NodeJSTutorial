// file system
// asynchronously, blocking, or synchronously
// for now, just consider them as different methods

const { readFile, writeFile } = require('fs');

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second)
writeFileSync(
    './content/result-sync.txt', 
    `Here is the result: ${first}, ${second}`,
    // node will Append the results instead of overwriting
    { flag: 'a' }
)
