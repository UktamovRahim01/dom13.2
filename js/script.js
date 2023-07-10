const URL = "https://dummyjson.com/users"
const box1 = document.querySelector('#twenty-five')
const box2 = document.querySelector('#fifty')
const box3 = document.querySelector('#others')
const form = document.forms.form
let users = []

form.onsubmit = (event) => {
    event.preventDefault()
    let user = {
        id: Math.round(Math.random()*10)
    }
    let fm = new FormData(event.target)

    fm.forEach((value, key) => {
        user[key] = value
    })

    users.push(user)
    console.log(users);
    event.target.reset()
}

fetch(URL)
    .then(res => res.json())
    .then(data => reload(data.users))

function reload(arr) {
    box1.innerHTML = ''
    box2.innerHTML = ''
    box3.innerHTML = ''

    for (item of arr) {
        let div = document.createElement('div')
        let name = document.createElement("div")
        let h3 = document.createElement('h3')
        let img = document.createElement('img')
        let p = document.createElement("p")

        name.classList.add("name")
        div.classList.add('box-item')

        h3.innerHTML = `${item.firstName} ${item.lastName} `
        img.src = item.image
        p.innerHTML = `Age: ${item.age}  <br> Gender: ${item.gender}  <br> Height ${item.height} <br> username: ${item.username}   <br> Email: ${item.email} <br> Phone: ${item.phone} `
        name.append(h3, img)
        div.append(name, p)

        if (item.age < 25) {
            box1.append(div)
        }
        else if (item.age > 25 && item.age <= 50) {
            box2.append(div)
        }
        else {
            box3.append(div)
        }
    }

}