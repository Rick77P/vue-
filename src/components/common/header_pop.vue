<template>
    <div class="box">
        <div class="left">
          <div class="banner"></div>
        </div>
        <div class="right">

        </div>
    </div>
</template>

<script>
    export default {
        name: "header_pop",

    }
</script>

<style scoped>
.box{
  width: 466px;
  height: 256px;
  border-radius: 0 0 4px 4px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, .4);
  position: relative;
  background: #fff;
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
