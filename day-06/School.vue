<template>
    <!-- 组件的模板 -->
    <div class="demo">
        <h2>学校名称: {{schoolName}}</h2>
        <h2>学校地址: {{address}}</h2>
        <button @click="showName">点我提示学校名</button>
    </div>
</template>

<script>
    export default {
        name: 'School',
        data: {
            schoolName: 'NCIAE',
            address: 'langfang'
        },
        methods: {
            showName() {
                alert(this.schoolName)
            }
        }, 
    }
</script>

<style>
/* 组件的样式 */
    .demo {
        background-color: orange;
    }
</style>
