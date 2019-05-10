<template >
    <div>
      <my-header></my-header>
      <header-pop class="header-pop"></header-pop>
    </div>
</template>

<script>
import myHeader from "../common/header"
import headerPop from "../common/header_pop"

export default {
    name:"home",
    components:{
      myHeader,
      headerPop
    },
    // template:"</home>",
}
</script>
<style>
html,body{
  position: relative;
}
.header-pop{
  position: fixed;
}
</style>