<template>
  <div class="aria-card">
    <div class="row">
      <div class="col-sm">
        <h1>{{ ariaData.venue }}</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <h2>{{ ariaData.date }}</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <h3>{{ ariaData.label }}</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <label>{{ ariaData.on_stage }}</label>
      </div>
    </div>
    <div class="row" v-if="ariaData.img_url">
      <div class="col-sm">
        <img :src="ariaData.img_url" class="img-fluid aria-img">
      </div>
    </div>
    <div class="row" v-if="ariaData.audio_url">
      <div class="col-sm">
        <audio :src="ariaData.audio_url" ref="ariaaudio" controls="true" autoplay="true" />
      </div>
    </div>
    <div class="row">
      <div class="col-sm"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AriaCard",
  props: {
    ariaData: Object
  },
  methods: {
    waveEvent(e) {
      console.log(e);
    }
  }
};
</script>

<style scoped lang="scss">
// See app.scss
</style>
