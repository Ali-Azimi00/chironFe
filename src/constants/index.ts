import{
    muscle,
    run,
    pullup
}from '../assets/icons'


const tasks=[
    {
        name: "pullup",
        icon: pullup
    },
    {
        name: "pushup",
        icon: muscle
    },
    {
        name: "run",
        icon: run
    }
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




export {navLinks, tasks}