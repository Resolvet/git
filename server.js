const express = require("express");
const app = new express();
const mongoose = require("mongoose"); 
const bodyParser = require("body-parser");
const passport = require("passport");


//引进users.js
const users = require("./routers/api/users");


//连接数据库
const db = require("./config/key").mongoURI;
mongoose.connect(db,{useNewUrlParser: true})
        .then(_ => {
            console.log('mongodb OK!');
        })
        .catch(err => {
            console.log(err+"错误");
        })

app.get("/", (req,res) => {
    res.send("Hello world!");
})

// 使用中间件实现允许跨域
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  next();
});

//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//初始化  passport
app.use(passport.initialize());
require("./config/passport")(passport);

// 使用routes
app.use("/api/users",users);


const port = process.env.PORT || 5000;

app.listen(port, _=>{
    console.log("启动成功！");
})