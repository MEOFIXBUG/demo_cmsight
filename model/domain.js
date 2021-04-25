const db = require('../db');
const tb = 'domains';
module.exports = {
    getURLByID: async (id) => {
        const sql = `SELECT  *
                     FROM ${tb} i              
                     WHERE i.ID= ${id}`;
        const rows = await db.load(sql);
        return rows;
    },
    getAllURL: async () => {
        const sql = `SELECT  *
                     FROM ${tb}`;
        const rows = await db.load(sql);
        return rows;
    }
};
