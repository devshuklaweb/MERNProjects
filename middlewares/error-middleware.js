const errorMiddleware = (err, res, resp, next) => {
  const status = err.status || 500
  const message = err.message || 'Backend Error'
  const extraDetails = err.extraDetails || 'Backend Error'

  return resp.status(status).json({ message, extraDetails })
}

module.exports = errorMiddleware
