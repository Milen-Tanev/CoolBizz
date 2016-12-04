/* globals module, process */

const serverPort = 3004,
    notAuthorizedServerResponse = 403,
    invalidInputServerResponse = 500,
    minLength = 5,
    zero = 0;

let port = process.env.PORT || serverPort;

module.exports = {
    PORT: port,
    notAuthorizedServerResponse,
    invalidInputServerResponse,
    minLength,
    zero
};