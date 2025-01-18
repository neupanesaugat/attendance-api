const validationReqBody = (validateSchema) => {
  return async (req, res, next) => {
    const data = req.body;
    try {
      // validate data
      const validatedData = await validateSchema.validate(data);
      req.body = validatedData;
    } catch (error) {
      // error for validation failure
      return res.status(400).send({ message: error.message });
    }
    next();
  };
};

export default validationReqBody;
