const getArtentries = "SELECT * FROM artentry JOIN image ON image.artentry_id = artentry.id";

const getArtentryById = "SELECT * FROM artentry WHERE id = $1 ";

module.exports = {
    getArtentries,
    getArtentryById,
};