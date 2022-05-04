<template>
    <!-- 组件的模板 -->
    <div class="demo">
        <h2>学生姓名: {{name}}</h2>
        <h2>学生年龄: {{age}}</h2>
        <button @click="showName">点我提示姓名</button>
    </div>
</template>

<script>
    export default {
        name: 'Student',
        data: {
            name: 'tyrantlucifer',
            age: 26
        },
        methods: {
            showName() {
                alert(this.name)
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
