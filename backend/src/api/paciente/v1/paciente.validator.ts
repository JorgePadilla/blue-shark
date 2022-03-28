import { celebrate, Joi } from 'celebrate';

export const pacienteGetAllValidator = celebrate({
    query: {
        limit: Joi.number().integer().min(1).max(100).default(10),
        offset: Joi.number().integer().min(0).default(0)
    }
})

export const pacientePostValidator = celebrate({
    body:{
        primerNombre: Joi.string().max(50).required(),
        segundoNombre: Joi.string().required()
    }
})