import {
    coffee,
    tea,
    flask,
    meditate,
    muscle,
    run,
    pullup,
    book,
    yyMind,
    yoga,
    lotus,
    cycling,
    walk,
    daytrip,
    network,
    album,
    music,
    climbing,
    hiking,
    sunset,
    chess,
    beagle,
    cat,
    chat,
    coding,
    pawprint,
    spanish,
    suitcase,
    travel


} from '../assets/icons'


const tasks = [
    {
        name: "pullup",
        icon: pullup,
        category:"physical"
    },
    {
        name: "physical",
        icon: muscle,
        category:"category"
    },
    {
        name: "run",
        icon: run,
        category:"physical"
    },
    {
        name: "water",
        icon: flask,
        category:"spirit"
    },
    {
        name: "coffee",
        icon: coffee,
        category:"spirit"
    },
    {
        name: "tea",
        icon: tea,
        category:"spirit"
    },
    {
        name: "book",
        icon: book,
        category:"mind"
    },
    {
        name: "meditate",
        icon: meditate,
        category:"spirit"
    },
    {
        name: "yoga",
        icon: yoga,
        category:"physical"
    },
    {
        name: "mind",
        icon: yyMind,
        category:"category"
    },


    {
        name: "spirit",
        icon: lotus,
        category: 'category'
    },
    {
        name: "cycling",
        icon: cycling,
        category:"spirit"
    },
    {
        name: "walk",
        icon: walk
    },
    {
        name: "daytrip",
        icon: daytrip,
        category:"spirit"

    },
    {
        name: "network",
        icon: network,
        category:"spirit"
    },
    {
        name: "album",
        icon: album,
        category:"spirit"
    },
    {
        name: "music",
        icon: music,
        category: "spirit"
    },
    {
        name: "climbing",
        icon: climbing,
        category:"physical"
    },
    {
        name: "hiking",
        icon: hiking,
        category:"physical"
    },
    {
        name: "sunset",
        icon: sunset,
        category:"spirit"
    },
    {
        name: "chess",
        icon: chess,
        category: "mind"
    },
    {
        name: "dog",
        icon: beagle,
        category:"spirit"
    },
    {
        name: "cat",
        icon: cat,
        category:"spirit"
    },
    {
        name: "coding",
        icon: coding,
        category: "mind"
    },
    {
        name: "spanish",
        icon: spanish,
        category: "mind"
    },
    {
        name: "animals",
        icon: pawprint,
        category: null
    },
    {
        name: "suitcase",
        icon: suitcase,
        category:"spirit"
    },
    {
        name: "travel",
        icon: travel,
        category:"spirit"
    },
    {
        name: "chat",
        icon: chat,
        category: "mind"
    },
]

const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Skills",
    },
    {
        id: "contact",
        title: "Contact",
    },
];




export { navLinks, tasks }