<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <h2 class="all">全部商品分类</h2>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
      <div class="sort">
        <div
          class="all-sort-list2"
          @click="goSearch"
        >
          <div
            class="item"
            v-for="item in categoryList"
            :key="item.categoryId"
          >
            <h3>
              <a
                :data-categoryname="item.categoryName"
                :data-category1id="item.categoryId"
              >{{item.categoryName}}</a>
            </h3>
            <div class="item-list clearfix">
              <div
                class="subitem"
                v-for="item2 in item.categoryChild"
                :key="item2.categoryId"
              >
                <dl class="fore">
                  <dt>
                    <a
                      :data-categoryname="item2.categoryName"
                      :data-category2id="item2.categoryId"
                    >{{item2.categoryName}}</a>
                  </dt>
                  <dd>
                    <em
                      v-for="item3 in item2.categoryChild"
                      :key="item3.categoryId"
                    >
                      <a
                        :data-categoryname="item3.categoryName"
                        :data-category3id="item3.categoryId"
                      >{{item3.categoryName}}</a>
                    </em>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》from '《组件路径》';
import { mapState } from 'vuex';
export default {
  //import 引入的组件需要注入到对象中才能使用
  name: 'TypeNav',
  components: {},
  props: {},
  data() {
    //这里存放数据
    return {

    };
  },
  //计算属性类似于data 概念
  computed: {
    ...mapState({
      categoryList: (state) => state.home.categoryList
    })
  },
  //监控data 中的数据变化
  watch: {},
  //方法集合
  methods: {
    goSearch(event) {
      let element = event.target;
      let { categoryname, category1id, category2id, category3id } = element.dataset;
      let location = { name: 'search' };
      let query = { caetgoryName: categoryname }
      if (categoryname) {
        if (category1id) {
          query.category1Id = category1id;
        } else if (category2id) {
          query.category2Id = category2id;
        } else {
          query.category3Id = category3id;
        }
        location.query = query;
        this.$router.push(location);
      }
    }
  },
  //生命周期- 创建完成（可以访问当前this 实例）
  created() {

  },
  //生命周期- 挂载完成（可以访问DOM 元素）
  mounted() {
    // 当组件挂载完毕，通知vuex获取三级联动数据
    this.$store.dispatch('categoryList')
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
<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item:hover {
          background: skyblue;
        }

        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }
          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &:hover {
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>