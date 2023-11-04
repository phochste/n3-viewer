const N3 = require('n3');
const fs = require('fs');

if (process.argv.length != 3) {
    console.error('usage: n3-viewer file');
    process.exit(1);
}

const input = process.argv[2];
const data = fs.readFileSync(input, { encoding: 'utf-8'});

const extention = input.replace(/.*\./g,'.');
const parser = new N3.Parser({ format: extention });

parser.parse(data,(error, quad, prefixes) => {
    if (error)
        throw error;
    if (quad) {
        console.log(quad);
    }
});
