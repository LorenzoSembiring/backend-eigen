const db = require('../../config/database')

class memberRepository{
    static async getAll(){

        return await db.select().table('members');
        
    }

    static async getCountBorrowedBook(member){

        return await db('borrows').count('id', { as: "total_book_borrowed" }).where('member_code', member).andWhere('status', 'borrowed')
        
    }

    static async updateStatus(member, status) {
        return await db('members').where('code', member).update({status: status})
    }
    
    static async addPenalty(member, date) {
        return await db('members').where('code', member).update({penalty_date: date})
    }

    static async select({ code, name }) {
        const query = db('members');
    
        if (code) {
            query.where({ code });
        } else if (name) {
            query.where({ name });
        } else {
            return null;
        }
    
        return await query.select();
    }
}
module.exports = memberRepository;