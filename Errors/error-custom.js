

class customApiError extends Error {
    constructor(message, statuscode) {
        super(message)
        this.statuscode = statuscode
    }
}

const createCustomError = (msg, statuscode) => {
    return new customApiError(msg, statuscode)
}

module.exports = {customApiError, createCustomError}