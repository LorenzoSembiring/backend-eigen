const db = require('../../config/database')

class bookRepository{
    static async getAll(){

        return await db.select().table('books');
        
    }

    static async getAvailable(){

        return await db('books').where('stock', '>', 0);
        
    }

    static async select({ code, title }) {
        const query = db('books');
    
        if (code) {
            query.where({ code });
        } else if (title) {
            query.where({ title });
        } else {
            return null;
        }
    
        return await query.select();
    }

    static async decreaseQuantity(book) {
        const selected = await this.select({ code: book})
        const stock = selected[0].stock
        return await db('books').where('code', book).update({stock: stock - 1})
    }
    
    static async increaseQuantity(book) {
        const selected = await this.select({ code: book})
        const stock = selected[0].stock
        return await db('books').where('code', book).update({stock: stock + 1})
    }
}
module.exports = bookRepository;