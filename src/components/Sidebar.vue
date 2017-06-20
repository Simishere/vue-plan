<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h1 class="text-center">现有计划共需要</h1>
    </div>

    <div class="panel-body">
      <h1 class="text-center">{{timeUse}} 小时</h1>
    </div>

  </div>
</template>
<script>
    export default {
      name: 'Sidebar',
      computed: {
        timeUse() {
          return this.$store.state.totalTime
        }
//        palnDetail(){
//          return this.$store.state.list[0].comment
//        }
    }
    }
</script>
<style scoped>
  .text-center{
    font-size: 26px;
  }
  .panel-heading{
    background-color: #ffe3ed
  }
</style>
