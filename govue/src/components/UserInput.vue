<template>
    <div>
        <button type="button" class="btn btn-primary" @click="checkSuccess">Click</button>
        <input type="text" placeholder="Value" v-on:keydown.enter="changeUrl">
        <br></br>
        <p>{{ url }}</p>
    </div>    
</template>

<script>
    export default {
        props: ['url'],
    
    methods: {
        checkSuccess(){
            console.log('I am running')
            fetch(this.url)
              .then(response => response.json())
                .then(myJson => vm.successRate = myJson.success)
            //       console.log('I am running')
            // this.$http.get(this.url + '.json').then(response => response.json())
            // .then(myJson => myJson.Success)
          },
        changeUrl() {
            this.$emit('changeUrlbase', this.url)
        }  
    }
}
</script>
