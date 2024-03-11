"use strict";

const home = (req, res) => {
  res.render("main/main");
}

const login = (req, res) => {
  res.render("login/login");
}

module.exports = {
  home,
  login,
}