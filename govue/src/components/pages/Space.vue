<template>
<div>
    <app-navbar></app-navbar>
     <div class="container">
     <h1>Earth Exploration</h1>
     <div class="row">
     <div class="col-xs-9"> 
     <transition name="fade" appear>
     <table class="table table-bordered">
    <thead>
      <tr>
     
        <th>Centroid Cordinates</th>
        <th>Dscovr J2000 Position</th>
        <th>Lunar J2000 Position</th>
        <th>Sun J2000 Position</th>
        <th>Attitude Quaternions</th>
       
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{ centroidCordinates.lat }}</td>
        <td>{{ dscovrj2000position.x }}</td>
        <td>{{ lunarj2000position.x }}</td>
        <td>{{ sunj2000position.x }}</td>
        <td>{{ attitudeQuaternions.q0 }}</td>
      </tr>
       <tr>
         <td>{{ centroidCordinates.lon }}</td>
        <td>{{ dscovrj2000position.y }}</td>
        <td>{{ lunarj2000position.y }}</td>
        <td>{{ sunj2000position.y }}</td>
        <td>{{ attitudeQuaternions.q1 }}</td>
      </tr>
      <tr>
         <td>N/A</td>
        <td>{{ dscovrj2000position.z }}</td>
        <td>{{ lunarj2000position.z }}</td>
        <td>{{ sunj2000position.z }}</td>
        <td>{{ attitudeQuaternions.q2 }}</td>
      </tr>
       <tr>
         <td>N/A</td>
        <td>N/A</td>
        <td>N/A</td>
        <td>N/A</td>
        <td>{{ attitudeQuaternions.q3 }}</td>
      </tr>
    </tbody>
  </table>
  </transition>
  <div class="col-xs-3">
  </div>
  </div>
  </div>

    <div class="row">

        <div class="col-xs-6">
            <button class="btn btn-primary" @click="getSpaceApi">Click Me</button>
        </div>

        <div class="col-xs-3">
        </div>
    </div>    

        <br></br>    
        
        <div class="row">
        <div class="col-xs-3">
            <p>{{ caption }}</p>
            <p>{{ date }}</p>
        </div>
        <div class="col-xs-6">
        <transition name="fade">
            <img v-show="show" style="width:620px;height:450px;" :src="image">
        </transition>    
        </div>
        <div class="col-xs-3">
        </div>
        </div>

     </div>  
</div>
</template>

<script>
    const urlbase = 'BKrMMUEI7Xs5iRtMsQV0jJD4FuHE20Svdi8hQIQd'
    import NavBar from '../items/NavBar.vue';
    export default {
        data: function() {
            return {
                show: false,
                index: 0,
                url: 'https://api.nasa.gov/EPIC/api/natural?api_key=' + urlbase,
                image: '',
                date: '',
                caption: '',
                centroidCordinates: {
                    lat: '',
                    lon: '',
                },
                dscovrj2000position: {
                    x: '',
                    y: '',
                    z: '',
                },
                lunarj2000position: {
                    x: '',
                    y: '',
                    z: '',
                },
                sunj2000position: {
                    x: '',
                    y: '',
                    z: '',
                },
                attitudeQuaternions: {
                    q0: '',
                    q1: '',
                    q2: '',
                    q3: '',
                },
            }
        },
        components: {
            appNavbar: NavBar,
        },
        methods: {
             getSpaceApi() {
                 let vm = this
             fetch(this.url).then(function(response) {
            return response.json();
            }).then(function(myJson) {
                vm.index += 1
            vm.index = vm.index % 21
                    vm.show = true
                    vm.date = myJson[vm.index].date.replace(/-/g, "/").substring(0,10)
                   vm.image = 'https://epic.gsfc.nasa.gov/archive/natural/' + vm.date + '/png/' + myJson[vm.index].image + '.png'
                    vm.caption = myJson[vm.index].caption
                    vm.centroidCordinates = myJson[vm.index].centroid_coordinates
                    vm.dscovrj2000position = myJson[vm.index].dscovr_j2000_position
                    vm.sunj2000position = myJson[vm.index].sun_j2000_position
                    vm.lunarj2000position = myJson[vm.index].lunar_j2000_position
                    vm.attitudeQuaternions = myJson[vm.index].attitude_quaternions
                                       console.log(vm.image)
                                       

            });
             },
    }
        
}
</script>
<style >
    .fade-enter {
        opacity: 0;
    }
    .fade-enter-active {
        transition: opacity 1s;
    }
    .fade-leave {

    }
    .fade-leave-active {
        transition: opacity 2s;
        opacity: 0;
    }
</style>
