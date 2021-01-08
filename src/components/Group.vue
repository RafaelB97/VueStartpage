<template>
  <div class="group">
    <h3>{{ group.title }}</h3>
    <ul>
      <li v-for="bookmark in group.bookmarks" :key="bookmark" >
        <a :href="bookmark.link">{{ bookmark.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: [ "group" ]
}
</script>

<style scoped>
.group {
  margin: 10px;
  background: grey;
  padding: 10px;
  border-radius: 15px;
}

h3 {
  margin: 0;
}
</style>