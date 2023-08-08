const getArtentries = "SELECT * FROM artentry";
const getArtentryById = "SELECT * FROM artentry WHERE id = $1";

module.exports = {
    getArtentries,
    getArtentryById,
};