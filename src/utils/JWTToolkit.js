const jwt = require('jsonwebtoken');
require('dotenv-safe').config();

const genJwt = (data, expTime) => {
    return jwt.sign({data}, process.env.JWT_SECRET, { expiresIn: expTime });
}

const decodeJwt = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET);
}

module.exports = {genJwt, decodeJwt};
