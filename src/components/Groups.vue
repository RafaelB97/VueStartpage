<template>
  <div class="groups">
    <GroupItem v-for="group in groups" :key="group.id" :group="group"/>
  </div>
</template>

<script>
import GroupItem from './GroupItem'

export default {
  name: 'Groups',
  components: {
    GroupItem
  },
  props: [ 'groups' ]
}
</script>

<style>
.groups {
  /* display: flex;
  flex-wrap: wrap;
  justify-content: center; */
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  /* grid-template-columns: repeat(auto-fill, 1fr); */
  grid-auto-rows: 1fr;
  gap: 1rem;
}
</style>