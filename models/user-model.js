const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

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

// user define method for generate token after user created.
userSchema.methods.generateToken = async function () {
  try {
    //jwt.sign(payload,secret key)
    return jwt.sign(
      //first payload
      {
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin
      },
      process.env.JWT_SECRET_KEY,
      {
        //is optional for expirty
        expiresIn: '30d'
      }
    )
  } catch (error) {
    console.log('Error in generateToken', error)
  }
}

// checking login password valid or not
userSchema.methods.comparePassword = async function (password) {
  try {
    return bcrypt.compare(password, this.password)
  } catch (error) {
    console.log('Error in isPasswordValid', error)
  }
}

//define the modal name or collection name
const User = mongoose.model('User', userSchema) //first collection name in singular form and second is schema

module.exports = User
