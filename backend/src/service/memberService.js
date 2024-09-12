const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const memberRepository = require('../repository/memberRepository')
class memberService {
    async index() {
        const data = await memberRepository.getAll()
        return data;
    }
    async borrowedBookCount(member) {
        const data = await memberRepository.getCountBorrowedBook(member)
        return data[0];
    }
}
module.exports = memberService;