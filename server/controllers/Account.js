const models = require('../models');
const Account = models.Account;

const loginPage = (res, req) => {
  return res.render('login');
};

const signupPage = (res, req) => {
  return res.render('signup');
};

const logout = (res, req) => {
  return res.redirect('/');
};

const login = (res, req) => {
  
};

const signup = (res, req) => {
  
};

module.exports = {
    loginPage,
    signupPage,
    login,
    logout,
    signup,
}