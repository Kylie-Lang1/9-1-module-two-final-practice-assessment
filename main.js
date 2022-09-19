BASE_URL = `https://ghibliapi.herokuapp.com`

const select = document.querySelector(`#select`)
const info = document.querySelector(`#info`)
const personName = document.createElement(`h4`)
const age = document.createElement(`p`)
const eyes = document.createElement(`p`)
const hair = document.createElement(`p`)
const options = document.querySelectorAll(`option`)
const option = document.querySelector(`option`)
const ul = document.querySelector(`ul`)
const text = document.querySelector(`#shoutout`)
const submit = document.querySelector(`#submit`)
const form = document.querySelector(`form`)

let isSelected = ``

fetch (`${BASE_URL}/people`)
    .then (res => res.json())
    .then (res => {
        for (let i=0; i < res.length; i++){
            const person = res[i][`name`]
            const option = document.createElement(`option`)
            option.textContent = `${person}`
            select.append(option)

            select.addEventListener(`change`, (event) => {
                event.preventDefault()

                const index = event.path[0].selectedIndex

                if(index > 0){
                    info.append(personName, age, eyes, hair)
                    personName.textContent = `Name: ${res[index-1][`name`]}`
                    age.textContent = `Age: ${res[index-1][`age`]}`
                    eyes.textContent = `Eyes: ${res[index-1][`eye_color`]}`
                    hair.textContent = `Hair Color: ${res[index-1][`hair_color`]}`
                    isSelected = `yes`
                } else {
                    isSelected = `no`
                }
                // console.log(isSelected)
                if(isSelected === `no`){
                    const alert = document.createElement(`p`)
                    alert.textContent = `Please Select a Person`
                    alert.classList.add(`alert`)
                    select.after(alert)
                }
            })
        } 

        console.log(isSelected)
        

        form.addEventListener(`submit`, (event) => {
            event.preventDefault()

            const li = document.createElement(`li`)
            li.innerHTML = 
                `<p><strong>${personName.textContent.substring(6)}</strong>: ${event.target[0].value}</p>`
            ul.append(li)

            console.log(li.innerHTML)
            form.reset()
        })      
    })
    .catch (err => console.log(err))

