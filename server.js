"use strict";

//모듈
const express = require('express')
const favicon = require('serve-favicon')
const path = require('path')
const app = express()
const home = require("./route")

//앱 세팅
app.set("views", "./front");
app.set("view engine", "ejs");

//아이콘 설정
app.use(express.static(path.join(__dirname, 'images')));
app.use(favicon(path.join(__dirname, 'images', 'favicon.ico')));

app.use("/", home);

module.exports = app;