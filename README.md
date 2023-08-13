# JoJoArtAPI
JoJo Art API is a simple Web API designed for the purposes of a Public GET-only API. It connects to a local ```PostgreSQL``` database containing artwork and its relevant information and returns information in a ```JSON``` format from a single endpoint ```localhost:3000/api/artentry/:id```.

Data for the database was adapted from a [previous project](https://github.com/sam-dp/JoJos-Art-Scraper-and-Viewer), using a ```Python``` script with ```Psycopg``` for CRUD operations.

All artwork content is sourced from the [JoJo's Bizarre Encyclopedia - JoJo Wiki](https://jojowiki.com/Art_Gallery) website.

--- 

### Built with
API
* [NodeJS](https://nodejs.org/en) - Built with Node
* [ExpressJS](https://expressjs.com/) - Web Application Framework
* [node-postgres](https://node-postgres.com/) - Interacting with PostgreSQL database

Database
* [PostgreSQL](https://www.postgresql.org/) - Database
* [Psycopg](https://pypi.org/project/psycopg2/) - Python CRUD

---

### Example

GET Request

``` localhost:3000/api/artentry/873 ```

Response

```
[
    {
        "name": "Ultra Jump 2021 Issue #1 (Cover)",
        "date": "December 19, 2020",
        "images": [
            {
                "url": "https://static.jojowiki.com/images/7/77/latest/20210824002735/JJL_Postcard_1.png",
                "alt": "JJL Postcard 1.png"
            },
            {
                "url": "https://static.jojowiki.com/images/1/17/latest/20230707084133/UJ_Jan2021_Clean_LQ.jpg",
                "alt": "UJ Jan2021 Clean LQ.jpg"
            }
        ],
        "sources": [
            {
                "url": "https://static.jojowiki.com/images/2/28/latest/20201217115957/Ultra_Jump_January_2021.jpg",
                "alt": "Ultra Jump January 2021.jpg"
            }
        ]
    }
]
```
