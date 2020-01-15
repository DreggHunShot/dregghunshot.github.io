// TO DO: make related project string array into an object array and put the link in too with the title so the onclick will redirect to the right place
// addNewProject(title) függvény
// addNewRelatedProject(title, ['relatedproj1', relatedproj2])
const main_elements = [{
    title: 'HTB',
    id: 'htb',
    relatedProjects: [{
        name: '',
        link: ''
    },
    {
        name: '',
        link: ''
    }]
},
{
    title: 'CTF', 
    id: 'ctf',
    relatedProjects: [{
        name: '',
        link: ''
    },{
        name: '',
        link: ''
    },{
        name: '',
        link: ''
    },{
        name: '',
        link: ''
    }]
},
{
    title: 'Wargames',
    id: 'wargames',
    relatedProjects: [{
        name: '',
        link: '/link3'
    },{
        name: '',
        link: ''
    },{
        name: '',
        link: ''
    },{
        name: '',
        link: ''
    },{
        name: '',
        link: ''
    }]
}]


// render the buttons in the middle
renderButtons(main_elements)


// get the html elements
let jsBoot = document.querySelector('#jsBoot')
let netacademia = document.querySelector('#netacademia')
let jsGames = document.querySelector('#jsGames')

let ctflink = document.createElement('a')
// upcoming CTF details
ctflink.textContent = " Insomni'hack"
ctflink.href = 'https://teaser.insomnihack.ch/'
ctflink.target = '_blank'
ctflink.className = 'upcoming'

document.querySelector('#footer11').textContent = 'Upcoming CTF that we partake in:  '
document.querySelector('#ctflink').appendChild(ctflink)
document.querySelector('#footer12').textContent = ' - 2020.01.18'
document.querySelector('#footer2').textContent = `© T4r0 ${moment().year()}`

// add event listeners
jsBoot.addEventListener('click', function() {
    renderRelatedProjects(main_elements, jsBoot.id)
})
netacademia.addEventListener('click', function(){
    renderRelatedProjects(main_elements, netacademia.id)
})
jsGames.addEventListener('click', function(){
    renderRelatedProjects(main_elements, jsGames.id)
})


