const fs = require('fs');
const constant = require('./constant');

console.log(__dirname);
const readStream = fs.createReadStream(__dirname + constant.READ_ME, 'utf8');
const writeStream = fs.createWriteStream(__dirname + constant.WRITE_ME);

fs.access(constant.FILE, fs.constants.F_OK | fs.constants.W_OK, (err) => {
    if (err) {
        console.error(`${constant.READ_FILE} ${err.code === 'ENOENT' ? 'does not exist' : 'is read-only'}`);
    }else {
        console.log(`${constant.READ_ME} exists, and it is writable`);
        
        readStream.on('data', (chunk) => {
            // console.log('Read this file = ' + chunk);
            writeStream.write(chunk, (err) => {
                if (err)
                    throw err;
                console.log('The file '+ constant.WRITE_ME +' has been created!');
            });
        });
    }
});

// readStream.on('data', (chunk) =>{
// console.log('new chunk received: ========= ');
// writeStream.write(chunk);
// });