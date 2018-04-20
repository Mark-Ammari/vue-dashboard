<template>
<div class="container">
  <div class="row">
    <div class="col">
      <h1>{{ title }}</h1>
      <br>
        <appBox></appBox>
      <br>
      <div class="row">
        <appUserInput :url="url" @changeUrlbase="changeUrl"></appUserInput>
      </div>
    </div>
    <div>
    </div>
  </div>
</div>
</template>

<script>
    import UserInput from './components/UserInput.vue';
    import Box from './components/Box.vue';
    const urlbase = 'https://19tztqev18.execute-api.us-west-2.amazonaws.com/dev/tag?id=';
    export default {
      data: function() {
        return {
          title: 'Fetching...',
          success: '',
          url: urlbase + 'mark'
        }
      },
      components: {
          appUserInput: UserInput,
          appBox: Box,
      },
      methods: {
        changeUrl() {
          this.url = urlbase + event.target.value
        }
      }
    }
</script>
