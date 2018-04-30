<template>
  <!-- Include a gallery of photos or a blog? -->
  <div>
    <app-navbar></app-navbar>
    <div class="about-content">
      <h1 style= "text-align: center; padding-top:40px">{{ title }}</h1>
      <div style="text-align: center; padding:5%">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit
          gravida magna vitae fringilla. Donec consequat eros vel neque dapibus,
          sed tempus mauris auctor. Praesent tristique sagittis laoreet. Vivamus
          molestie consectetur dolor, ut maximus lorem. Phasellus commodo sem eu
          diam venenatis viverra. Donec efficitur purus urna, in faucibus eros
          tempor id. Nulla scelerisque eleifend sodales. Sed dapibus ligula libero,
          et blandit est cursus sed. Ut suscipit rutrum porta. Cras consequat, lorem
          eu congue facilisis, augue est accumsan elit, quis laoreet velit magna at
          ligula.</p>
      </div>

      <div class="meet-dev">
        <div class="box-padding">
          <h2 style="margin: 5% 15% 0% 0%">{{ dev1 }}</h2>
            <img class="meet-dev-imgLeft" src="../../assets/random.png">
            <p class="meet-dev-text">Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. In finibus ut augue mattis
              condimentum. Fusce ullamcorper libero neque, at laoreet nunc tempor ut.
               Mauris commodo metus orci, quis varius metus condimentum eu.</p>
          </div>
      </div>

      <div class="meet-dev" style="text-align:right">
        <div class="box-padding">
          <h2 style="margin: 5% 0% 0% 15%">{{ dev2 }}</h2>
            <div class="meet-dev-text">
                <img class="meet-dev-imgRight" src="../../assets/random.png">
              <p class="meet-dev-text">Curabitur placerat euismod neque nec commodo. Sed
              lobortis, massa eu scelerisque tempus, arcu mi vulputate tellus, vel
              rhoncus quam arcu eget sem. Etiam vel molestie lorem. Donec eget nisl dui.
               Nullam sagittis vehicula dolor elementum ultricies. Integer sit amet purus
                sit amet urna tempor bibendum sit amet ac sem.</p>
            </div>
          </div>
    </div>
  </div>
</div>
</template>

<script>
    import NavBar from '../items/NavBar.vue';
    export default {
      data() {
        return{
          title: 'Who Are We?',
          dev1: 'Mark Ammari',
          dev2: 'Yorranshell Wattson'
        }
      },
        components: {
            appNavbar: NavBar,
        }
    }
</script>

<style>

  .about-content {
    font-family: Times, sans-serif; /* for now */
    margin-left: 160px;
    /* background-color: grey; */
  }

  .h {
    display: block;
  }

  .meet-dev {
    box-sizing: border-box;
    display: block;
    overflow: auto;
    padding: 5% 5%;
    border: 0.5px dashed black; /*for my reference*/
  }

  .meet-dev-imgLeft {
    display: inline;
    max-width: 30%;
    max-height: 100%;
    margin: 5% 15% 0% 0%;
    border-radius: 50%;/* for circular image */
    float:left;
    clear:both;
  }

  .meet-dev-imgRight {
    display: inline;
    max-width: 30%;
    max-height: auto;
    margin: 5% 0% 0% 15%;
    border-radius: 50%;/* for circular image */
    float:right;
    clear:both;
  }

  .meet-dev-text {
    display: inline;
  }

</style>
