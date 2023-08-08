const pool = require('../../db');
const queries = require('./queries');

const getArtentries = (req, res) => {
    pool.query(queries.getArtentries, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getArtentryById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getArtentryById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    })
}

module.exports = {
    getArtentries,
    getArtentryById,
};