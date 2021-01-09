<template>
  <div>
    <!-- <p>{{ clock }}</p> -->
    <p>{{ hr }}:{{ min }}:{{ sc }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clock: new Date(),
      hr: '00',
      min: '00',
      sc: '00'
    }
  },
  methods: {
    updateTime: function() {
      this.clock = new Date()
      const hour = this.clock.getHours()
      this.hr = hour < 10 ? '0' + hour : hour
      const minutes = this.clock.getMinutes()
      this.min = minutes < 10 ? '0' + minutes : minutes
      const seconds = this.clock.getSeconds()
      this.sc = seconds < 10 ? '0' + seconds : seconds
    }
  },
  created() {
    setInterval(this.updateTime, 1000)
  }
}
</script>

<style scoped>
p {
  text-align: center;
  font-size: 60px;
}
</style>