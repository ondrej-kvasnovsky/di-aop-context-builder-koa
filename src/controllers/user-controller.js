class UserController {
  constructor(userService) {
    this.userService = userService
  }

  async show(ctx, id) {
    const user = await this.userService.findById(id)
    ctx.body = user
  }
}

module.exports = UserController
