const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/condi')
const User = mongoose.model('users', {login: String})

module.exports = class UserService {
  async findById (login) {
    try {
      const save = User.findOne({login})
      return save
    } catch (e) {
      console.log(e)
    }
  }

  async save (login) {
    try {
      const user = new User({login: login})
      let save = user.save()
      return await save
    } catch (e) {
      console.log(e)
    }
  }
}
