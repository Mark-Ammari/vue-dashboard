<template>
<div>
    <app-navbar></app-navbar>
    <div class="container">
      <h1>{{ title }}</h1>
      <br>
        <div class="block" :class="{true: this.success, false: !this.success}"></div>
      <br>
      <div class="row">
        <button type="button" class="btn btn-primary" @click="checkSuccess">Click</button>
        <input type="text" placeholder="IP-Address" v-on:keydown.enter="changeUrl">
        <br></br>
        <p>{{ url }} {{ blockCounter }}/{{ unblockCounter }}</p>
    </div>  
      </div>
</div>
</template>

<script>
    import NavBar from '../NavBar.vue';
    const urlbase = 'https://kyv0geao18.execute-api.us-west-2.amazonaws.com/beta/simpleapi?ip=';
    export default {
      data() {
        return {
          title: 'Fetching...',
          success: false,
          url: urlbase + '0.0.0.0',
          blockCounter: 0,
          unblockCounter: 0
        }
      },
      components: {
          appNavbar: NavBar
      },
      watch: {
        success() {
          if(this.checkSuccess()) {
            this.unblockCounter++;
          } else {
            this.blockCounter++;
          }
        }
      },

      methods: {
        checkSuccess() {
          let vm = this;
          console.log('I am running')
          fetch(this.url).then(function(response) {
            return response.json();
            }).then(function(myJson) {
              console.log(myJson.success)
              return vm.success = myJson.success;
            });       
      },    
        changeUrl() {
            return this.url = urlbase + event.target.value
        },
      }
        
  }
</script>

<style>
    .block {
        background-color: gray;
        width: 100px;
        height: 100px;
        border: 3px solid black; 
    }

    .true {
        background-color: green;
    }

    .false {
        background-color: red;
    }
</style>
