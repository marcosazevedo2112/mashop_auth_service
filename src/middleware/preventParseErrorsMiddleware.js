preventParseError = (err, req, res, next) => {
    res.status(400).json({"err":"Bad request"}).send()
};

module.exports = preventParseError;
