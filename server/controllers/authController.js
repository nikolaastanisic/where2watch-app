const User = require("../models/user");
const { hashPassword, comparePassword} = require('../helpers/auth')
const jwt = require('jsonwebtoken');
const sign = (req, res) => {
  res.json("sign is working");
};
const logout = (req, res) => {
  console.log('tralala', res)
  res.cookie('token', '', { maxAge: 1})
  res.redirect('/Home')
}
// register endpoint
const SignInPage = async (req, res) => {
  try {
    const { email, password, repeatPassword, username, name } = req.body;
    if (!(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email))) return res.json({
        error: 'Invalid email'
    })
    const usernameExist = await User.findOne({ username });
    if (usernameExist) {
      return res.json({
        error: "Username is taken already",
      });
    }
    // Check if email is entered.
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "Email is taken already",
      });
    }
    if (!name) {
      return res.json({
        error: "Name is required!"
      })
    }
    if (!username) {
      return res.json({
        error: "Username is required!"
      })
    }
    // Check if password is entered.
    if (!password || !/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#\$%\^&\*]{6,}$/.test(password)) {
      return res.json({
         error: "Password is required and should be at least 6 characters long, include at least one uppercase letter, one lowercase letter and one digit.",
      });
     }
     
    if (!repeatPassword || repeatPassword.length < 5) {
        return res.json({
          error: "Password is required and should be at least 6 characters long",
        });
      }
    if (password !== repeatPassword) {
        return res.json({
            error: "Password does not match"
        })
     }
     const hashedPassword = await hashPassword(password)
    const user = await User.create({
      email,
      password: hashedPassword,
      repeatPassword,
      username,
      name
    });
    return res.json(user);
  } catch (error) {
    console.log(error);
  }

};
// LOGIN ENDPOINT
const SignInPage2 = async (req, res) => {
try {
  const {email, password} = req.body;
  const user = await User.findOne({email});
  if(!user) {
    return res.json({
      error: 'No user found'
    })
  }
  const match = await comparePassword(password, user.password)
  if(match) {
jwt.sign({email: user.email, id: user._id,name: user.name, username: user.username}, process.env.JWT_SECRET,{},(err, token) => {res.cookie('token', token).json(user)})  }
} catch (error) {
  console.log(error)
}

}
const getProfile =(req, res) => {
  const {token} = req.cookies
  if(token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
      if(err) throw err;
      res.json(user)
    })
   
  } else {
    res.json(null)
  }
}

module.exports = {
  sign,
  SignInPage,
  SignInPage2,
  getProfile,
  logout
};

