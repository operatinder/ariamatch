<template>
<div class="about">

  <Swinging v-for="segment in segments" :card="segment" :key="segment.id" />

</div>
</template>

<script>

import $backend from '../backend'

import Swinging from './Swinging.vue'

export default {
  name: 'dashboard',
  components: {
    Swinging
  },
  data () {
    return {
      segments: [{
        'id': 'asdf1',
        'thumbnail': '/favicon.ico',
        'label': 'Aria 45 n°2',
        'length': '03:44'
      },{
        'id': 'asdf2',
        'thumbnail': '/favicon.ico',
        'label': 'Aria 42 n°3',
        'length': '03:44'
      }]
    }
  },
  methods: {
    fetchResource () {
      $backend.fetchSegment()
        .then(responseData => {
          this.segments = responseData
        }).catch(error => {
          console.error(error.message)
        })
    }
  }
}

</script>

<style lang="scss">
</style>
