<template>
  <div id="box">
    <img src="https://media.sproutsocial.com/uploads/2016/08/LinkedIn-Analytics-01-1.png">
  </div>
</template>

<script>
export default {
  name: 'box',
  data () {
    return {
      msg: 'Analytics'
    }
  }
}
</script>

<style>
#box {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 125px;
  height: 100px;
  border: 5px solid green;
  position: static;
  float: left;
  display: inline-block;
}

img {
  width: 100%;
  height: 100%;
}

h1, h2 {
  font-weight: normal;
}
</style>
