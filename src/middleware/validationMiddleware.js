const { body, validationResult } = require('express-validator');

const userValidationRules = () => {
    return [
        body('name').isLength({ min: 2, max: 35 }).isAlpha('pt-BR', {'ignore':' '}).trim().escape(),
        body('email').isEmail().trim().escape(),
        body('password').isLength({ min: 8 }).trim().escape(),
        body('bday').isDate({format: "DD/MM/YYYY"}).trim()
    ]
}

const loginValidationRules = ()=>{
    return[
        body('email').optional().isEmail().trim().escape(),
        body('password').optional().isLength({ min: 8 }).trim().escape(),
    ]
}

const validate = (req,res,next) => {
    const errors = validationResult(req);
    if(errors.isEmpty()){
        return next();
    }

    const extractedErrors = [];
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));

    return res.status(422).json({
        errors: extractedErrors
    });
}

module.exports = {
    userValidationRules,
    loginValidationRules,
    validate
}