const fs = require('fs');
const constant = require('./constant');

// Check if the file exists in the current directory, and if it is writable. (Asyncronous methode)
fs.access(constant.FILE, fs.constants.F_OK | fs.constants.W_OK, (err) => {
    if (err) {
        console.error(`${constant.FILE} ${err.code === 'ENOENT' ? 'does not exist' : 'is read-only'}`);
    }else {
        console.log(`${constant.FILE} exists, and it is writable`);
        fs.readFile(constant.FILE, 'utf8', (err, data) => {
            console.log('Read this file = ' + data);
            fs.writeFile(constant.WRITE_FILE, data, (err) => {
                if (err)
                    throw err;
                console.log('The file '+ constant.WRITE_FILE +' has been created!');
            });
        });
    }
});
