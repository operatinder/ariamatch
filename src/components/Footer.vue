<template>
  <div class="footer">
    <h3>
      <a href="https://de.wikipedia.org/wiki/Die_Zauberfl%C3%B6te" target="_blank">
        Die Zauberflöte
      </a>
      &#127900;
      <small>Mozart</small>
    </h3>

    <div class="meta">
      <a href="http://make.opendata.ch/wiki/project:opera_forever" target="_blank" style="font-weight:bold">
        <img
          alt="logo"
          src="../assets/logo.png"
        >
        Opera Forever
      </a>/
      <a href="http://make.opendata.ch/wiki/event:2019-09" target="_blank">
        #mixnhack 2019
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer {
  position: fixed;
  left: 0px; bottom: 0px;
  width: 100%;
  background: #ffc;
  z-index: 999;
  vertical-align: middle;
  img {
    height: 2.4em;
    margin: 0.5em;
  }
  h3 {
    display: inline;
    line-height: 2em;
  }
  .meta {
    float: right;
    display: inline-block;
    margin-right: 2em;
  }
}
</style>
