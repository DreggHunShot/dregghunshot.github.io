// TO DO: make related project string array into an object array and put the link in too with the title so the onclick will redirect to the right place
// addNewProject(title) függvény
// addNewRelatedProject(title, ['relatedproj1', relatedproj2])

// Make functions for every main button, when we press it call clear first, then render the right buttons, all buttons stored in different arrays.
// change the current render buttons to render main buttons and call it on every 'back' button press (first call clear of course)
// Add render head bar to the right buttons
// 
const main_elements = [{
    title: 'HTB',
    id: 'htb',
    related: [{
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
    related: [{
        name: '',
        link: ''
    }, {
        name: '',
        link: ''
    }, {
        name: '',
        link: ''
    }, {
        name: '',
        link: ''
    }]
},
{
    title: 'Wargames',
    id: 'wargames',
    related: [{
        name: '',
        link: '/link3'
    }, {
        name: '',
        link: ''
    }, {
        name: '',
        link: ''
    }, {
        name: '',
        link: ''
    }, {
        name: '',
        link: ''
    }]
}]

const htb_elements = [{
    title: 'Boxes',
    id: 'boxes',
},
{
    title: 'Challenges',
    id: 'challenges',
},
{
    title: 'Back',
    id: 'back',
}]

const ctf_elements = [{
    title: '2019',
    id: 'y2019',
},
{
    title: '2020',
    id: 'y2020',
},
{
    title: 'Back',
    id: 'back',
}]

const wargames_elements = [{
    title: 'Overthewire',
    id: 'overthewire',
},
{
    title: 'Back',
    id: 'back',
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
htb.addEventListener('click', function () {
    //rendering HTB buttons
    renderButtons([{ title: 'Boxes', id: 'boxes', }, { title: 'Challenges', id: 'challenges', }, { title: 'Back', id: 'back', }])
    //event listener for Boxes button
    document.querySelector('#boxes').addEventListener('click', function () {
        //Rendering active and passive buttons for boxes
        renderButtons([{ title: 'Active', id: 'active', }, { title: 'Retired', id: 'retired', }, { title: 'Back', id: 'back', }])


        document.querySelector('#back').addEventListener('click', function () {
            window.location = './index.html'
        })
    })
    //event listener for Challenges button
    document.querySelector('#challenges').addEventListener('click', function () {
        //Rendering active and passive buttons for challenges
        renderButtons([{ title: 'Active', id: 'active', }, { title: 'Retired', id: 'retired', }, { title: 'Back', id: 'back', }])


        document.querySelector('#back').addEventListener('click', function () {
            window.location = './index.html'
        })
    })
    document.querySelector('#back').addEventListener('click', function () {
        window.location = './index.html'
    })

})
ctf.addEventListener('click', function () {
    renderButtons(ctf_elements)
    document.querySelector('#y2019').addEventListener('click', function () {

    })
    document.querySelector('#y2020').addEventListener('click', function () {

    })
    document.querySelector('#back').addEventListener('click', function () {
        window.location = './index.html'
    })
})
wargames.addEventListener('click', function () {
    renderButtons(wargames_elements)
    document.querySelector('#overthewire').addEventListener('click', function () {
        comingSoon()

    })
    document.querySelector('#back').addEventListener('click', function () {
        window.location = './index.html'
    })
})


