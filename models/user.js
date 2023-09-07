const { Schema, model } = require('mongoose');
const Joi = require('joi');

const { handleMongooseError } = require('../helpers');

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const userSchema = new Schema(
  {
    email: { type: String, match: emailRegex, required: [true, 'Email is required'], unique: true },
    password: { type: String, minlength: 6, required: [true, 'Set password for user'] },
    subscription: { type: String, enum: ['starter', 'pro', 'business'], default: 'starter' },
    token: { type: String, default: '' },
    avatarURL: { type: String, required: true },
    verify: { type: Boolean, default: false },
    verificationToken: { type: String, required: [true, 'Verify token is required'] },
  },
  { versionKey: false }
);

userSchema.post('save', handleMongooseError);

const registerSchema = Joi.object({
  email: Joi.string()
    .pattern(emailRegex)
    .required()
    .messages({ 'any.required': `Missing required email field` }),
  password: Joi.string()
    .min(6)
    .required()
    .messages({ 'any.required': `Missing required password field` }),
});

const emailSchema = Joi.object({
  email: Joi.string()
    .pattern(emailRegex)
    .required()
    .messages({ 'any.required': `Missing required email field` }),
});

const loginSchema = Joi.object({
  email: Joi.string()
    .pattern(emailRegex)
    .required()
    .messages({ 'any.required': `Missing required email field` }),
  password: Joi.string()
    .min(6)
    .required()
    .messages({ 'any.required': `Missing required password field` }),
});

const updateSubscriptionSchema = Joi.object({
  subscription: Joi.string()
    .valid('starter', 'pro', 'business')
    .required()
    .messages({ 'any.required': `Missing required subscription field` }),
});

const schemas = {
  registerSchema,
  emailSchema,
  loginSchema,
  updateSubscriptionSchema,
};

const User = model('user', userSchema);

module.exports = { User, schemas };
