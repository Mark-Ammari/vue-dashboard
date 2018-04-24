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
        
        props: ['url', "success"],

        data: function() {
            return { check: this.success }
        },
    
    methods: {
        checkSuccess: function(){
            // console.log('I am running')
            // fetch(this.url)
            // .then(response => response.json())
            // .then(myJson => this.check = myJson.success)
                  console.log('I am running')
            this.$http.get(this.url).then(response => response.json())
            .then(myJson => this.check = myJson.Success)
          },    
        changeUrl() {
            this.$emit('changeUrlbase', this.url)
        }  
    }
}
</script>
