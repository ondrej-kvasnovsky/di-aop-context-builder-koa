class UserController {
  constructor(userService) {
    this.userService = userService
  }

  async show(ctx, id) {
    return this.userService.findById(id)
  }
}

module.exports = UserController
