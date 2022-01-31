const {customApiError} = require('../Errors/error-custom')


const errorHandler = (err, req, res, next) => {
    if (err instanceof customApiError) {
       return res.status(err.statuscode).json({msg: err.message})
    }
    console.log(err)
    return res.status(500).json({msg: 'ice cream'})
}

module.exports = errorHandler;