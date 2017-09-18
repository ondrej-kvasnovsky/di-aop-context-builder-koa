const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/condi')
const User = mongoose.model('users', {name: String})

module.exports = class UserService {
  async findById (id) {
    try {
      const user = new User({name: 'Zildjian'})
      let save = user.save()
      console.log(save)
      const x = await save
      console.log(x)
      return x
    } catch (e) {
      console.log(e)
    }
  }

  async save (name) {
    try {
      const user = new User({name: 'Zildjian'})
      let save = user.save()
      console.log(save)
      const x = await save
      console.log(x)
      return x
    } catch (e) {
      console.log(e)
    }
  }
}
