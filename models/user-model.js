const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true
    },
    email: {
      type: String,
      require: true
    },
    password: {
      type: String,
      require: true
    },
    phone: {
      type: String,
      require: true
    },
    isAdmin: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: { createdAt: 'created_on', updatedAt: 'updated_on' }
  }
)

// Pre-save middleware to secure the password using bcrypt
userSchema.pre('save', async function (next) {
  const user = this

  if (!user.isModified('password')) {
    next() //when password not modified
  }
  try {
    // for encrypt password
    const saltRounds = await bcrypt.genSalt(10)
    const has_password = await bcrypt.hash(user.password, saltRounds)
    user.password = has_password
  } catch (error) {
    next(error)
  }
  next()
})

//define the modal name or collection name
const User = mongoose.model('User', userSchema) //first collection name in singular form and second is schema

module.exports = User
