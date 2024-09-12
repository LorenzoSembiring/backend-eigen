const MemberService = require('../service/memberService')

const memberService = new MemberService();

class MemberController {
    index = async(req, res, next) => {
        const data = await memberService.index()

        return res.status(200).json({ data: data })
    }

    borrowedBookCount = async(req, res, next) => {
        const member = req.user.user.code
        const data = await memberService.borrowedBookCount(member)
        return res.status(200).json({ data: data })
    }
    
}
module.exports = MemberController