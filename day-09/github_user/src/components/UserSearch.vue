<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyword"
      />&nbsp;<button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  name: "UserSearch",
  data() {
    return {
      keyword: '',
      url: "https://api.github.com/search/users?q="
    }
  },
  methods: {
    searchUsers() {
      if (this.keyword) {
        axios.get(this.url + this.keyword).then(
          response => {
            console.log("request successfully", response.data.items)
            this.$bus.$emit('getUsers', response.data.items)
          },
          error => {
            console.log("request failed", error.message)
          }
        )
      } else {
        alert('keyword can not be emptyed')
      }
    }
  },
};
</script>

<style>
</style>