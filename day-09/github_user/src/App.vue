<template>
  <div class="container">
    <UserSearch></UserSearch>
    <UserList></UserList>
  </div>
</template>

<script>
import UserSearch from "./components/UserSearch.vue";
import UserList from "./components/UserList.vue";
export default {
  name: 'App',
  components: {
    UserSearch,
    UserList
  }
}
</script>