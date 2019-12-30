<template>
    <div>
        <a href="#" @click.prevent="show()">Show modal</a>
        <modal name="hello-world">
            hello, world!
        </modal>
    </div>
</template>

<script>

export default {
    name: 'vueModal',
    data: function() {
        return {

        }
    },
    methods: {
        show () {
        this.$modal.show('hello-world');
        },
        hide () {
            this.$modal.hide('hello-world');
        }
    },
    computed: {
        

    }
    
}
</script>