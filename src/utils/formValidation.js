import Joi from "joi-browser";

class FormValidation {
  createSignatureSchema = {
    file: Joi.object().required(),
    signedby: Joi.array().items(
        {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
    }
    ).required(),
    viewedby: Joi.array().items(
        {
        name: Joi.string(),
        email: Joi.string().email(),
      }
      ).allow([]),
    title: Joi.string().required(),
    description: Joi.string().allow("")
  }

  createMeSignatureSchema = {
    file: Joi.object().required(),
    title: Joi.string().required(),
  }
}

export default new FormValidation();
