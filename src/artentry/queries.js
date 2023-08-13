const getArtentryById = "SELECT artentry.name, artentry.date, COALESCE(images_data.images, '[]'::json) AS images, COALESCE(sources_data.sources, '[]'::json) AS sources FROM artentry LEFT JOIN ( SELECT image.artentry_id, json_agg(json_build_object('url', image.url, 'alt', image.alt)) AS images FROM image GROUP BY image.artentry_id ) AS images_data ON artentry.id = images_data.artentry_id LEFT JOIN ( SELECT source.artentry_id, json_agg(json_build_object('url', source.url, 'alt', source.alt)) AS sources FROM source GROUP BY source.artentry_id ) AS sources_data ON artentry.id = sources_data.artentry_id WHERE artentry.id = $1;"

module.exports = {
    getArtentryById,
};