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
          v-on="waveEvent"
          :audio-src="card.file"
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

.swing {
  height: 600px;
  margin-top: 50px;
}
.swing-card {
  align-items: center;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  height: 440px;
  justify-content: center;
  position: absolute;
  left: calc(50% - 275px);
  width: 550px;
}
.swing-card .thumb {
  pointer-events: none;
  width: 100%;
  height: 200px;
  background-size: cover;
  background-repeat: no-repeat;
}
.swing-card p {
  font-size: 32pt;
  margin: 0;
}
.swing-card .card-labels {
  display: block;
  width: 100%; height: 1.4em;
  overflow: hidden;
}
</style>
