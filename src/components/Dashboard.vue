<template>
<div class="about">

  <Swinging :cards="segments" />

</div>
</template>

<script>

import $backend from '../backend'

import Swinging from './Swinging.vue'

export default {
  name: 'Dashboard',
  components: {
    Swinging
  },
  data () {
    return {
      segments: [{
        'id': 1,
        'thumbnail': '/covers/Mozart_magic_flute.jpg',
        'label': 'Aria 45 n°1',
        'length': '03:44',
        'file': '/data/NYCO - Tape 18 Track1 Channel2 - Test1.mp3'
      },{
        'id': 2,
        'thumbnail': '/covers/Max_Slevogt_Zauberflöte_Szene.jpg',
        'label': 'Aria 42 n°2',
        'length': '02:44',
        'file': '/data/NYCO - Tape 18 Track1 Channel2 - Test2.mp3'
      },{
        'id': 3,
        'thumbnail': '/covers/DBP_1991_1571_Block_26_Wolfgang_Amadeus_Mozart.jpg',
        'label': 'Aria 42 n°3',
        'length': '01:44',
        'file': '/data/NYCO - Tape 18 Track1 Channel2 - Test3.mp3'
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
