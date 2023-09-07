class Response {
    static success = (res, message, data) => {
        res.status(200).json({
            status: "--> OK.",
            message,
            data
        })
    }
    static failed = (res, code, message) => {
        res.status(code).json({
            status: "--> Not OK.",
            message
        })
    }
}

module.exports = Response