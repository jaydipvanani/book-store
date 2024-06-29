let Joi = require("joi");

let user = {
  body: Joi.object().keys({
    email: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).trim(),
    password: Joi.string().required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).trim(),
    role: Joi.string().trim(),
    otp:Joi.string().trim()
    // password: Joi.string()
    // .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  }),
};




module.exports = { user };