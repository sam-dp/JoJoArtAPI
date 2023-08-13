const pool = require('../../db');
const queries = require('./queries');

const getArtentryById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getArtentryById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

module.exports = {
    getArtentryById,
};