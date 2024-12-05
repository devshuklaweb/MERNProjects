const z = require('zod')

// create an object schema
const contactSchema = z.object({
  username: z
    .string({ required_error: 'Username is required' })
    .trim()
    .min(3, { message: 'Username must be at least of 3 chars' })
    .max(255, { message: 'Username must not be more than 255 character' }),
  email: z
    .string({ required_error: 'Email is required' })
    .trim()
    .email({ message: 'Invalid email address' })
    .min(3, { message: 'Email must be at least of 3 chars' })
    .max(255, { message: 'Email must not be more than 255 character' }),
  message: z
    .string({ required_error: 'Message is required' })
    .trim()
    .min(10, { message: 'Message must be at least of 10 chars' })
    .max(200, { message: 'Message must not be more than 20 character' })
})

module.exports = contactSchema
