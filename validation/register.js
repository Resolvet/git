const validator  = require("validator");
const isValid = require('./is-empty')

module.exports = function validateRegisterInput (data) {
  let errors = {};
  console.log(data)
  if (!validator.isLength(data.name,{min: 5, max: 10})){
    errors.name = '名字的长度不能小于5位并且不能大于10位!';
  }


  return {
    errors,
    isValid: isEmpty(errors)
  }
}