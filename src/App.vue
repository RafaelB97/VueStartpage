<template>
  <div id="app">
    <header>
      <h1>Hello</h1>
    </header>
    <div class="main">
      <div class="container">
        <Clock />
        <Groups />
      </div>
      <!-- {{ groups }} -->
    </div>
  </div>
</template>

<script>
import Groups from './components/Groups'
import Clock from './components/Clock'

export default {
  name: 'App',
  components: {
    Groups,
    Clock
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

header {
  height: 10%;
}

.main {
  width: 100%;
  height: 90%;
  background: lightcoral;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  background: lightgreen;
  width: 65%;
  padding: 15px;
}
</style>
