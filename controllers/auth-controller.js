const User = require('../models/user-model')
//const bcrypt = require('bcrypt')

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
    resp.status(200).send({ message: userCreated })

    //console.log(req.body);
    //resp.status(200).send("register-auth controller using auth-router");
    //resp.status(200).send({ inputs: req.body })
  } catch (error) {
    console.log(error)
    resp.status(200).send({ message: 'Internal server error and error' })
  }
}

module.exports = { home, register }
