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
            .then(res => dispatch(listClimate(res.data)))
            .catch(err => console.log(err))
    }
}