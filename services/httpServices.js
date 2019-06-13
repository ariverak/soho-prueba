import axios from 'axios'

export function httpGet({url,param = "",apiKey}){
    return axios.get(url+param,{
        headers : {
            "X-CoinAPI-Key" : apiKey,
            Accept: 'application/json'
        }
    })
}
