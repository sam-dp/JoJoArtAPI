const getArtentries = "SELECT * FROM artentry JOIN image ON image.artentry_id = artentry.id";


const getArtentryById = "SELECT ae.name, ae.date, COALESCE(images_data.images, '[]'::json) AS images, COALESCE(sources_data.sources, '[]'::json) AS sources FROM artentry ae LEFT JOIN ( SELECT image.artentry_id, json_agg(json_build_object('url', image.url, 'alt', image.alt)) AS images FROM image GROUP BY image.artentry_id ) AS images_data ON ae.id = images_data.artentry_id LEFT JOIN ( SELECT source.artentry_id, json_agg(json_build_object('url', source.url, 'alt', source.alt)) AS sources FROM source GROUP BY source.artentry_id ) AS sources_data ON ae.id = sources_data.artentry_id WHERE images_data.artentry_id = $1;"
//const getArtentryById = "SELECT artentry.name, artentry.date, json_agg(entry_info) AS entries FROM (SELECT artentry.id, json_build_object('images', json_agg (json_build_object('url', image.url, 'alt', image.alt)),'sources', json_agg(json_build_object('url', source.url, 'alt', source.alt))) AS entry_info FROM artentry LEFT JOIN image ON artentry.id = image.artentry_id LEFT JOIN source ON artentry.id = source.artentry_id WHERE image.artentry_id = $1 GROUP BY artentry.id) AS entry_data JOIN artentry ON entry_data.id = artentry.id GROUP BY artentry.id, artentry.name, artentry.date";
//const getArtentryById = "SELECT artentry.name, artentry.date, json_agg(json_build_object('url', image.url, 'alt', image.alt)) AS images FROM artentry LEFT JOIN image ON artentry.id = image.artentry_id WHERE image.artentry_id = $1 GROUP BY artentry.id;";
// SELECT * FROM artentry WHERE id = $1 
// SELECT * FROM artentry JOIN image ON image.artentry_id = artentry.id WHERE artentry.id = $1;


module.exports = {
    getArtentries,
    getArtentryById,
};