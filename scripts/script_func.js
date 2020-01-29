
const clearButtons = function () {
    document.querySelector('#buttonWrapper').innerHTML = ''
}

const clearHeadbar = function () {
    document.querySelector('#headerBar').innerHTML = ''
}

const renderButtons = function (projectarray) {
    clearButtons()
    clearHeadbar()
    projectarray.forEach(function (project) {
        const button = document.createElement('button')
        button.textContent = project.title
        button.id = project.id
        button.className = 'mainButton'
        document.querySelector('#buttonWrapper').appendChild(button)

    })
}

const comingSoon = function (){
    clearHeadbar()
    let headerBar = document.querySelector('#headerBar')
    let p = document.createElement('p')
    p.textContent = 'This is empty, content is Coming Soon!'
    p.className = 'headertext'
    headerBar.appendChild(p)
}

const renderHeaderBar = function (projectarray, directorystruct) {
    clearHeadbar()
    projectarray.forEach(function (project){
        const headlink = document.createElement('a')
        headlink.textContent = project.title
        headlink.id = project.id
        headlink.className = 'headerlink'
        if (project.id === '#') {
            headlink.href = '#'
            headlink.className += ' noctf'
        } else {
            headlink.href = directorystruct + project.id + '.html'
        }
        
        let headerBar = document.querySelector('#headerBar')
        headerBar.appendChild(headlink)

    })
}

const renderRelatedProjects = function (projectarray, buttonid) {
    const project = projectarray.find(function (e) {
        return e.id === buttonid
    })

    let headerBar = document.querySelector('#headerBar')
    headerBar.innerHTML = ''
    project.relatedProjects.forEach(function (e) {
        let a = document.createElement('a')
        a.textContent = e.name
        a.href = e.link
        a.className = 'headerlink'
        headerBar.appendChild(a)
    })
}