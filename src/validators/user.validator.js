import Joi from 'joi';
import {joiResolver} from "@hookform/resolvers/joi";


const userValidator = Joi.object({
    name:Joi.string()
        .min(2)
        .max(30)
        .required()
        .messages(
            {
                "string.min":"Minimum 2 character required",
                "string.max":"Maximum 30 character required"
            }
        ),

    surname:Joi.string()
        .min(2)
        .max(30)
        .required()
        .messages(
            {
                "string.min":"Minimum 2 character required",
                "string.max":"Maximum 30 character required"
            }
        ),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'ua'] } })
        .required()
        .messages(
            {
                "string.email":"Available domens: 'com', 'net', 'ua'",
            }
        ),

})

const commentValidator = Joi.object({
    name: Joi.string()
        .min(2)
        .max(20)
        .required()
        .alphanum()
        .messages(
            {
                "string.min":"Minimum 2 character required",
                "string.max":"Maximum 20 character required",
                "string.alphanum":"Only English letters and numbers"
            }),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'ua'] } })
        .required()
        .lowercase()
        .messages(
            {
                "string.email":"Available domens: 'com', 'net', 'ua'",
            }
        ),
    body: Joi.string()
        .required()
        .min(10)
        .max(1000)
        .messages({
            "string.min":"Min 10 symbols",
            "string.required":"Is not allowed to be empty",
            "string.max":"Max 1000 words"
        })
})

export {userValidator,commentValidator};