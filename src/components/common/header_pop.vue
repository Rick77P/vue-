<template>
    <div :class="this.$store.state.headerStore.styleH"  v-show="this.$store.state.headerStore.gameH">
        <div class="left">
          <div class="banner"></div>
        </div>
        <div class="right">

        </div>
    </div>
</template>

<script>
    export default {
        name: "headerPop",
        data(){
          return{
              style:'box game',
              show:true
          }
        },

        
    }
</script>

<style scoped>
.box{
  position:fixed;
  width: 466px;
  height: 256px;
  border-radius: 0 0 4px 4px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, .4);
  position: relative;
  background: #fff;
}
.game{
  left:170px;

}

.live{
  left: 240px;
}

  .left{
    width: 265px;
    margin: 12px 0 0 0;
    float: left;
  }
  .banner {
  width: 240px;
  height: 128px;
  margin-left: 12px;
  }

</style>
