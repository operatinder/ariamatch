<template>
  <div class="swing">
    <vue-swing
      ref="vueswing"
      :config="config"
      @throwout="onThrowout"
    >
      <div
        v-for="card in cards"
        :key="card.id"
        class="swing-card"
      >
       <div class="container">
        <div class="thumb" v-bind:style="{ 'background-image': 'url(' + card.thumbnail + ')' }" />
        <div class="label">
          {{ card.label }}
        </div>
        <div class="length">
          {{ card.length }}
        </div>
        <av-waveform
          :audio-src="card.file"
          @v-on="waveEvent"
        />
       </div>
      </div>
    </vue-swing>
  </div>
</template>

<script>
import VueSwing from 'vue-swing'

export default {
  name: 'Swinging',

  components: {
    VueSwing
  },

  props: {
    cards: Array
  },

  data () {
    return {
      config: {
        allowedDirections: [
          VueSwing.Direction.LEFT,
          VueSwing.Direction.RIGHT
        ],
        minThrowOutDistance: 250,
        maxThrowOutDistance: 300
      }
    }
  },
  methods: {
    onLoad () {},
    waveEvent(e) {
        console.log(e)
    },
    onThrowout ({ target, throwDirection }) {
      target.hidden = true
      // console.log(`Threw out ${target.textContent}!`)
    }
  }
}
</script>

<style scoped lang="scss">
// See app.scss
</style>
