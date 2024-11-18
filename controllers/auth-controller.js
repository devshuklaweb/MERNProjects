const User = require('../models/user-model')
const bcrypt = require('bcrypt')

const home = async (req, resp) => {
  try {
    resp.status(200).send('auth controller using auth-router')
  } catch (err) {
    console.log(err)
  }
}

const register = async (req, resp) => {
  try {
    const { username, email, phone, password } = req.body
    const userExist = await User.findOne({ email: email })
    if (userExist) {
      return resp.status(400).json({ message: 'User email already exist.' })
    }

    const userCreated = await User.create({
      username: username,
      email: email,
      phone: phone,
      password: password
    })

    resp.status(200).json({
      message: userCreated,
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString()
    })

    //userCreated.generateToken() ye ek custom method hai jise ham modal me bana sktain hai kitne bhi.

    //console.log(req.body);
    //resp.status(200).send("register-auth controller using auth-router");
    //resp.status(200).send({ inputs: req.body })
  } catch (error) {
    console.error('Error register token:', error)
    resp.status(200).send({ message: 'Internal server error and error' })
  }
}

const login = async (req, resp) => {
  try {
    const { email, password } = req.body
    const userExist = await User.findOne({ email: email })
    if (!userExist) {
      return resp.status(400).json({ message: 'User email not valid.' })
    }
    const isPasswordValid = await bcrypt.compare(password, userExist.password)
    if (isPasswordValid) {
      resp.status(200).json({
        message: 'Login successfully',
        token: await userExist.generateToken(),
        userId: userExist._id.toString()
      })
    } else {
      resp.status(401).json({ message: 'Invalid email or password' })
    }
  } catch (error) {
    console.error('Error generating token:', error)
    resp.status(500).send({ message: 'Internal server error and error' })
  }
}

module.exports = { home, register, login }
