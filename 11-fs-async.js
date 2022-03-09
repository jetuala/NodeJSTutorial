const { readFile, writeFile } = require('fs');
// asynchronous version
// need to provide callback, similar to click event in html

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const firstTxt = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const secondTxt = result;
        writeFile(
            './content/result-async.txt',
            `Here is the result : ${firstTxt}, ${secondTxt}`
        , (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(result)
        })
    })
})