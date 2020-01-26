
const clearButtons = function () {
    document.querySelector('#buttonWrapper').innerHTML = ''
}

const clearHeadbar = function () {
    document.querySelector('#headerBar').innerHTML = ''
}

const renderButtons = function (projectsarray) {
    clearButtons()
    clearHeadbar()
    projectsarray.forEach(function (project) {
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
    headerBar.appendChild(p)
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