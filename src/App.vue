<template>
  <div id="app">
    <div class="container">
      <Clock />
      <Groups :groups='groups' />
    </div>
    <!-- {{ groups }} -->
  </div>
</template>

<script>
import groups from './groups'
import Groups from './components/Groups'
import Clock from './components/Clock'

export default {
  name: 'App',
  components: {
    Groups,
    Clock
  },
  data() {
    return {
      groups,
    }
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  width: 100vw;
  height: 100vh;
  background: lightcoral;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  background: lightgreen;
  width: 65vw;
  padding: 15px;
}
</style>
