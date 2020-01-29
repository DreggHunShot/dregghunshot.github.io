// TO DO: 
//
//
//

const main_elements = [{
    title: 'HTB',
    id: 'htb',
},
{
    title: 'CTF',
    id: 'ctf',
},
{
    title: 'Wargames',
    id: 'wargames',
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

        document.querySelector('#active').addEventListener('click', function () {
            comingSoon()
        })
        // rendering retired box difficulties
        document.querySelector('#retired').addEventListener('click', function () {
            renderHeaderBar([{ title: 'Easy', id: 'easy', }, { title: 'Medium', id: 'medium', }, { title: 'Hard', id: 'hard', }, { title: 'Insane', id: 'insane', },], '../../')

            document.querySelector('#back').addEventListener('click', function () {
                window.location = './index.html'
            })
        })
        document.querySelector('#back').addEventListener('click', function () {
            window.location = './index.html'
        })
    })

    //event listener for Challenges button
    document.querySelector('#challenges').addEventListener('click', function () {
        //Rendering active and passive buttons for challenges
        renderButtons([{ title: 'Active', id: 'active', }, { title: 'Retired', id: 'retired', }, { title: 'Back', id: 'back', }])

        document.querySelector('#active').addEventListener('click', function () {
            comingSoon()
        })
        //rendering reitred challenge cathegories
        document.querySelector('#retired').addEventListener('click', function () {
            renderHeaderBar([{ title: 'Reversing', id: 'reversing', }, { title: 'Crypto', id: 'crypto', }, { title: 'Stego', id: 'stego', }, { title: 'Pwn', id: 'pwn', },
            { title: 'Web', id: 'web', }, { title: 'Misc', id: 'misc', }, { title: 'Forensics', id: 'forensics', }, { title: 'Mobile', id: 'mobile', },
            { title: 'OSINT', id: 'osint', }], '../../')

            document.querySelector('#back').addEventListener('click', function () {
                window.location = './index.html'
            })

        })
        document.querySelector('#back').addEventListener('click', function () {
            window.location = './index.html'
        })
    })
    document.querySelector('#back').addEventListener('click', function () {
        window.location = './index.html'
    })

})

//event listener for CTF
ctf.addEventListener('click', function () {
    renderButtons([{ title: '2019', id: 'y2019', }, { title: '2020', id: 'y2020', }, { title: 'All-time', id: 'all-time', }, { title: 'Back', id: 'back', }])
    document.querySelector('#y2019').addEventListener('click', function () {
        renderHeaderBar([{title: '01', id: '#'},{title: '02', id: '#'},{title: '03', id: '#'},{title: '04', id: '#'},{title: '05', id: '#'},
        {title: '06', id: '#'}, {title: '07', id: '#'},{title: '08', id: '#'},{title: '09', id: '#'},{title: '10', id: 'm1019'},{title: '11', id: '#'},
        {title: '12', id: 'm1219'}], '../../')

    })
    document.querySelector('#y2020').addEventListener('click', function () {
        renderHeaderBar([{title: '01', id: 'm0120'},{title: '02', id: 'm0220'},{title: '03', id: 'm0320'},{title: '04', id: 'm0420'},{title: '05', id: 'm0520'},
        {title: '06', id: 'm0620'}, {title: '07', id: 'm0720'},{title: '08', id: 'm0820'},{title: '09', id: 'm0920'},{title: '10', id: 'm1020'},{title: '11', id: 'm1120'},
        {title: '12', id: 'm1220'}], '../../')
    })
    document.querySelector('#all-time').addEventListener('click', function () {
        comingSoon()

    })
    document.querySelector('#back').addEventListener('click', function () {
        window.location = './index.html'
    })
})

//event listener for wargames
wargames.addEventListener('click', function () {
    renderButtons([{ title: 'Overthewire', id: 'overthewire', }, { title: 'Back', id: 'back', }])
    document.querySelector('#overthewire').addEventListener('click', function () {
        comingSoon()

    })
    document.querySelector('#back').addEventListener('click', function () {
        window.location = './index.html'
    })
})

