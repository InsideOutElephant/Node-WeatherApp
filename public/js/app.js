console.log('Client side javascript file is loaded!')
const weatherForm = document.querySelector('form')
const locationPara = document.querySelector('#weatherLocation')
const forecastPara = document.querySelector('#forecast')

weatherForm.addEventListener('submit', (e) => {
    console.log('testing')
    e.preventDefault()
    locationPara.textContent = 'Loading...'
    const location = document.querySelector('input').value
    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error){
                console.log(data.error)
                locationPara.textContent = data.error
            } else {
                console.log(data.location)
                console.log(data.forecast)
                locationPara.textContent = data.location
                forecastPara.textContent = data.forecast
            }
        })
    })
})