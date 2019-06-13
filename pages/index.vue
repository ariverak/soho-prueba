<template>
  <section class="root" :class="{'mini-root' : $mq === 'md'}">
    <div class="cardsContainer" :class="{'centered' : $mq === 'md'}">
      <div v-for="coin in coins" v-bind:key="coin.time">
        <CoinCard :coin="coin" />
      </div>
    </div>
    <br/>
    <Footer />
  </section>
</template>

<script>
  import CoinCard from '../components/CoinCard'
  import Footer from '../components/Footer'
  import {fetchCoins} from '../api'
  import {TOP_COINS} from '../constants'
  export default {
    components : {
      CoinCard,
      Footer
    },
    data : ()=>({
      coins : []
    }),
    methods : {
      getCoinsInfo : async function(){
        try {
          let loadingToast = this.$toast.show('Cargando...');
          let responses = await fetchCoins(TOP_COINS.map(coin=>coin.name));
          loadingToast.remove()
          let coins = [];
          responses.forEach((response,i)=>{
            if(!this.isSuccessFetch(response.status)) {
              this.$toast.error(`Algo a fallado con ${TOP_COINS[i].name}`,{duration : 1000})
              return;
            }
            coins.push({...response.data,image : TOP_COINS[i].image});
          })
          this.coins = coins;
          this.$toast.success('Lista de criptos cargadas',{duration : 1000})
        }catch(err){
          console.log(err)
        }
      },
      isSuccessFetch : function(status){
        return status === 200;
      }
    },
    mounted : async function(){
      this.getCoinsInfo()
    }
  }
</script>

<style lang="sass">
.root 
	padding: 20px 250px 
.mini-root 
  padding: 20px 100px 
.cardsContainer 
  min-height : 250px
  display: flex 
  flex-wrap: wrap 
  justify-content: space-between 
.centered 
  justify-content: center 
</style>