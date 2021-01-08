<template>
  <div id="app">
    <div class="container">
      <Group v-for="group in groups" :key="group.id" :group="group"/>
    </div>
    <!-- {{ groups }} -->
  </div>
</template>

<script>
import groups from './groups'
import Group from './components/Group'

export default {
  name: 'App',
  components: {
    Group,
  },
  data() {
    return {
      groups,
    }
  }
}
</script>

<style>
.container {
  display: flex;
}
</style>
