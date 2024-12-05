const z = require('zod')

const signIn = z.object({
  email: z
    .string({ required_error: 'Email is required' })
    .trim()
    .email({ message: 'Invalid email address' })
    .min(3, { message: 'Email must be at least of 3 chars' })
    .max(255, { message: 'Email must not be more than 255 character' }),
  password: z
    .string({ required_error: 'Password is required' })
    .trim()
    .min(7, { message: 'Password must be at least of 6 chars' })
    .max(1024, { message: 'Password must not be more than 1024 character' })
})

module.exports = signIn
