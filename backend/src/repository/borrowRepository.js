const db = require('../../config/database')

class borrowRepository{
    static async getAll(){

        return await db.select().table('borrows');
        
    }

    static async store(member, book, date){
        return await db('borrows').insert({ book_code: book, member_code: member, status: "borrowed", borrow_date: date })
    }

    static async select({ id, book_code, member_code }) {
        const query = db('borrows');
    
        if (id) {
            query.where({ id });
        } else if (book_code) {
            query.where({ book_code });
        } else if (member_code) {
            query.where({ member_code });
        } else {
            return null;
        }
    
        return await query.select();
    }

    static async updateStatus(id, date) {
        return db('borrows').where('id', id).update({ status: "returned", return_date: date })
    }
}
module.exports = borrowRepository;