const AuthService = require('../service/authService')
const authService = new AuthService();

class authController {
    login = async(req, res, next) => {
        const code = req.body.code
        const password = req.body.password
        const data = await authService.login(code, password)

        return res.status(200).json({ data: data})
    }
}
module.exports = authController