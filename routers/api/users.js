const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const gravatar = require('gravatar');
const jwt = require('jsonwebtoken');
const User  = require("../../models/User");
const keys = require("../../config/key")
const passport = require('passport');

//$route GET api/users/test
//desc 返回json数据
//@access public

router.get("/test" , (req,res) =>{
    res.json({mag: 'hello word'})
})


//$route POST api/users/register
//desc 返回json数据
//@access public

router.post("/register" , (req,res) =>{
    console.log(req.body)
    User.findOne({email: req.body.email})
        .then((user) => {
            if (user) {
                return res.status(400).json({email:'邮箱已被注册'});
            }else {
                const avatar = gravatar.url(req.body.email, {s: '200', r: 'pg', d: 'mm'});
                const newUser = new User ({
                    name: req.body.name,
                    email: req.body.email,
                    avatar,
                    password: req.body.password
                })
                bcrypt.genSalt(10, function(err, salt) {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                      if (err) throw err;
                      newUser.password = hash;
                        console.log(hash)
                      newUser
                        .save()
                        .then(user => res.json(user))
                        .catch(err => console.log("错误"));
                    });
                  });
            }
        })
        .catch(err =>{
            console.log("错误")
        })
})

//$route POST api/users/login
//desc 返回token jwt passport
//@access public
router.post("/login", (req,res) => {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({email})
        .then(user =>{
            if(!user){
                console.log("我是猪")
                return res.status(404).json({code: 404, msg:"用户名不存在"});
            }else{
                bcrypt.compare(password,user.password)
                      .then(isMatch => {
                          if(isMatch) {
                              const rule = {id: user.id, name: user.name}  //定义规则
                              jwt.sign(rule,keys.secret,{expiresIn: 3600}, (err,token) =>{
                                if(err) throw err;
                                res.json({
                                    success: true,
                                    token: 'Bearer '+token
                                })
                              })
                                //  jwt.sign("规则",'名字','过期时间','箭头函数')
                          }else{
                             return res.status(400).json({password:"密码错误"});
                          }
                      })
            }
        })
})

//$route POST api/users/current
//desc return current  user
//@access Private

router.get("/current",passport.authenticate('jwt',{session: false}),(req, res) => {
    res.json({
        id: req.user.id,
        name: res.user.name,
        avatar: res.user.avatar,
        email: res.user.email
    })
})


module.exports = router;