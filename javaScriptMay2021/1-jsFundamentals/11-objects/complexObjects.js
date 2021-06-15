/*
OBJECTS
*/

let netflix = {
    id: 9,
    name: 'Super Store',
    season1: {
        seasonInfo: {
            episodeInfo: [
                {episode: 1, episodeName: 'Pilot'},
                {episode: 2, episodeName: 'Magazine Profile'},
                {episode: 3, episodeName: 'Shots and Salsa'},
                {episode: 4, episodeName: 'Mannequin'},
                {episode: 5, episodeName: 'Shoplifter'},
                {episode: 6, episodeName: 'Pilot'},
            ]
        }
    },
    season2: {},
    season3: {}
}

console.log(netflix);
console.log(netflix.season1);
console.log(netflix.season1.seasonInfo);
console.log(netflix.season1.seasonInfo.episodeInfo);
console.log(netflix.season1.seasonInfo.episodeInfo[3].episodeName); //outputs 'Mannequin'

//pick an episode to log in the terminal
//using dot notation, walk through the
//netflix object and print off both the
//episode number and the episode name

console.log(netflix.season1.seasonInfo.episodeInfo[4].episode, netflix.season1.seasonInfo.episodeInfo[4].episodeName);
//outputs '5 Shoplifter'


let netflix = {
    id: 9,
    likes: 932,
    name: "The Good Place",
    seasonInfo: {
        season1: {
            numberOfEpisodes: 5,
            episodeInfo: [{
                episode: 1,
                episodeName: "Pilot"
            }, {
                episode: 2,
                episodeName: "Flying"
            }, {
                episode: 3,
                episodeName: "Tahani Al-Jamil"
            }, {
                episode: 4,
                episodeName: "Jason Mendoza"
            }, {
                episode: 5,
                episodeName: "Category 55 Emergency Doomsday Crisis"
            }]
        },
        season2: {
            numberOfEpisodes: 6,
            episodeInfo: [{
                episode: 1,
                episodeName: "Everything is Great!"
            }, {
                episode: 2,
                episodeName: "Dance Dance Resolution"
            }, {
                episode: 3,
                episodeName: "Team Cockroach"
            }, {
                episode: 4,
                episodeName: "Existential Crisis"
            }, {
                episode: 5,
                episodeName: "The Trolley Problem"
            }, {
                episode: 6,
                episodeName: "Janet and Michael"
            }]
        },
        season3: {
            numberOfEpisodes: 5,
            episodeInfo: [{
                episode: 1,
                episodeName: "Everything Is Bonzer!"
            }, {
                episode: 2,
                episodeName: "The Brainy Bunch"
            }, {
                episode: 3,
                episodeName: "The Snowplow"
            }, {
                episode: 4,
                episodeName: "Jeremy Bearimy"
            }, {
                episode: 5,
                episodeName: "The Ballad of Donkey Doug"
            }]
        }
    },
    description: "Four people and their otherworldly frienemy struggle in the afterlife to define what it means to be good."
};


/* OBJECTS - PART two */

let netflix = {
    id: 9,
    name: "Super Store",
    season1: {
        seasonInfo: {
            episodeInfo: [
                { episode: 1, episodeName: "Pilot" },
                { episode: 2, episodeName: "Magazine Profile" },
                { episode: 3, episodeName: "Shots and Salsa" },
                { episode: 4, episodeName: "Mannequin" },
                { episode: 5, episodeName: "Shoplifter" },
                { episode: 6, episodeName: "Secret Shopper" },
                { episode: 7, episodeName: "Color Wars" },
                { episode: 8, episodeName: "Wedding Day Sale" },
                { episode: 9, episodeName: "All-Nighter" },
                { episode: 10, episodeName: "Demotion" },
                { episode: 11, episodeName: "Labor" }
            ]
        }
    },
    season2: {},
    season3: {}
};

//JSON -> JavaScript Object Notation

//JSON takes a JS object and converts to text and converts back to JS object */

//number and boolean represented in text but everything else
//in quotation marks
var json = {
    "workbench.colorTheme": "One Dark+ (Sublime)",
    "window.zoomLevel": 3,
    "files.exclude": {
        "**/.git": true,
        "**/.DS_Store": true,
        "**/*.js": {
            "when": "$(basename).ts"
        },
        "**/*.js.map": {
            "when": "$(basename)"
        }
    },
    "editor.fontFamily": "Monaco, 'Courier New', monospace",
    "editor.detectIndentation": false,
    "editor.letterSpacing": 0,
    "editor.tabSize": 2,
    "files.autoSave": "off",
    "editor.wordWrap": "on",
    "extensions.ignoreRecommendations": true,
    "[html]": {},
    "files.associations": {
        "*.html": "html",
        "*.js": "javascriptreact"
    },
    "html.format.indentInnerHtml": true,
    "editor.fontSize": 11,
    "liveServer.settings.donotShowInfoMsg": true,
    "liveServer.settings.port": 3500,
    "[javascriptreact]": {}
}


letspaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}
