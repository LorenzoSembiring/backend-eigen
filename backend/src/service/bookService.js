const bookRepository = require('../repository/bookRepository')
const borrowRepository = require('../repository/borrowRepository')
const memberRepository = require('../repository/memberRepository')

class bookService{
    async index() {
        const data = await bookRepository.getAll()
        return data;
    }
    
    async available() {
        const data = await bookRepository.getAvailable()
        return data;
    }

    async borrow(member, book) {

        const selected = await bookRepository.select({code: book})
        const stock = selected[0].stock
        const selectedMember = await memberRepository.select({ code: member})
        const status = selectedMember[0].status
        const count = await memberRepository.getCountBorrowedBook(member)
        const penaltyDate = new Date(selectedMember[0].penalty_date)
        
        const today = new Date();
        const timeDifference = today.getTime() - penaltyDate.getTime();
        const dayDifference = timeDifference / (1000 * 3600 * 24);

        if(stock < 1) {
            return "book not available"
        }
        if(count > 2) {
            return "you already have 2 borrowed book"
        }
        if(status == "penalty" && 0 < dayDifference < 3) {
            return "you are on penalty"
        }
        const data = await borrowRepository.store(member, book, new Date())
        if(data) {
            await bookRepository.decreaseQuantity(book)
        }
        return data
    }

    async return(member, id) {
        const selected = await borrowRepository.select({id: id});
        if(selected[0].member_code != member) {
            return "you are not allowed to do this operation"
        }

        const borrow = await borrowRepository.select({id: id})
        const book = borrow[0].book_code
        
        const today = new Date();
        const borrowedDate = new Date(borrow[0].borrow_date)
        
        if (borrow[0].status != 'borrowed') {
            return "book is not in borrow"
        }
        
        const timeDifference = today.getTime() - borrowedDate.getTime();
        const dayDifference = timeDifference / (1000 * 3600 * 24);

        if(dayDifference >= 7) {
            await memberRepository.updateStatus(member, 'penalty');
            await memberRepository.addPenalty(member, today);
        }
        await borrowRepository.updateStatus(id, new Date())
        await bookRepository.increaseQuantity(book)
        
        return "book returned"
    }

    async inRentByUser(member) {
        const data = await borrowRepository.select({member_code: member})
        if(data) {
            return data
        }
    }
}
module.exports = bookService;
