const path = require('path')

// various path methods

// prints out what character separates pathnames
console.log(path.sep)

const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

// accesses base name
const base = path.basename(filePath);
console.log(base)

// returns absolute path
// remember __dirname returns the director name of this particular file
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);