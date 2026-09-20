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