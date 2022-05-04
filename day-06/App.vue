<template>
<!-- 模板内容 -->
  <div>
      <School></School>
      <Student></Student>
  </div>
</template>

<script>
    // 定义vue实例内部的东西
    // 引入组件
    import School from './School'
    import Student from './Student'

    export default {
        name: 'App',
        components: {
            School,
            Student
        }
    }
</script>

<style>
    /* 这里可以写样式 */
</style>