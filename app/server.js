"use strict";

//모듈
const express = require('express')
const favicon = require('serve-favicon')
const path = require('path')
const app = express()
const home = require("./src/route")

//앱 세팅
app.set("views", "./src/front");
app.set("view engine", "ejs");

//아이콘 설정
app.use(favicon(path.join(__dirname, 'src/images', 'favicon.ico')));

app.use("/", home);

module.exports = app;