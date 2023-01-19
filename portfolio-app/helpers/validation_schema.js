const Joi = require('joi');

const projSchema = Joi.object({
    title: Joi.string()
    .alphanum()
    .required()
    .default('Portfolio Project'),
    websiteUrl: Joi.string().uri().lowercase().required()
    .default('#'),
    gitHubUrl: Joi.string().uri().lowercase().required()
    .default('#'),
    techStack: Joi.string(),
    summary: Joi.string(),
    imgUrl_sm: Joi.string().uri({allowRelative: true}),
    imgUrl_lg: Joi.string().uri({allowRelative: true}),
    imgAlt: Joi.string(),
})

module.exports = {
    projSchema
}