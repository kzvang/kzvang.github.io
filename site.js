const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

// Grab the div section using the id 'welcome'
const welcome = document.querySelector('#welcome')

// Create a header2 element (h2) and insert it into our div tag
const header = document.createElement('h2')
welcome.append(header)


// Check the time using the methods given and output the value that matches the time
if(isMorning)
{
    header.innerHTML = `Hello, good morning` 
}
else if(isAfternoon)
{
    header.innerHTML = `Hello, good afternoon`
}
else if(isEvening)
{
    header.innerHTML = `Hello, good evening.`
}


const key = "It's a secret to everybody."
const hidden = document.querySelector('#hidden')
const userInput = document.querySelector('#userinput')
const find = document.querySelector('#find')

find.addEventListener('click', () => {
    if (userInput.value === key)
    {
    hidden.textContent = localStorage.getItem(key)
    }
})

localStorage.setItem(key, '"Be the change that you wish to see in the world."' )


const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

showImages()


const prevButton = document.querySelector('#prev')
const nextButton = document.querySelector('#next')

prevButton.addEventListener('click', () => {
    
        currentImage = (currentImage - 1 + urls.length) % urls.length

    showImages()
})
setInterval(() => {
    prevButton.click()
   }, 5000)

nextButton.addEventListener('click', () => {
        currentImage = (currentImage + 1) % urls.length
        
    showImages()
})

setInterval(() => {
    nextButton.click()
   }, 5000)


// To-Do List functionality

const todoList = document.querySelector('.todo-list')
const input = document.querySelector('#new-todo')
const addButton = document.querySelector('#add')

const todos = JSON.parse(localStorage.getItem('todo-list')) || [
        { "text": "Buy milk", "completed": false },
        { "text": "Walk the dog", "completed": false },
        { "text": "Do homework", "completed": false }
    ]

const renderTodos = () => {


    //Clear the li's before we recreate them
    todoList.innerHTML = ''

    // Create and add new list items to the DOM
    todos.forEach(todo => {
        const li = document.createElement('li')
        li.textContent = todo.text
        todoList.append(li)
    })
}

renderTodos()

// Add a new item to the list
addButton.addEventListener('click', () => {
    const todoText = input.value.trim()
    if(!todoText) return
    

    todos.push({ text: todoText, completed: false })
    renderTodos()

    // Save the list to local storage
    localStorage.setItem('todo-list', JSON.stringify(todos))
    
    input.value = ''
    input.focus()
})