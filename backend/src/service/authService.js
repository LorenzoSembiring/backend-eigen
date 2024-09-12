const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const memberRepository = require("../repository/memberRepository");
const port = process.env.PORT;

class authService {
  async login(code, password) {
    const data = await memberRepository.select({ code: code });
    if (data[0]) {
      const token = jwt.sign(
        {
          user: { code: data[0].code, name: data[0].name },
        },
        process.env.JWT_SECRET
      );
      const isPasswordCorrect = await bcrypt.compare(
        password,
        data[0].password
      );
      if (!isPasswordCorrect) {
        return "code or password incorrect";
      }
      return { user: { code: data[0].code, name: data[0].name }, token };
    } else {
      return "code or password incorrect";
    }
  }
  async checkToken(req, res, next) {
		try {
			const authHeader = req.headers.authorization;
	
			if (!authHeader || !authHeader.startsWith('Bearer ')) {
				return res.status(401).json({ code: 401, status: "unauthorized", message: "Token missing or malformed" });
			}
	
			const token = authHeader.split(" ")[1];
	
			const data = await jwt.verify(token, process.env.JWT_SECRET);
	
			if (!data) {
				return res.status(401).json({ code: 401, status: "unauthorized" });
			}
	
			req.user = data;
			
			next();
	
		} catch (error) {
			return res.status(401).json({ code: 401, status: "unauthorized", message: "Invalid token", error: error.message });
		}
	}	
}
module.exports = authService;
