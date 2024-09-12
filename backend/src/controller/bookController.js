const BookService = require('../service/bookService')
const bookService = new BookService();

class bookController {
    index = async(req, res, next) => {
        const data = await bookService.index()

        return res.status(200).json({ data: data })
    }
    available = async(req, res, next) => {
        const data = await bookService.available()

        return res.status(200).json({ data: data })
    }
    borrow = async(req, res, next) => {
        const member = req.user.user.code
        const book = req.body.book
        try {
            const data = await bookService.borrow(member, book)
            return res.status(200).json({ data: data})
        } catch (err) {
            return res.status(500).json({ code: 500, status: 'fail', error: err.message})
        }
    }
    return = async(req, res, next) => {
        const member = req.user.user.code
        const id = req.query.id
        try {
            const data = await bookService.return(member, id)
            return res.status(200).json({ data: data})
        } catch (err) {
            return res.status(500).json({ code: 500, status: 'fail', error: err.message})
        }
    }
    inRent = async(req, res, next) => {
        const member = req.user.user.code
        try {
            const data = await bookService.inRentByUser(member)
            return res.status(200).json({ data: data})
        } catch (err) {

            return res.status(500).json({ code: 500, status: 'fail', error: err.message})
        }
    }
}
module.exports = bookController