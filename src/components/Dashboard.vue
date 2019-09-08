<template>
  <div class="about">
    <SimpleNavigator :all="arias" :current="arias[0][0]" :currentAria="0" :currentRecording="0" />
  </div>
</template>

<script>
import $backend from "../backend";

import SimpleNavigator from "./SimpleNavigator.vue";

export default {
  name: "Dashboard",
  components: {
    SimpleNavigator
  },
  data() {
    return {
      arias: [[{ label: "Test" }], [{ label: "Test2" }]]
    };
  },
  methods: {
    fetchData() {
      let self = this;
      fetch("/data.json")
        .then(function(response) {
          return response.json();
        })
        .then(function(jsonTree) {
          var grid = [];
          var work = jsonTree.works[0];
          var artists = new Map();
          jsonTree.artists.forEach(artist => {
            var artistInfo = {};
            artistInfo.img_url = artist.img_url;
            artistInfo.wikidata_uri = artist.wikidata_uri;
            artistInfo.name = artist.label;
            artists.set(artist.label, artistInfo);
          });
          work.performances.forEach((performance, perfId) => {
            grid.push([]);
            var cast = new Map();
            performance.cast.forEach(role => {
              if (artists.has(role.artist)) {
                cast.set(role.role, artists.get(role.artist));
              }
            });
            if (performance.segments) {
              performance.segments.forEach((segment, segmentId) => {
                var ariaDescription = {};
                ariaDescription.venue = performance.venue;
                ariaDescription.date = performance.date;
                ariaDescription.label = segment.label;
                ariaDescription.audio_url = segment.audio_url;
                if (segment.roles) {
                  var roles = "";
                  segment.roles.forEach(role => {
                    if (cast.has(role)) {
                      if(!ariaDescription.img_url){
                        ariaDescription.img_url = cast.get(role).img_url;
                      }
                      roles += role + "(" + cast.get(role).name + ") ";
                    } else {
                      ariaDescription.roles = role + " ";
                    }
                  });
                  ariaDescription.on_stage = roles;
                }
                else
                {
                  ariaDescription.on_stage = "";
                }
                grid[perfId].push(ariaDescription);
              });
            }
          });
          self.arias = grid;
        });
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>
