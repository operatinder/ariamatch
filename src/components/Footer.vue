<template>
  <div class="footer">
    Made at <a href="http://make.opendata.ch/wiki/event:2019-09">#mixnhack 2019</a>
    <a href="https://glam.opendata.ch/"><img
      alt="logo"
      src="../assets/logo.png"
    ></a>
    <a href="http://make.opendata.ch/wiki/project:opera_forever">More information</a>
  </div>
</template>

<style scoped lang="scss">
.footer {
  position: fixed;
  left: 0px; bottom: 0px;
  height: 2.5em; width: 100%;
  background: #ffc;
  z-index: 999;
  img {
    height: 90%;
    margin: 2pt 5pt;
  }
}
</style>
