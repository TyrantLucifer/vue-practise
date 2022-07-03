<template>
  <div>
    <div class="row">
      <PageBanner></PageBanner>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- <a
            class="list-group-item"
            href="./about.html"
          >About</a>
          <a
            class="list-group-item active"
            href="./home.html"
          >Home</a> -->
          <router-link
            class="list-group-item"
            to="/about"
            active-class="active"
          >About</router-link>
          <router-link
            class="list-group-item"
            to="/home"
            a
            active-class="active"
          >Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageBanner from './components/PageBanner.vue';

export default {
  name: 'App',
  components: {
    PageBanner
  }
}
</script>

<style>
</style>
