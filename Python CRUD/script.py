import psycopg2
import pickle



# Populated PostgreSQL Database with data from pickled artEntries object
    # pickled object is from https://github.com/sam-dp/JoJos-Art-Scraper-and-Viewer




##################################################
# --------------- Class Objects ---------------- #
##################################################

# artImg object, contains a string for both the source link and the alt text
class Artwork:
    imgSrc = ""
    imgAlt = ""

    def __init__(self, imgSrc, imgAlt):
        self.imgSrc = imgSrc
        self.imgAlt = imgAlt

# artEntry object, contains all information of an artwork entry including the artwork links, date, source title, and source image
class ArtEntry:
    artworkList = [] # list containing Artwork objects
    date = ""
    sourceTitle = ""
    sourceImgList = [] # list of Artwork objects (source images)
    
    def __init__(self, artworkList, date, sourceTitle, sourceImgList) :
        self.artworkList = artworkList
        self.date = date
        self.sourceTitle = sourceTitle
        self.sourceImgList = sourceImgList

    def __repr__(self):
        return f"{self.sourceTitle}"
    
DB_HOST = "localhost"
DB_NAME = "jojoart"
DB_USER = "postgres"
DB_PASS = "password"


allArtEntries = pickle.load(open("artEntriesData.p", "rb"))

conn = psycopg2.connect(dbname=DB_NAME, user=DB_USER, password=DB_PASS, host=DB_HOST)
cur = conn.cursor()


entryid = 1
for entry in allArtEntries :

    cur.execute("SET client_encoding = 'UTF8'")
    # INSERTS into artentry table
    #cur.execute("ALTER SEQUENCE artentry_id_seq RESTART WITH 1")
    #cur.execute("INSERT INTO artentry (name, date) VALUES (%s, %s)", (entry.sourceTitle, entry.date))

    # # INSERTS into image table
    #cur.execute("ALTER SEQUENCE image_id_seq RESTART WITH 1")
    # for image in entry.artworkList :
    #     cur.execute("INSERT INTO image (content, alt, artentry_id) VALUES (%s,%s,%s)", (image.imgSrc, image.imgAlt, entryid))
    
    # # # INSERTS into source table
    # cur.execute("ALTER SEQUENCE source_id_seq RESTART WITH 1")
    # for source in entry.sourceImgList :
    #     cur.execute("INSERT INTO source (content, alt, artentry_id) VALUES (%s,%s,%s)", (source.imgSrc, source.imgAlt, entryid))

    entryid += 1


conn.commit()

cur.close()
conn.close()

print("Complete")