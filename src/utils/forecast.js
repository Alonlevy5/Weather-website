const request = require('request')

const forcast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=83fc4fee614237f85d8337fbb869e9c0&query='+ latitude + ',' + longitude 

    request({ url, json:true }, (error, {body}) => {
        if(error){
            callback('Unable to connect to location services!', undefined)
        } else if (body.error){
            callback('Unable to find location', undefined)
        } else{
            callback(undefined,'The current humidity is ' + body.current.humidity +
            ' The current temprature is ' + body.current.temperature + ' And it feels like ' + body.current.feelslike)
        }
    })


}


module.exports = forcast