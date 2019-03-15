const fs = require('fs');
const constant = require('./constant');



// Check if the file exists in the current directory, and if it is writable. (Asyncronous methode)
fs.access(constant.FILE, fs.constants.F_OK | fs.constants.W_OK, (err) => {
    if (err) {
        console.error(`${constant.FILE} ${err.code === 'ENOENT' ? 'does not exist' : 'is read-only'}`);
    }else {
        console.log(`${constant.FILE} exists, and it is writable`);
             fs.unlink(constant.WRITE_FILE, (err) =>  {
                if (err) {
                    console.error(`${constant.WRITE_FILE} ${err.code === 'ENOENT' ? 'does not exist' : 'is read-only'}`);
                }else {
                    fs.rmdir(constant.DIR, () => {
                        console.log('Remove file ' + constant.WRITE_FILE);
                    });
                }
        });
    }
});