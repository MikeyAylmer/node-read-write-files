const fs = require('fs');
const axios = require('axios')
const args = process.argv.slice(2)
const filePath = args[0]

function handleOutput(text, out) {
    if (out) {
        fs.writeFile(out, text, 'utf8', function (err) {
            if (err) {
                console.error(`Couldn't write ${out}: ${err}`);
                process.exit(1);
            }
        });
    } else {
        console.log(text);
    }
}


function cat(path) {
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            console.log("ERROR reading ", err)
            process.exit(1)
        }
        console.log("DATA>>>", data)
    });
}

async function webCat(url) {
    try {
        let resp = await axios.get(url)
        console.log(resp.data)
    } catch (err) {
        console.log(`ERROR ${url} ${err}`)
        process.kill(1)
    }

}

let path;
let out;

if (process.argv[2] === '--out') {
    out = process.argv[3];
    path = process.argv[4];
} else {
    path = process.argv[2];
}



if (path.slice(0, 4) === "http") {
    webCat(path);
} else {
    cat(path);
}