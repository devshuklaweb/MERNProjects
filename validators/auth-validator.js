const z = require('zod')

// create an object schema
const signupSchema = z.object({
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
  phone: z
    .string({ required_error: 'Phone number is required' })
    .trim()
    .min(10, { message: 'Phone number must be at least of 10 chars' })
    .max(20, { message: 'Phone number must not be more than 20 character' }),
  password: z
    .string({ required_error: 'Password is required' })
    .trim()
    .min(7, { message: 'Password must be at least of 6 chars' })
    .max(1024, { message: 'Password must not be more than 1024 character' })
})

module.exports = signupSchema
