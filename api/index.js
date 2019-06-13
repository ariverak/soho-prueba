import {API_KEY,HOST} from '../constants'
import {httpGet} from '../services/httpServices'
export async function fetchCoins(coins = []){
    return await new Promise(async resolve=>{
      let promises = coins.map(coin=>httpGet({url : HOST,param : `/${coin}/USD`,apiKey : API_KEY}))
      resolve(await Promise.all(promises));
    })
}