<template>
  <div class="group">
    <h3>{{ group.title }}</h3>
    <ul>
      <li v-for="bookmark in group.bookmarks" :key="bookmark.title" >
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
  background: grey;
  padding: 10px;
  border-radius: 15px;
  /* flex-grow: 1; */
}

h3 {
  margin: 0;
}
</style>