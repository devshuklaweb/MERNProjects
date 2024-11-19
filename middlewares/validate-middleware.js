const validate = schema => async (req, resp, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body)
    req.body = parseBody
    next()
  } catch (err) {
    const message = err.errors[0].message
    resp.status(400).json({ msg: message })
  }
}

module.exports = validate
