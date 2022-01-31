const mongoose = require("mongoose"); //import mongoose

const movieSchema = new mongoose.Schema({
    "plot": {
        "type": "String"
    },
    "genres": {
        "type": [
            "String"
        ]
    },
    "runtime": {
        "type": "Number"
    },
    "cast": {
        "type": [
            "String"
        ]
    },
    "poster": {
        "type": "String"
    },
    "title": {
        "type": "String"
    },
    "fullplot": {
        "type": "String"
    },
    "languages": {
        "type": [
            "String"
        ]
    },
    "released": {
        "$date": {
            "type": "Date"
        }
    },
    "directors": {
        "type": [
            "String"
        ]
    },
    "rated": {
        "type": "String"
    },
    "awards": {
        "wins": {
            "type": "Number"
        },
        "nominations": {
            "type": "Number"
        },
        "text": {
            "type": "String"
        }
    },
    "lastupdated": {
        "type": "Date"
    },
    "year": {
        "type": "Number"
    },
    "imdb": {
        "rating": {
            "type": "Number"
        },
        "votes": {
            "type": "Number"
        },
        "id": {
            "type": "Number"
        }
    },
    "countries": {
        "type": [
            "String"
        ]
    },
    "type": {
        "type": "String"
    },
    "tomatoes": {
        "viewer": {
            "rating": {
                "type": "Number"
            },
            "numReviews": {
                "type": "Number"
            },
            "meter": {
                "type": "Number"
            }
        },
        "fresh": {
            "type": "Number"
        },
        "critic": {
            "rating": {
                "type": "Number"
            },
            "numReviews": {
                "type": "Number"
            },
            "meter": {
                "type": "Number"
            }
        },
        "rotten": {
            "type": "Number"
        },
        "lastUpdated": {
            "$date": {
                "type": "Date"
            }
        }
    },
    "num_mflix_comments": {
        "type": "Number"
    }
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie; 
