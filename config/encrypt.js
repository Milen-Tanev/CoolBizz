/* globals require module */

const cryptoJS = require('crypto');
let randomBytes = 128;

module.exports = {
    generateSalt() {
        return cryptoJS.randomBytes(randomBytes).toString('base64');
    },
    hashPassword(salt, password) {
        const hmac = cryptoJS.createHmac('sha1', salt);
        return hmac.update(password).digest('hex');
    }
};