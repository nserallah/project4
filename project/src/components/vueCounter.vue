<template>
    <div>
        <p>{{ name }}</p>
        <p>{{ count }}</p>
        <p>{{ upOne }}</p>
        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
    </div>
</template>

<script>
import {mapState, mapMutations, mapGetters} from "vuex"

export default {
    name: 'vueCounter',
    data: function() {
        return {

        }
    },
    methods: {
        ...mapMutations(['increment']),
        ...mapMutations(['decrement']) 
    },
    computed: {
        ...mapState(['count']),
        ...mapGetters(['upOne']),
        ...mapGetters(['name']),  

    }
    
}
</script>