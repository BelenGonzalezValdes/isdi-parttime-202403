var headTitle =document.querySelector('title')

headTitle.innerText = 'Cv - Belen Gonzalez'

var title = document.createElement ('h1')
title.innerText = headTitle.innerText

document.body.appendChild(title)

var introTitle = document.createElement('h2')
introTitle.innerText = "Intro"

document.body.appendChild(introTitle)

var introDescription = document.createElement ('p')
introDescription.innerText = "Descripcion larga y compleja bla bla bla"

document.body.appendChild(introDescription)

var certificationsTitle = document.createElement('h2')
certificationsTitle.innerText = 'Certifications'

document.body.appendChild(certificationsTitle)

var certificationsList = document.createElement('ul')
var certificationsItem1 = document.createElement ('li')
certificationsItem1.innerText = 'Curso de informática random'

certificationsList.appendChild(certificationsItem1)

var certificationsItem2 = document.createElement ('li')
certificationsItem2.innerText = 'Curso de informática edicion 2.0'

certificationsList.appendChild(certificationsItem2)

document.body.appendChild(certificationsList)

// TO DO continue and end CV (Experience, Projects, etc)

var experienceTitle = document.createElement('h2')
experienceTitle.innerText = 'Experience'

document.body.appendChild(experienceTitle)

var ExperienceList = document.createElement('ul')
var ExperienceItem1 = document.createElement ('li')
ExperienceItem1.innerText = 'Creación de contendio en un entorno creativo'

ExperienceList.appendChild(ExperienceItem1)
