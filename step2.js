const fs = require('fs');
const axios = require('axios')
const args = process.argv.slice(2)
const filePath = args[0]

fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
        console.log("ERROR reading ", err)
        process.exit(1)
    }
    console.log("DATA>>>", data)
});

async function webCat(url) {
    try {
        let resp = await axios.get(url)
        console.log(resp.data)
    } catch (err) {
        console.log(`ERROR ${url} ${err}`)
        process.kill(1)
    }

}