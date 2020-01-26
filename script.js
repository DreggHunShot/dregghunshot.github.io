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
let htb = document.querySelector('#htb')
let ctf = document.querySelector('#ctf')
let wargames = document.querySelector('#wargames')

let ctflink = document.createElement('a')
// upcoming CTF details
ctflink.textContent = "Metasploit CTF"
ctflink.href = 'https://metasploitctf.com/'
ctflink.target = '_blank'
ctflink.className = 'upcoming'

document.querySelector('#footer11').textContent = 'Upcoming CTF that we partake in:  '
document.querySelector('#ctflink').appendChild(ctflink)
document.querySelector('#footer12').textContent = ' - Start: 12:00 PM EST (noon) January 30th, 2020 - End: 11:59 AM EST February 3rd, 2020'
document.querySelector('#footer2').textContent = `© T4r0 ${moment().year()}`

// add event listeners
htb.addEventListener('click', function() {
    renderRelatedProjects(main_elements, htb.id)
})
ctf.addEventListener('click', function(){
    renderRelatedProjects(main_elements, ctf.id)
})
wargames.addEventListener('click', function(){
    renderRelatedProjects(main_elements, wargames.id)
})


