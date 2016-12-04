/* globals module, process */

const serverPort = 3004;
const notAuthorizedServerResponse = 403;
const minLength = 5;

let port = process.env.PORT || serverPort;

module.exports = {
    PORT: port,
    notAuthorizedServerResponse,
    minLength
};