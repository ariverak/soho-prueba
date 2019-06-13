<template>
  <div class="card" :class="{'mini-card' : $mq === 'md'}">
      <h1 class="title">{{coin.asset_id_base}}</h1>
      <div class="content-card">
          <h1 class="detail">{{coin.rate | dolar_format}}</h1>
          <span class="quote">{{" "+coin.asset_id_quote}}</span>
      </div>
      <img class="image" alt="" :src="coin.image" />
      <span class="caption">{{coin.time | last_transaction}}</span>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  props : ['coin'],
  filters : {
    dolar_format : function(rate){
      return new Intl.NumberFormat().format(rate)
    },
    last_transaction : function(datetime){
      return `Ultima transacción : ${moment(datetime).format("YYYY-MM-DD HH:mm:ss")}`
    }
  }
}
</script>


<style lang="sass">
.card
  padding : 5px 10px;
  position : relative;
  margin : 5px;
  width : 230px;
  height : 250px;
  background-color : $primary;
  border-radius : 10px;
  box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(185, 106, 106, 0.08)
  .title
  color : $textColor;
  text-align : center;
  .content-card
    flex : 1;
    display : flex;
    justify-content : center;
    align-items : center;
    .detail
      color : $textColor;
      text-align : center;
    .quote
      color : $textColor;
      font-style : italic;
      margin-left : 5px;
      text-align : center;
  .image 
    width : 50px;
    height : 50px;
    margin : 0 auto;
.mini-card 
  width : 280px;
  height : 320px;
.caption 
  font-size : 11px;
  color : lightgray;
  position : absolute;
  bottom : 15px;
  right : 15px;
</style>