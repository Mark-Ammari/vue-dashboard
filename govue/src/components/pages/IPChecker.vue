<template>
<div>
    <app-navbar></app-navbar>
    <div class="container">
      <h1>{{ title }}</h1>
      <br>
        <appBox :success="success"></appBox>
      <br>
      <div class="row">
        <appUserInput :success="success" :url="url" @changeUrlbase="changeUrl"></appUserInput>
      </div>
      </div>
</div>
</template>

<script>
    import UserInput from '../UserInput.vue';
    import Box from '../Box.vue';
    import NavBar from '../NavBar.vue';
    const urlbase = 'https://kyv0geao18.execute-api.us-west-2.amazonaws.com/beta/simpleapi?ip=';
    export default {
      data: function() {
        return {
          title: 'Fetching...',
          success: false,
          url: urlbase + '0.0.0.0'
        }
      },
      components: {
          appUserInput: UserInput,
          appBox: Box,
          appNavbar: NavBar
      },
      methods: {
        changeUrl() {
          this.url = urlbase + event.target.value
        }
      }
    }
</script>
