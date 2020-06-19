'use strict'
console.log(123)
// const svgCaptcha = require('svg-captcha')
const Controller = require('egg').Controller
 
class UtilController extends Controller {
  async captcha() {
    // const captcha = svgCaptcha.create()
    console.log(captcha)
    this.ctx.body = 'captcha'
  }
}

module.exports = UtilController

