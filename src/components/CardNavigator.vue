<template>
  <div class="card-navigator">
    <div class="card-wrapper">
      <div class="a-row">
        <div class="a-column" />
        <div class="a-column">
          <AriaCard :ariaData="layout.prevRecording" />
        </div>
        <div class="a-column" />
      </div>
      <div class="a-row">
        <div class="a-column">
          <AriaCard :ariaData="layout.prevAria" />
        </div>
        <div class="a-column">
          <AriaCard
            :ariaData="layout.current"
            @drag.native="dragCurrent"
            @dragend.native="dragEnd"
            @touchstart.native="touchStart"
            @touchmove.native="touchMove"
          />
        </div>
        <div class="a-column">
          <AriaCard :ariaData="layout.nextAria" />
        </div>
      </div>
      <div class="a-row">
        <div class="a-column" />
        <div class="a-column">
          <AriaCard :ariaData="layout.nextRecording" />
        </div>
        <div class="a-column" />
      </div>
    </div>
  </div>
</template>



<script>
import AriaCard from "./Card.vue";

export default {
  name: "CardNavigator",
  components: {
    AriaCard
  },
  props: {
    layout: Object
  },
  methods: {
    dragCurrent(e) {
      console.log("Dragging" + e.clientX);
    },
    dragEnd(e) {
      console.log("drag ended");
    },
    getTouches(evt) {
      return (
        evt.touches || evt.originalEvent.touches // browser API
      ); // jQuery
    },
    touchStart(evt) {
      const firstTouch = this.getTouches(evt)[0];
      this.vars.xDown = firstTouch.clientX;
      this.vars.yDown = firstTouch.clientY;
    },

    touchMove(evt) {
      if (!this.vars.xDown || !this.vars.yDown) {
        return;
      }

      var xUp = evt.touches[0].clientX;
      var yUp = evt.touches[0].clientY;

      var xDiff = this.vars.xDown - xUp;
      var yDiff = this.vars.yDown - yUp;

      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        /*most significant*/
        if (xDiff > 0) {
          console.log("Left Swipe");
        } else {
          console.log("Right Swipe");
        }
      } else {
        if (yDiff > 0) {
          console.log("Up Swipe");
        } else {
          console.log("Down Swipe");
        }
      }
      /* reset values */
      this.vars.xDown = null;
      this.vars.yDown = null;
    },
    created() {
      this.vars = {
        xDown: null,
        yDown: null
      };
    }
  }
};
</script>

<style scoped lang="scss">
// See app.scss
</style>
