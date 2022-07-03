<template>
  <div>
    <ul>
      <li
        v-for="message in messages"
        :key="message.id"
      >
        <!-- <router-link :to="`/home/message/detail?id=${message.id}&title=${message.title}`">
        {{message.title}}
        </router-link>&nbsp;&nbsp; -->
        <router-link :to="{
            path: '/home/message/detail',
            query: {
                id: message.id,
                title: message.title
            }
        }">{{message.title}}</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'MessagePage',
  data() {
    return {
      messages: [
        { id: 1, title: '消息001' },
        { id: 2, title: '消息002' },
        { id: 3, title: '消息003' }
      ]
    }
  },
}
</script>

<style>
</style>