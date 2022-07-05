<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》from '《组件路径》';
import ListContainer from '@/pages/Home/ListContainer';
import Recommend from '@/pages/Home/Recommend';
import Rank from '@/pages/Home/Rank';
import Like from '@/pages/Home/Like';
import Floor from '@/pages/Home/Floor';
import Brand from '@/pages/Home/Brand';
export default {
  //import 引入的组件需要注入到对象中才能使用
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  },
  props: {},
  data() {
    //这里存放数据
    return {

    };
  },
  //计算属性类似于data 概念
  computed: {},
  //监控data 中的数据变化
  watch: {},
  //方法集合
  methods: {

  },
  //生命周期- 创建完成（可以访问当前this 实例）
  created() {

  },
  //生命周期- 挂载完成（可以访问DOM 元素）
  mounted() {

  },
  beforeCreate() { }, //生命周期- 创建之前
  beforeMount() { }, //生命周期- 挂载之前
  beforeUpdate() { }, //生命周期- 更新之前
  updated() { }, //生命周期- 更新之后
  beforeDestroy() { }, //生命周期- 销毁之前
  destroyed() { }, //生命周期- 销毁完成
  activated() { }, //如果页面有keep-alive 缓存功能，这个函数会触发
}
</script>
<style scoped>
</style>