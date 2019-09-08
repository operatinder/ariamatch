<template>
  <div class="simple-navigator">
    <div class="row">
      <div class="col-12">
        <button class="btn btn-primary navigation-btn" @click="prevRecording">&#129093</button>
      </div>
    </div>
    <div class="row">
      <div class="col-1 btn-column">
        <button class="btn btn-primary navigation-btn" @click="prevAria">&#129092</button>
      </div>
      <div class="col-10">
        <AriaCard :ariaData="current" />
      </div>
      <div class="col-1 btn-column">
        <button class="btn btn-primary navigation-btn" @click="nextAria">&#129094</button>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <button class="btn btn-primary navigation-btn" @click="nextRecording">&#129095</button>
      </div>
    </div>
  </div>
</template>

<script>
import AriaCard from "./Card.vue";
export default {
  name: "SimpleNavigator",
  components: {
    AriaCard
  },
  props: {
    current: Object,
    currentAria: Number,
    currentRecording: Number,
    all: Array
  },
  methods: {
    updateCard() {
      this.current = this.all[this.currentRecording][this.currentAria];
    },
    prevRecording() {
      if (this.currentRecording > 0) {
        this.currentRecording--;
      }
      this.updateCard();
    },
    nextRecording() {
      console.log(this.all);
      if (2 > this.currentRecording) {
        this.currentRecording++;
      }
      this.updateCard();
    },
    nextAria() {
      if (5 > this.currentAria) {
        this.currentAria++;
      }
      this.updateCard();
    },
    prevAria() {
      if (this.currentAria > 0) {
        this.currentAria--;
      }
      this.updateCard();
    }
  }
};
</script>

<style scoped lang="scss">
// See app.scss
</style>
