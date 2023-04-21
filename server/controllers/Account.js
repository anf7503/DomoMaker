const models = require('../models');

const { Account } = models;

const loginPage = (res, req) => res.render('login');

const signupPage = (res, req) => res.render('signup');

const logout = (res, req) => res.redirect('/');

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
};
