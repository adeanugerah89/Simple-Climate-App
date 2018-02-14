import axios from 'axios'

export const listClimate = (dataFromApi) => ({
    type: 'LIST_CLIMATE',
    payload: {
        list: dataFromApi
    }
})

export const searchClimate = (selectInput) => {
    return (dispatch) => {
        let APPID = "481e3bc28e5264e5607c2b65b449bfc1"
        axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${selectInput}&mode=json&units=metric&cnt=5&APPID=${APPID}`)
            .then(res => {
                let result = {
                    city: res.data.city.name,
                    list: []
                }
                res.data.list.forEach(dataVal => {
                    let variance = dataVal.temp.max - dataVal.temp.min
                    let timestamp = dataVal.dt;
                    let date = new Date(timestamp * 1000);
                    let iso = date.toISOString().match(/(\d{4}\-\d{2}\-\d{2})T(\d{2}:\d{2}:\d{2})/)

                    result.list.push({
                        day: iso[1],
                        temperature: dataVal.temp.day,
                        variance: +variance.toFixed(2)
                    })
                })
                let avgTemp = result.list.reduce((curVal, nextVal) => {
                    return curVal + nextVal.temperature
                }, 0)
                let newDataAvgTemp = avgTemp / result.list.length
                result.avgTemp = +newDataAvgTemp.toFixed(2)

                let avgVar = result.list.reduce((curVal, nextVal) => {
                    return curVal + nextVal.variance
                }, 0)
                let newDataAvgVar = avgVar / result.list.length
                result.avgVar = +newDataAvgVar.toFixed(2)

                dispatch(listClimate(result))
            })
            .catch(err => console.log(err))
    }
}