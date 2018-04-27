<template>
  <div id="two">
    <h1>{{ msg }}</h1>
    <img src="./assets/logo.png">
  </div>
</template>

<script>
export default {
  name: 'two',
  data () {
    return {
      msg: 'Welcome to the Twoooooo!'
    }
  }
}
</script>

<style>
#two {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 200px;
  height: 200px;
  margin: auto;
  position: relative;
  display: block;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

</style>
