const fs = require('fs');
const args = process.argv.slice(2)
const filePath = args[0]

fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
        console.log("ERROR reading ", err)
        process.exit(1)
    }
    console.log("DATA>>>", data)
});
// Step 1 ^^
const line = '\n one.txt'
fs.writeFile('step2.js', line, { encoding: 'utf8', flag: 'a' }, (err) => {
    if (err) {
        console.log("ERROR", err)
        process.kill(1)
    }
    console.log('IT WORKS!!')
})