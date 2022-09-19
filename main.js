BASE_URL = `https://ghibliapi.herokuapp.com`

const select = document.querySelector(`#select`)
const info = document.querySelector(`#info`)
const personName = document.createElement(`h4`)
const age = document.createElement(`p`)
const eyes = document.createElement(`p`)
const hair = document.createElement(`p`)
const options = document.querySelectorAll(`option`)
const ul = document.querySelector(`ul`)

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
                console.log(event)

                const index = event.path[0].selectedIndex

                info.append(personName, age, eyes, hair)
                personName.textContent = `Name: ${res[index-1][`name`]}`
                age.textContent = `Age: ${res[index-1][`age`]}`
                eyes.textContent = `Eyes: ${res[index-1][`eye_color`]}`
                hair.textContent = `Hair Color: ${res[index-1][`hair_color`]}`
            })
        }

        
    })
    .catch (err => console.log(err))

