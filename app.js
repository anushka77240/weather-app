const request = require('postman-request')
const api_key = '32e06eaffa8b2eb06f3269752688ab0f'
const query = process.argv[2]
const url = `http://api.weatherstack.com/current?access_key=${api_key}&query=${query}`


request({url,json:true},(error,res,data)=>{

    if(error){
        console.log('Connectivity Error')
    }
    else if(data.error){
        console.log('Check the Location')
    }
    else{
        console.log(`The Temperature in ${data.location.name},${data.location.country} is ${data.current.temperature} degrees`)
    }
})
