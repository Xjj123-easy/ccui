<template>
    <el-button @click="clicks">{{msg}}</el-button>
</template>
<style lang="less" scoped>

</style>
<script>
export default {
    name:"aButton",
    setup(props,context) {
      const clicks=()=>{
          context.emit('clicks', '1111')
      }
      return{
        clicks
      }
    },
    props:['msg']
}
</script>