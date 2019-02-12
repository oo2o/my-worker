<template>
    <button @click="handleClick" :class="classes"><slot></slot></button>
</template>
<script>
    export default {
        name: 'Button',
        props: {
            type: String,
        },
        computed: { 
            classes(){
                return [
                    'my-button',
                    `my-button-${this.type ? this.type : 'primary' }`
                ]
            }
        },
        methods: {
            handleClick(e){
                this.$emit('on-click', e);
            }
        }
    };
</script>
