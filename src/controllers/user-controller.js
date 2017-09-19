class UserController {
  constructor(userService) {
    this.userService = userService
  }

  async show(ctx, login) {
    return this.userService.findById(login)
  }

  async insert(ctx, login) {
    return this.userService.save(login)
  }
}

module.exports = UserController
